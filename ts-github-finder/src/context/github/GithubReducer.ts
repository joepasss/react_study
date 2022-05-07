import { Users } from '../../types/UserTypes';

interface State {
  users: Users;
  loading: boolean;
}

interface Action {
  type: 'GET_USERS';
  payload: any;
}

export const githubReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
