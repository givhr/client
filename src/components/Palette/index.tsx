import React from 'react';
import styled from '../../theme/styledComponent';
/*const Palette: React.FunctionComponent<{ color: string }> = (props) => <div />;*/

export const Palette = styled.div<{ color: string }>`
  border-radius: 4px;
  background-color: red;
  height: 100px;
  width: 100px;
`;

/*
const MetaData: React.SFC<IMetaData> = (props) => (
  <Helmet>
    <meta name="description" content="epixNOW a new way to experience there favorite shows" />
<link rel="canonical" href={props.href} />
<title>{`epixNOW - ${props.title}`}</title>
</Helmet>
);*!/
*/
