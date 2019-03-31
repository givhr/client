import * as types from './actionTypes';
import { createAction } from '../types';

export const testAppAction = (test: boolean) => createAction(types.APP_TEST_ACTION, test);
