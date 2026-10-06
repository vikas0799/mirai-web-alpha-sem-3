import { useState } from 'react';

export default function Counter() {
  let [count, setCount] = useState(18);

  function handleClick() {
    console.log(count);
    setCount(count + 5);
    count=count+5;
    console.log(count);

  }

  return (
   <div>
     <button onClick={handleClick}>
      You pressed me {count} times
    </button>
    <h1>{count}</h1>
    <h1>{count}</h1>
    <h1>{count}</h1>
    <h1>{count}</h1>
    <h1>{count}</h1>
    <h1>{count}</h1>
    <h1>{count}</h1>
    <h1>{count}</h1>
    <h1>{count}</h1>

   </div>
  );
}
