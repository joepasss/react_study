interface State {
  msg: string;
}

export interface Action {
  type: 'SET_ALERT';
  payload?: any;
}

export const alertReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
