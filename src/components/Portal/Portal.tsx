import { Component } from 'react';
import ReactDOM from 'react-dom';
const modalRoot = document.getElementById('portal') as HTMLElement;

class Portal extends Component<{ children?: any }, {}> {
  public el: HTMLElement;
  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, modalRoot);
  }
}

export { Portal };
