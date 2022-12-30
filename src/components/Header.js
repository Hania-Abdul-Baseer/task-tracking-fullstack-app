import PropTypes from 'prop-types'
import Button from './Button'

// Defining the Header component using an arrow function
// The component takes in props called: title, onAdd, and showAdd.
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        {/* The Header component uses the Button component
        and supplies it with the specific prop values.
        This will now render a green button that says: Add */}
        <Button 
          color={showAdd ? 'red' : 'green'} 
          text={showAdd ? 'Close' : 'Add' } 
          onClick={onAdd} />
    </header>
  )
}

// Object that contains the default values for the 
// Header props
Header.defaultProps = {
    title: 'Task Tracker',
}

// Object that contains the types for 
// Header props
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS IN JS
/*
const headingStyle = {
    color: 'red',
    backgroundColor: 'black',
}
// Inside the component:
// ...<h1 style={headingStyle}>...</h1>
*/

export default Header