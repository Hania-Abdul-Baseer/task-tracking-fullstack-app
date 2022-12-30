import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  // We have the state below at the top level i.e in App.js
  // because we want all other sub components to be able 
  // to use it, if needed.

  // This state is a boolean used to toggle between showing the 
  // form for adding a task and not showing the form.
  const [showAddTask, setShowAddTask] = useState(false)

  // This state stores the array of tasks.
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Lunch with friends',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    }
  ])

  // Function to add a Task, and it takes in a task.
  const addTask = (task) => {
    // Generates a random number to be used for the id of the 
    // new task.
    const id = Math.floor(Math.random()+1000) + 1;

    // Creating a new task object with the 'task' state given to
    // the function and the generated id.
    const newTask = { id, ...task }

    // Using setTasks to add the new task object to the array of
    // the tasks state.
    setTasks([...tasks, newTask]);
  }

  // Function to delete a task based on the id that is
  // given to it.
  const deleteTask = (id) => {
    // setTasks is the function from useState that allows
    // you to update the state varibales inside functions.
    // .filter takes in a function and based on the output
    // of the function, returns the elements from the array
    // that pass that function. Here the function returns 
    // elements that dont have the same task.id as id thats 
    // passed to the deleteTask function originally.
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  // Function to toggle reminder based on the id that is 
  // given to it.
  const toggleReminder = (id) => {
    // .map takes in a function that is applied to each element of the
    // task array, this function takes in a task
    // and if the task has the same id as the id supplied to the 
    // toggleReminder function originally, then the task's reminder
    // state variable switches from what it was before. Otherwise, no
    // state varibale of the task is changed.
    setTasks(tasks.map( (task) => task.id === id ? 
    { ...task, reminder: !task.reminder} : task))
  }

  return (
    // The root component: App returns what looks like html
    // but its actually JSX/JS Syntax Extension.
    <div className='container'>
      {/* onAdd function is passed to the Header component as a prop.
      Which is a function that calls another function which sets the
      showAddTask boolean state variable to the opposite of what it
      was before. */}
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
      {/*
      {onAdd={() => setShowAddTask(!showAddTask)
      showAdd={showAddTask} 
      */}
      {/* If the showAddTask boolean is set to true then we show
      the AddTask component otherwise we show nothing. This logic
      is applied using the '&&' operator in the expression below. */}
      { showAddTask && <AddTask onAdd={addTask}/>}
      {/* If the length of the tasks array is less than 0
        then display: 'No tasks to show' otherwise display 
        the Tasks component. This is written inside the 
        curly brackets because its a js expression.

        Passing the tasks array, deleteTask, and the
        toggleReminder function as props to the Tasks 
        component*/} 
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'
      }
    </div>
  );
}

export default App;