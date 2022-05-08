import { FC, createContext, useReducer, ReactNode } from 'react';
import { alertReducer, Action } from './AlertReducer';

const AlertContext = createContext<any | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export const AlertProvider: FC<Props> = ({ children }) => {
  const initialState = '';

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
