// tslint:disable:jsx-no-lambda
import React from 'react';
import { LandingPage } from '../Layouts/IndexLayout';
import Image from '../components/Image';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Button from '../components/Button';
import { getSurveys, updateSurvey } from '../services/api';
import { connect } from 'react-redux';

// const IndexPage: React.FunctionComponent = () => (
//   <LandingPage>
//     <h1>Hello</h1>
//   </LandingPage>
// );

class IndexPage extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      surveys: ['Nothing']
    };
  }

  componentDidMount() {
    // getSurveys();
    updateSurvey(2, { title: 'dallin' });
  }
  render() {
    return <div>Hello</div>;
  }
}

const mapStateToProps = (state: any) => {
  console.log('STATE: ', state);
  return {
    state
  };
};

export default connect(mapStateToProps)(IndexPage);
