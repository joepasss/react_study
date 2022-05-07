import { FC, useEffect, useState } from 'react';
import { Users, User } from '../../types/UserTypes';

export const UserResults: FC = () => {
  const [users, setUsers] = useState<Users>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data: Users = await response.json();

    setUsers(data);
    setLoading(false);
  };

  if (loading) {
    return <h3>loading</h3>;
  }

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user: User) => (
        <h3 key={user.node_id}>{user.login}</h3>
      ))}
    </div>
  );
};
