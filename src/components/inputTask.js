import { add } from "../reducers/task_slice";
import { useDispatch } from "react-redux";
import { useRef } from "react";
function InputTask (){
    const taskName = useRef();
    const dispatch = useDispatch();
    const handleAddTask=()=>{
        dispatch(add(taskName.current.value));
        console.log('check:',taskName.current.value)
    }
    
    return(
        
        <div>
            <label>Task name: </label>
            <input type="text" placeholder="Enter task name." ref={taskName} />
            <button onClick={handleAddTask}>Add</button>
        </div>
    )
}
export default InputTask;