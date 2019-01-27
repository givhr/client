export type PrivateRouteComponent = React.ComponentClass | React.FunctionComponent;

export enum routePaths {
  home = '/',
  login = '/login',
  privateApp = '/app/*',
  dashboard = 'dashboard/*',
  createGiveaway = '/create-giveaway'
}
