import { useState } from 'react'

// The AddTask component catched the prop that is passed to it
// which is the onAdd function to add a task.
const AddTask = ({ onAdd }) => {
    // Each input in AddTask component will have a state
    // that is in component level and not App level,
    // which is why its here and not in App.js.
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    // The default value for the reminder state variable
    // will be set to false.
    const [reminder, setReminder] = useState(false);

    // Function to call onAdd function after validating the 
    // input and making sure the default submit for the form
    // is disabled when the user presses the submit button.
    // The function takes in the event (e) object so that 
    // .preventDefault can be used so that it does not actually 
    // submit to a page.
    const onSubmit = (e) => {
        e.preventDefault();

        // Validation to check the text input is not empty
        if(!text) {
            alert('Please add a task');
            return;
        }

        // Calling the onAdd function to add the task by passing
        // am object to it that has the state variables: text, 
        // day, and reminder.
        onAdd({ text, day, reminder });

        // We call the three functions for the states to clear the
        // form. And set the state variables back to their default
        // values.
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                {/* The value of this input will be the text from 
                the state and when it changes a function will be
                called that takes in the event (e) object and 
                it calls another function: setText from the state
                to change the state varibale: text to whatever is
                typed in the input. 
                The above is the same is also used for reminder 
                and day. */}
                <input type='text' placeholder='Add Task' 
                value={text} onChange={(e) => setText(
                e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' placeholder='Add Day and Time'
                value={day} onChange={(e) => setDay(
                e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                {/* Checkboxes have a 'checked' value that can be
                set to true or false depending on whether you want
                it checked or not, we set the state, bool variable: 
                reminder to 'checked' */}
                <input type='checkbox' checked={reminder} 
                onChange={(e) => setReminder(
                e.currentTarget.checked)}
                />
            </div>

            <input className='btn btn-block' 
            type='submit' value='Save Task' />
        </form>
  )
}

export default AddTask