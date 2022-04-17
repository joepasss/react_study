import { useState, useEffect, useRef } from 'react';

function Todo() {
  const [loding, setLoding] = useState(true);
  const [todo, setTodo] = useState({});

  const isMounted = useRef(true);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setTodo(data);
            setLoding(false);
          }
        }, 1000);
      });

    // Runs when component is unmounted
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return loding ? <h3>Loading ...</h3> : <h1>{todo.title}</h1>;
}

export default Todo;