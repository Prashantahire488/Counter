import {useState} from 'react'
function App() {
  const [count, setcount] = useState(0)
  const change=(value)=>{
    setcount(count+value)
  };
  const changedouble=(value)=>{
    setcount(count*2)
  }
  return (
    <div>
    <div className="App">
      <h1>COUNTER:{count}</h1>
          <button onClick={()=>change(1)}>+1</button>
          <button onClick={()=>change(-1)}>-1</button>
          <button onClick={()=>changedouble(2)}>x2</button>
      </div>
    </div>
   
    
  );
}

export default App;

