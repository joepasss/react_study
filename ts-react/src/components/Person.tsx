import React, { FC, useState, ChangeEvent } from 'react';

interface Props {
  name: string;
  age?: number;
  email: string;
  hairColor: HairColor;
  // getName: (name: string) => string;
}

export enum HairColor {
  Blonde = 'Your hair is blonde',
  Brown = 'cool haircolor',
  Pink = 'Wow',
  Black = 'JOE',
}

export const Person: FC<Props> = ({ name, age, email, hairColor }) => {
  // const [country, setCountry] = useState(''); JS
  const [country, setCountry] = useState<string | null>(null);

  // type NameType = 'JOE' | 'DonnaLee';
  // const nameForType: NameType = 'JOE';

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
      <br />
      {HairColor.Blonde}
    </div>
  );
};
