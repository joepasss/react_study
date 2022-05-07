import { FC } from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../types/UserTypes';

interface Props {
  user: User;
}

export const UserItem: FC<Props> = ({ user: { login, avatar_url } }) => {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={avatar_url} alt='Profile' />
            </div>
          </div>
        </div>

        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className='text-base-content text-opacity-50'
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
