// depandencies
import { Navigate, Outlet } from 'react-router-dom';

// hooks
import { useAuthStatus } from '../hooks/useAuthStatus';

// components
import Spinner from './Spinner';

function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
}

export default PrivateRoute;
