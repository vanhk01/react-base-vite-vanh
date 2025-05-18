const TodoData = (props) => {
    const { name, age, data } = props;
    return (
        <div className='todo-data'>
            <div>My name is {name}</div>
            <div>Age: {age}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}

export default TodoData;