import Task from './Task'

// The Tasks component catches the props that are given to
// it: array of tasks, function to delete task and a 
// function to toggle reminder for a task.
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
        {/* We are looping through each task in the
        tasks array, and outputing a Task component
        for each while also passing the onDelete function, 
        task id, and the task itself as a prop to the 
        Task component. */}
        {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks