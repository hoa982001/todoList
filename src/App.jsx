import React, { useState } from "react";
import './App.css';
import TodoItem from "./components/TodoItem";
function App() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  function addItem(e) {
    setItems(prevDate => {
      return [...prevDate, input];
    });
    setInput('');
  }

  function removeItem(id) {
    setItems(prevDate => {
      return prevDate.filter((item, index) => {
        return index != id;
      })
    })
  }
  return (
    <div className="todo-list">
      <div className="header">
        <h1 className="title">TO-DO LIST</h1>
      </div>
      <input type="text"
        value={input}
        onChange={(e) => { setInput(e.target.value) }}
      />
      <button onClick={addItem}>ADD</button>
      <div className="items">
        <ul>
          {items.map((item, index) => (
            <TodoItem
              key={index}
              id={index}
              item={item}
              onCheck={removeItem}
            ></TodoItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
