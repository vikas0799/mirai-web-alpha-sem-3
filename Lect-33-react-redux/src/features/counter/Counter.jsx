import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value); // READ from store
  const dispatch = useDispatch();                            // to WRITE to store
  const [amount, setAmount] = useState(5); // form input stays local

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
        Add {amount}
      </button>
    </div>
  );
}