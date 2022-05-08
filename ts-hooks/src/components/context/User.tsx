import { useContext } from 'react';
import { AuthUser, UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: 'joe',
      email: 'joe@gmail.com',
    });
  };

  const handleLogout = () => {
    userContext.setUser({} as AuthUser);
  };

  return (
    <div className='container'>
      <div className='input-div'>
        <button className='button' onClick={handleLogin}>
          Login
        </button>
        <button className='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className='output-div'>
        <div>User name is {userContext.user.name}</div>
        <div>User email is {userContext.user.email}</div>
      </div>
    </div>
  );
};
