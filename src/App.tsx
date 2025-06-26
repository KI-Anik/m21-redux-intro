// import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
import {RootState} from './redux/store'
import { useAppDispatch, useAppSelector } from './redux/hook';

const App = () => {
  const dispatch = useAppDispatch()
const {count} = useAppSelector((state)=>state.counter)

  const handleIncrement = ()=>{
    dispatch(increment())
  }

  const handleDecrement = () =>{
    dispatch(decrement())
  }
  return (
    <div>
      <h1>Counter with Redux</h1>

      <button onClick={handleIncrement}>Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default App;