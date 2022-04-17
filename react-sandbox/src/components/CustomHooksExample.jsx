import { useState } from 'react';

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

  const [task, setTask] = useState('');

  return (
    <form className='w-50'>
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
    </form>
  );
}

export default CustomHooksExample;
