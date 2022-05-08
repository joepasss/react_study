import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'joe',
      email: 'joe@gmail.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className='container'>
      <div className='input-div mb-2'>
        <button className='button' onClick={handleLogin}>
          Login
        </button>
        <button className='button ml-2' onClick={handleLogout}>
          Logout
        </button>
      </div>
      {user !== null && (
        <div className='output-div'>
          <div>User name is {user.name}</div>
          <div>User email is {user.email}</div>
        </div>
      )}
    </div>
  );
};
