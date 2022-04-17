import useLoaclStorage from '../hooks/UseLocalStorage';

function CustomHooksExample() {
  // const { data, loading } = useFetch(
  //   'https://jsonplaceholder.typicode.com/posts',
  //   {}
  // );

  // if (loading) {
  //   return <h3>Loading ...</h3>;
  // }

  // return (
  //   <div>
  //     {data.map((post) => (
  //       <h3 key={post.id}>{post.title}</h3>
  //     ))}
  //   </div>
  // );

  const [task, setTask] = useLoaclStorage('task', '');
  const [tasks, setTasks] = useLoaclStorage('tasks', []);

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
      <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
          <label htmlFor='' className='form-label'>
            Task
          </label>
          <input
            className='form-control'
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>

      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomHooksExample;
