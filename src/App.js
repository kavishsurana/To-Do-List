import React from "react";

var isDone = false;

function strike(){
  isDone=true;
}

function unstrike(){
  isDone=false;
}


function App() {
return (
  <>
  <p style = {isDone ? {textDecoration : "line-through"}: null}>Buy Milk</p>
  <button onClick={strike}>done</button>
  </>
)
}

export default App;
