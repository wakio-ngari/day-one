import React, {useState} from 'react';

function App() {
  const [counter , setCounter]= useState(0);
   const handleClick=()=>{
    alert('you clicked this button');
     setCounter(counter + 1);
   };


return(
  <div className="App">
    <h1>Welcome to my app</h1>
    <img src='/images/key-3087900_1920.jpg'
    alt='key'
    style={{width:'300px',height:'200px'}}
    />
    <p>Life is as precious as a flower</p>
     <button onClick={handleClick}>click</button>
      <p>you  clicked here <b>{counter}</b> times.</p>
  </div>
);
}

export default App;