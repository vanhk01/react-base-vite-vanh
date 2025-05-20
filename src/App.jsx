import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNews';
import ReactLogo from './assets/react.svg'
import { useState } from 'react';



const App = () => {
  const [todoList, SetTodoList] = useState([]);
  const createID = () => {
    return Math.round(Math.random() * 1000000);
  }
  const addNewTodo = (name) => {
    const id = createID();
    const user = { id: id, name: name };
    let newList = [...todoList, user];
    SetTodoList(newList);
  }
  const deleteTodo = (id) => {
    let newList = [...todoList];
    newList = newList.filter((item) => {
      return item.id !== id
    });
    SetTodoList(newList);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ?
        <TodoData todoList={todoList} deleteTodo={deleteTodo} /> :
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' alt="" />
        </div>
      }


    </div>

  )
}

export default App
