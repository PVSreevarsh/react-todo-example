import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import ListItem from './ListItem';

function App() {
  document.title = 'Todo App';

  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([
    { id: '1', text: 'item 1', visibility: true },
    { id: '2', text: 'item 2', visibility: true },
    { id: '3', text: 'item 3', visibility: true },
    { id: '4', text: 'item 4', visibility: true },
  ]);

  const generateId = () => {
    const highestId = Math.max.apply(
      Math,
      todoList.map(function (element) {
        return element.id;
      })
    );
    let newId = 1;
    if (highestId > 0) {
      newId = highestId + 1;
    }
    return newId;
  };

  function createNewToDoItem() {
    if (todoItem !== '') {
      const item = { id: generateId(), text: todoItem };
      const tempArray = [...todoList, item];
      setTodoList(tempArray);
    }
    setTodoItem('');
  }

  function handleAdd(e) {
    e.preventDefault();
    createNewToDoItem();
  }

  const handleToggle = (id) => {
    setTodoList(
      todoList.forEach((item) => {
        item.visibility = item.id === id ? false : true;
      })
    );
    setTodoList(todoList.filter((item) => item.visibility !== false));
  };

  return (
    <div className="container mt-5 col-8">
      <h3>Todo List</h3>
      <div className="input-group">
        <input
          type="text"
          name="todoItem"
          className="form-control"
          value={todoItem}
          onChange={(e) => {
            setTodoItem(e.currentTarget.value);
          }}
        />

        <div className="input-group-append">
          <button type="button" onClick={handleAdd} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
      <div className="mt-2">
        {todoList.length ? (
          <ul>
            <ListItem list={todoList} deleteItem={handleToggle} />
          </ul>
        ) : (
          <p>No items to list.</p>
        )}
      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
