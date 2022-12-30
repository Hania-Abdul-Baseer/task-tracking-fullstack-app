// Using these react icons allows us to use 
// icons as components.
import { FaTimes } from 'react-icons/fa'

// The Task component catches the props that are passed to
// it: the array of tasks, function for deleting a task and
// a function to toggle reminder for a task.
const Task = ({ task, onDelete, onToggle }) => {
    
    return (
      // The className is inside a curly bracket as we want to use an
      // expression. The className will always be 'task' but it will 
      // also be 'reminder' if the task's reminder is set to true 
      // otherwise the className will only be 'task'.
      // We want this, so that for task's with reminder the css style 
      // class that creates a green border is applied.
      <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={ () => 
      onToggle(task.id)}>
          <h3>
              {task.text} <FaTimes style={{ color: 
              'red', cursor: 'pointer' }} 
              onClick={() => onDelete(task.id)}/>
              {/* When the button is clicked, an empty
              function is called, which calls the onDelete
              function and passes the task's id as a 
              parameter. */}

              {/* The above onDelete function will move to
               Tasks then to App, where its defined. 
               This is because the function was
               defined in App and passed to Tasks as a prop
               then from Tasks it was passed to Task as 
               a prop. Because in Task component is where
               the function is actually called (onClick of
               the delete button). 

               This shows that states get passed down and 
               actions get passed up. */}
          </h3>
          <p>{task.day}</p>
      </div>
    )
  }
  
  export default Task