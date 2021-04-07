import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.todoText);
        ///clears out the form
        this.setState({
            todoText: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="todo-iput"> Add Todo: </label>
                    <input id='todo-input' name="todoText" value={this.state.todoText} onChange={this.handleChanges}/>
                    <button>Add Task</button>
                </form>
            </div>
        )
    }
}
