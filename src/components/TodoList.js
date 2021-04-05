// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo'

const ToDoList = props => {

    return(

        <div className='to-do-list'>
            {props.tasks.map(task => (
                <ToDo key={task.id} task={task} toggle={props.toggle}/>
            ))}
        </div>
    )
}

export default ToDoList