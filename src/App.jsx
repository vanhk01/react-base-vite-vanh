import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNews';
import ReactLogo from './assets/react.svg'



function App() {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' alt="" />
      </div>
    </div>

  )
}

export default App
