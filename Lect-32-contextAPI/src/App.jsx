import react from 'react';
import ChildA from './components/ChildA';
import { createContext } from 'react';


  export  const data=createContext();

function App(){
  const name="aman";
  const age=20;


  
  return (
    <data.Provider value={{name,age}}>
        <div>
          hi bye
        </div>
        <ChildA/>

    </data.Provider>
  
  )
}
export default App;