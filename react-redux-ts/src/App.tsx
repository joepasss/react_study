import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdraw, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amout = useSelector((state: State) => state.bank);

  return (
    <div className='App'>
      <h1>{amout}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdraw(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
