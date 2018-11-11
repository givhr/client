import React, { Component } from 'react';
interface Props {
  name: string;
}

class Home extends Component<Props, {}> {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Home;
