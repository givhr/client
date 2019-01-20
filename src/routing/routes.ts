import { ThemeColors } from '../theme/colors/colors';
import { dashboardRoute } from './types';

export type RootPath = '/';
export const Landing: RootPath = '/';

export type DashboardPath = '/dashboard';
export const Dashboard: DashboardPath = '/dashboard';

export type CreateSurveyPath = '/dashboard/create-survey';
export const CreateSurvey: CreateSurveyPath = '/dashboard/create-survey';

export type AppRoutes = RootPath | DashboardPath | CreateSurveyPath;

export interface ActiveRoute {
  color?: ThemeColors.primary14;
  fontWeight?: string;
}

export interface LinkProps {
  to: AppRoutes;
  activeStyle: ActiveRoute;
  text: string;
}
export interface Routes<T> {
  root: RootPath;
  dashboard: T[];
}

export interface DashboardRoutes extends LinkProps {
  to: DashboardPath;
  activeStyle: {
    color: ThemeColors.primary14;
    fontWeight: 'bold';
  };
  text: 'Dashboard';
}

export const Routes: Routes<LinkProps> = {
  root: '/',
  dashboard: [
    {
      to: Dashboard,
      text: 'Dashboard',
      activeStyle: {
        color: ThemeColors.primary14,
        fontWeight: 'bold'
      }
    },
    {
      to: CreateSurvey,
      text: 'Template Coming Soon',
      activeStyle: {
        color: ThemeColors.primary14,
        fontWeight: 'bold'
      }
    }
  ]
};
