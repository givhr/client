// tslint:disable:jsx-no-lambda
import React from 'react';
import { LandingPage } from '../Layouts/IndexLayout';
import Image from '../components/Image';
import GivhrLogo from '../assets/images/givhr_text_logo.png';
import Button from '../components/Button';
import { StaticQuery, graphql, navigate } from 'gatsby';

const IndexPage: React.FunctionComponent = () => (
  <LandingPage>
    <StaticQuery
      query={graphql`
        query GivhrTest {
          givhr {
            surveys {
              id
              title
            }
          }
        }
      `}
      render={({ givhr }) => {
        console.log(givhr);
        return givhr.surveys.map((survey) => (
          <>
            <div>ID: {survey.id}</div>
            <div>TITLE: {survey.title}</div>
          </>
        ));
      }}
    />
  </LandingPage>
);

export default IndexPage;
