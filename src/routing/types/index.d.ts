// ============= MAIN NAV ROUTES =================
export type indexRoute = '/';
export type dashboardRoute = 'dashboard';

export interface MainNavRoutes {
  root: indexRoute;
  dashboard: dashboardRoute;
}

// ============= CREATE NAV ROUTES =================
export type createGiveawayRoute = 'create-giveaway';
export const createGiveawayRoute: 'create-giveaway' = 'create-giveaway';
export type generalInfoRoute = 'general-info';
export type schedulingRoute = 'scheduling';
export type buildSurveyRoute = 'build-survey';
export type previewPostRoute = 'preview-post';
export type previewSurvey = 'preview-survey';

export interface CreateNavRoutes {
  createGiveaway: createGiveawayRoute;
  generalInfo: generalInfoRoute;
  scheduling: schedulingRoute;
  buildSurvey: buildSurveyRoute;
}
