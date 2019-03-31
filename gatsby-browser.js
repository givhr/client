import wrapWithProvider from './wrap-with-providers';
export const wrapRootElement = wrapWithProvider;

// import DashboardNav from './src/routing/DashboardNav';
// import SideNav from './src/routing/SideNav';
// import posed, { PoseGroup } from 'react-pose';

// const Transition = posed.div({
//   enter: { opacity: 1, delay: 300, beforeChildren: true },
//   exit: { opacity: 0 }
// });

// export const wrapPageElement = ({ element, props }) => {
//   const { dashboardNav, sideNav } = props.pageContext;
//   return (
//     <>
//       {dashboardNav && <DashboardNav />}
//       {sideNav && <SideNav vert />}
//       {element}
//     </>
//   );
// };

// export const replaceComponentRenderer = ({ props, ...other }) => {
//   const { component } = props.pageResources;
//   return (
//     <PoseGroup>
//       <Transition key={props.location.key}>{React.createElement(component, props)}</Transition>
//     </PoseGroup>
//   );
// };
