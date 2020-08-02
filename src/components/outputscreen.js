import React from 'react';
import Row from './row.js';

const OutputScreen = (props) => {
    return (
        <div className="screen">
            <Row display={props.equation} />
            <Row display={props.value} />
        </div>
    )
}

export default OutputScreen; 