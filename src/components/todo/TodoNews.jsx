import { useState } from "react";

const TodoNew = (props) => {
    const { addNewTodo } = props;
    const [inputValue, setInputValue] = useState('');
    const handleOnChange = (name) => {
        setInputValue(name);
    }
    const handleOnClick = () => {
        addNewTodo(inputValue);
        setInputValue("");
    }
    return (
        <div className='todo-new'>
            <input type="text" onChange={(event) => handleOnChange(event.target.value)} value={inputValue} />
            <button onClick={() => handleOnClick()}>Add</button>
            <div>My name is {inputValue}</div>
        </div>
    )
}

export default TodoNew;