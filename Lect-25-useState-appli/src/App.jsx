// // // // // import { useState } from 'react';

// // // // // export default function MyInput() {
// // // // //   const [text, setText] = useState('hello');

// // // // //   function handleChange(e) {
// // // // //     console.log(e);
// // // // //     setText(e.target.value);
// // // // //     console.log("AJ AM");
// // // // //     console.log("AJ kldsAM");

// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //     <h1>Lorem ipsum dolor sit.</h1>
// // // // //       <input value={text} onChange={handleChange} />
// // // // //       <input type="text" value="hiiii" />
// // // // //     </>
// // // // //   );
// // // // // }

// // // // import { useState } from 'react';

// // // // export default function MyInput() {
// // // //   const [text, setText] = useState('hello');

// // // //   function handleChange(e) {
// // // //     setText(e.target.value);
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <input value={text} onChange={handleChange} />
// // // //       <p>You typed: {text}</p>
// // // //       <p>You typed: {text}</p>
// // // //       <p>You typed: {text}</p>
// // // //       <p>You typed: {text}</p>
// // // //       <p>You typed: {text}</p>

// // // //       <button onClick={() => setText('hello')}>
// // // //         Reset
// // // //       </button>
// // // //     </>
// // // //   );
// // // // }


// // // import { useState } from 'react';

// // // export default function MyCheckbox() {
// // //   const [liked, setLiked] = useState(true);

// // //   function handleChange(e) {
// // //     setLiked(e.target.checked);
// // //   }

// // //   return (
// // //     <>
// // //       <label>
// // //         <input
// // //           type="checkbox"
// // //           checked={liked}
// // //           onChange={handleChange}
// // //         />
// // //         I liked this
// // //       </label>
// // //       <p>You {liked ? 'liked' : 'did not like'} this.</p>
// // //     </>
// // //   );
// // // }



// // import { useState } from 'react';

// // export default function Form() {
// //   const [name, setName] = useState('Taylor');
// //   const [age, setAge] = useState(42);

// //   return (
// //     <>
// //       <input
// //         value={name}
// //         onChange={(e) => setName(e.target.value)}
// //       />

// //       <button onClick={() => setAge(age + 1)}>
// //         Increment age
// //       </button>

// //       <p>Hello, {name}. You are {age}.</p>
// //       <p>Hello, {name}. You are {age}.</p>
// //       <p>Hello, {name}. You are {age}.</p>
// //       <p>Hello, {name}. You are {age}.</p>
// //       <p>Hello, {name}. You are {age}.</p>

// //     </>
// //   );
// // }


// import { useState } from 'react';

// export default function Counter() {
//   const [age, setAge] = useState(42);

//   function increment() {
//     // setAge(age=>age + 1);
//     setAge(age + 1);

//   }

//   return (
//     <>
//       <h1>Your age: {age}</h1>
//       <button onClick={() => {
//         increment();
//         increment();
//         increment();
//       }}>+3</button>
//       <button onClick={() => {
//         increment();
//       }}>+1</button>
//     </>
//   );
// }



import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
