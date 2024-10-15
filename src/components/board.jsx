import './Board.css'
const Board = ({ task, index, taskList, setTaskList })=>{
    const handleDelete = ()=>{
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1)
        setTaskList((currentTask => currentTask.filter(todo => index === removeIndex)))
    }
    return(
        <>
            <div className='board-item'>
                <p>{task}</p>
                <button className='del-button'onClick={handleDelete}>Delete</button>
            </div>
        </>
    )
}

export default Board