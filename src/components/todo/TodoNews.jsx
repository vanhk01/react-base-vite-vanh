import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;
    const [valueInput, setValueInput] = useState('');
    const handleOnChange = (name) => {
        setValueInput(name);
    }
    const handleOnClick = () => {
        addNewTodo(valueInput);
        setValueInput('');
    }
    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => { handleOnChange(event.target.value) }} value={valueInput} />
            <button onClick={handleOnClick}>Add</button>
            <div>My name is {valueInput}</div>
        </div>
    )
}

export default TodoNew;