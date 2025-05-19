import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNews';
import ReactLogo from './assets/react.svg'
import { useState } from 'react';



const App = () => {
  const [todoList, setTodoList] = useState([]);
  const addNewTodo = (name) => {
    let id = createID();
    const todo = { id: id, name: name };
    const list = [...todoList, todo];
    setTodoList(list);
  }
  const deleteTodo = (id) => {
    let list = [...todoList];
    list = list.filter((item) => item.id !== id)
    setTodoList(list);
  }
  const createID = () => {
    return Math.round(Math.random() * 1000000);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew addNewTodo={addNewTodo} />
      {todoList.length > 0 ?
        <TodoData todoList={todoList} deleteTodo={deleteTodo} /> :
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' alt="" />
        </div>}
    </div>

  )
}

export default App
