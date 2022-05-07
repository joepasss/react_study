import { FC, ReactNode, createContext, useReducer } from 'react';
import { Users } from '../../types/UserTypes';
import { githubReducer } from './GithubReducer';

const GithubContext = createContext<any | undefined>(undefined);

const GITHUB_URL: string | undefined = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN: string | undefined = process.env.REACT_APP_GITHUB_TOKEN;

interface Props {
  children: ReactNode;
}

export const GithubProvider: FC<Props> = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text: string) => {
    dispatch({ type: 'SET_LOADING' });

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token: ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, searchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
