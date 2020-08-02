import React from 'react'

const Row = (props) => {
    return (
        <div className="screen-row">
            <input
                className="screen-row-display"
                type="text"
                readOnly
                defaultValue={props.display}
            />
        </div>
    )
}

export default Row
