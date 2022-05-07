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
    loading: true,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token: ${GITHUB_TOKEN}`,
      },
    });

    const data: Users = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
