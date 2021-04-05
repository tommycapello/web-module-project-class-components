import React from 'react';

const ToDo = (props) => {

    return (
        <div onClick={() => props.toggle(props.task.id)} className={`todo${props.task.completed ? ' completed' : ''}`}>
        <p>{props.task}</p>
        </div>

    )
}

export default ToDo