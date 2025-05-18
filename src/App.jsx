import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNews';
import ReactLogo from './assets/react.svg'



function App() {
  const name = 'Vanh Khong';
  const age = 24;
  const data = {
    adress: 'Hn',
    country: 'VietNam'
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData name={name} age={age} data={data} />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' alt="" />
      </div>
    </div>

  )
}

export default App
