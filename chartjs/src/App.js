import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

import { UserData } from './Data';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          '#ecf01f1',
          '#50af95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: '3',
        borderRadius: '10',
      },
    ],
  });

  return (
    <div className='App'>
      <BarChart chartData={userData} />
      <LineChart chartData={userData} />
      <PieChart chartData={userData} />
    </div>
  );
}

export default App;
