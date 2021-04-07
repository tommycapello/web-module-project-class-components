import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

 constructor(){
   super();
   this.state = {
      todos: [
      {
        task: 'Groceries',
        id: 1,
        completed: false
      },
      {
        task: 'Walk the Dog',
        id: 2,
        completed: false
      },
      {
        task: 'Clean the Bathroom',
        id: 3,
        completed: false
      }],
    }
  }

   addItem = (taskName) => {
  /// usually a post request to your database, database usually handles creating a new id
     const newTodo = {
       task: taskName,
       id: new Date(),
       completed: false
     };
     this.setState({
       todos: [...this.state.todos, newTodo],
     });
    };

    toggleCompleted = (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id){
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else{
            return todo;
          }
        })
      })
    }

    clearCompleted = (e) => {
      e.preventDefault();
      this.setState({
        todos: this.state.todos.filter( todo => !todo.completed)
      })
    }

  render() {
    return (
      <div>
        <h2>Get stuff done!</h2>
        <TodoForm addItem={this.addItem}/>
        <br/>
        <button onClick={this.clearCompleted}>Clear Completed Tasks</button>
        <br/>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}/>
      </div>
    )

  }
}

export default App;
