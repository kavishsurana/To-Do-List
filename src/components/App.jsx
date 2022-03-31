import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    if(localStorage.getItem('items') !== null) {
      setItems(JSON.parse(localStorage.getItem('items')));
    }
  }, [])
  

  function addItem(inputText) {
    const newItems = [...items, inputText];
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(prevItems => {
      return [...prevItems, inputText];

    });
   
  }

  function deleteItem(id) {
    const newItems = items.filter((item, index) => {
      return index !== id;
    });
    localStorage.setItem('items', JSON.stringify(newItems));
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
