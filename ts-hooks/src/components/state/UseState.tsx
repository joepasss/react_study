import { useState } from 'react';

export const UseState = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>LogOut</button>
      <div>User is {isLoggedIn ? 'Logged in' : 'Logged out'}</div>
    </div>
  );
};
