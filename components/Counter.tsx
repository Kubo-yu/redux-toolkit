import { increment, decrement, reset } from '../store/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>＋</button>
      <button onClick={() => dispatch(decrement())}>ー</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  )
}
