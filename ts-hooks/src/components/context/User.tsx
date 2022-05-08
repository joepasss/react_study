import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: 'joe',
        email: 'joe@gmail.com',
      });
    }
  };

  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
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
        <div>User name is {userContext?.user?.name}</div>
        <div>User email is {userContext?.user?.email}</div>
      </div>
    </div>
  );
};
