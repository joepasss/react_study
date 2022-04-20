import { useEffect, useState, useRef } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }

        setCheckingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  });

  return { loggedIn, checkingStatus };
};

// protected routes in v6 ref
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// fix memory leak warning ref
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-unmounted-component-in-react-hooks
