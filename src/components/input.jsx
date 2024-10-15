import { useState } from "react"
const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState("")
    

    const handleAddTask = (e)=>{
        e.preventDefault()
        setTaskList([...taskList, input])
        setInput("")
    }
    return(
        <>
            <form>
                <input 
                    type="text" 
                    placeholder="create todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                    <br />
                <button className="Add-button" onClick={handleAddTask}>Add</button>
            </form>
        </>
    )
}

export default Input