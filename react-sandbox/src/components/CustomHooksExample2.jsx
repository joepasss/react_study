import './customHooksExample2.scss';
import useLocalStorage from '../hooks/useLocalStorage';

function CustomHooksExample2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };

  return (
    <>
      <form className='w-50' onSubmit={onSubmit}>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            TASK
          </label>
          <input
            type='text'
            className='form-control'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-prymary'>
          Submit
        </button>
      </form>

      <hr />

      {tasks.map((task, index) => (
        <h3 key={task.date + index}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomHooksExample2;
