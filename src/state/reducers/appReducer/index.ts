import { AppReducer } from './types';
import { APP_TEST_ACTION } from '../../actions/appActions/actionTypes';
import { AppActions } from '../../actions/appActions';

const initialState: AppReducer = {
  test: false
};

export default (state = initialState, action: AppActions) => {
  switch (action.type) {
    case APP_TEST_ACTION:
      return { ...state, test: action.payload };
    default:
      return state;
  }
};
