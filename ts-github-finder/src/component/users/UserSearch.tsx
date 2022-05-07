import { FC, useState, useContext, ChangeEvent, FormEvent } from 'react';

import GithubContext from '../../context/github/GithubContext';

export const UserSearch: FC = () => {
  const [text, setText] = useState<string>('');

  const { users } = useContext(GithubContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter something');
    } else {
      // TODO: search users

      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='Search'
              value={text}
              onChange={(e) => handleChange(e)}
            />
            <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
              GO
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg'>Clear</button>
        </div>
      )}
    </div>
  );
};
