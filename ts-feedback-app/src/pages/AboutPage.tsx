import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Card } from '../components/shared/Card';

export const AboutPage: FC = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          cum! Pariatur, corrupti!
        </p>
      </div>

      <p>
        <Link to={'/'}>Back To Home</Link>
      </p>
    </Card>
  );
};
