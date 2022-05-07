import { Users } from '../../types/UserTypes';

interface State {
  users: Users;
  loading: boolean;
}

interface Action {
  type: 'GET_USERS' | 'SET_LOADING';
  payload?: any;
}

export const githubReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
