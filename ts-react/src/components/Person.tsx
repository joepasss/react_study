import { FC } from 'react';

interface Props {
  name: string;
  age?: number;
  email: string;
  // getName: (name: string) => string;
}

export const Person: FC<Props> = ({ name, age, email }) => {
  return (
    <div>
      <h1>
        {name} <span>{age}</span>
      </h1>
      <h2>@ {email}</h2>
    </div>
  );
};
