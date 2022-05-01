import React, { FC, useState, ChangeEvent } from 'react';

interface Props {
  name: string;
  age?: number;
  email: string;
  // getName: (name: string) => string;
}

export const Person: FC<Props> = ({ name, age, email }) => {
  // const [country, setCountry] = useState(''); JS
  const [country, setCountry] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>
        {name} <span>{age}</span>
      </h1>
      <h2>@ {email}</h2>

      <input
        placeholder='Write down your country ...'
        onChange={handleChange}
      />
      <br />
      {country}
    </div>
  );
};
