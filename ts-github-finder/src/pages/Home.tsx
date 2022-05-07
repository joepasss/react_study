import { FC } from 'react';

// Components
import { UserResults } from '../component/users/UserResults';

export const Home: FC = () => {
  return (
    <div>
      {/* SEARCH COMPONENT */}
      <UserResults />
    </div>
  );
};
