import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [localStroageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    const valueToStore =
      value instanceof Function ? value(localStroageValue) : value;

    setLocalStorageValue(value);

    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStroageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);

  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
