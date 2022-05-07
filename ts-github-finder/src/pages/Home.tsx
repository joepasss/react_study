import { FC } from 'react';

// Components
import { UserResults } from '../component/users/UserResults';
import { UserSearch } from '../component/users/UserSearch';

export const Home: FC = () => {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
};
