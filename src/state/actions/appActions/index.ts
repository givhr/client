import { ActionsUnion } from '../types';
import * as appActions from './actions';

export type AppActions = ActionsUnion<typeof appActions>;
