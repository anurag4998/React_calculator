import React from 'react'

const Button = (props) => {
    return (
        <input
            className="btn"
            type="button"
            value={props.val}
            onClick={props.handleClick}
        />
    )
}

export default Button
