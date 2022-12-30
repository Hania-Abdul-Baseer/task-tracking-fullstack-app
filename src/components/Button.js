import PropTypes from 'prop-types'

// The Button component takes in to props: color and text
// and uses them to render the right JSX
const Button = ({color, text}) => {
    return (
        <button style={{ backgroundColor: color }}
        className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default Button
