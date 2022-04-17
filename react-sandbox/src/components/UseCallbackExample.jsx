import React, { useState, useCallback } from 'react';

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task']);
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log('Button renderd');

  return (
    <div>
      <button onClick={addTask} className='btn btn-primary'>
        AddTask
      </button>
    </div>
  );
});

export default UseCallbackExample;
