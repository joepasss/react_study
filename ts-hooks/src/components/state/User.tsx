import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'joe',
      email: 'joe@gmail.com',
    });
  };

  return (
    <div className='container'>
      <div className='input-div mb-2'>
        <button className='button' onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className='output-div'>
        <div>User name is {user.name}</div>
        <div>User email is {user.email}</div>
      </div>
    </div>
  );
};
