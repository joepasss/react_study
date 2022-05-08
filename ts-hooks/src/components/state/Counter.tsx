import { FC, useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'INCREMENT' | 'DECREMENT';
  payload: number;
};

type ResetAction = {
  type: 'RESET';
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const Counter: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='container'>
      Count: {state.count}
      <button
        className='button'
        onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}
      >
        Increment 10
      </button>
      <button
        className='button'
        onClick={() => dispatch({ type: 'DECREMENT', payload: 10 })}
      >
        DECREMENT 10
      </button>
      <button className='button' onClick={() => dispatch({ type: 'RESET' })}>
        RESET
      </button>
    </div>
  );
};
