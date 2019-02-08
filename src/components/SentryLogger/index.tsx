import React from 'react';

interface SentryProps {
  component: React.ClassicComponent<any>;
}

// export const SentryLogger: React.FunctionComponent<SentryProps> = ({ component: Component }) => {
//   class extends React.Component<P, S> {
//     constructor(props)
//   }
// };

// export default SentryLogger;

export default (Component: React.Component) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
      this.setState({ error });
      Sentry.configureScope((scope) => {
        Object.keys(errorInfo).forEach((key) => {
          scope.setExtra(key, errorInfo[key]);
        });
      });
      Sentry.captureException(error);
    }

    render() {
      if (this.state.error) {
        return <h2>There is something wrong</h2>;
      } else {
        return <Component {...this.props} />;
      }
    }
  };
