import React from 'react';
import TodoList from './components/TodoList';
import ToDoForm from './components/TodoForm';

const tasks = [
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
},
{
  task: 'Organize paperwork',
  id: 4,
  completed: false
},
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      tasks: tasks,
      inputText:'',

    }

  const toggle = (id) =>{
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === id){
          return {
            ...task, completed:!task.completed,
          }
        }
        else {
          return task;
        }
      })})};

  const changeHandler = e =>{
    this.setState({
      [e.target.name]:e.target.value,
    })
  };

  const addTask = taskName =>{
    // default values for newly added tasks
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })

  };

 const submitHandler = e =>{
    e.preventDefault();
    this.addItem(this.state.inputText);
    this.setState({
      inputText:''
    })
  };

  const deleteHandler = e =>{
    e.preventDefault();
    this.setState({tasks: this.state.tasks.filter(task =>
      task.completed === false)})
  }


}

  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} toggle={this.state.toggle}/>
        <ToDoForm inputText={this.state.inputText} changeHandler={this.changeHandler}
        submitHandler={this.submitHandler} deleteHandler={this.deleteHandler}/>
      </div>
    );

  }
}

export default App;
