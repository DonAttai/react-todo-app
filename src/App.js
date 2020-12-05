import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuidv4} from 'uuid'


export default class App extends Component {
  state = {
    todos: [],
    id: uuidv4(),
    title: '',
    editTodo: false
    
    
  }

  tickCompleted = (id) => {
    this.setState ({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  })
  }

  getInput = e => {
    this.setState({
      title: e.target.value
    })
  }

  submitTodo = e => {
    e.preventDefault()

    const newTodo = {
      id: this.state.id,
      title: this.state.title
      
    }

    const updatedTodos = [...this.state.todos, newTodo]

    this.setState({
      todos: updatedTodos,
      id: uuidv4(),
      title: '',
      editTodo: false
    
      
    })
  }



  deleteTodo = id => {
    this.setState({todos: [...this.state.todos.filter(todo => 
      todo.id !== id
      )] 
    })
  }

  editTodo = id => {
    // const filteredTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos: [...this.state.todos.filter(todo => 
      todo.id !== id,
      )] ,
      title: this.state.todos.find(title => title.id === id).title,
      editTodo: true,
      id: id
    })
  }

  render() { 
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 mx-auto">
            {/* <h3 className="text-center">Todo Input</h3> */}
            
            <TodoInput title={this.state.title} getInput={this.getInput} submitTodo={this.submitTodo} editTodo={this.state.editTodo} />
            <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
          </div>
          
        </div>
        
      </div>
    )
  }
}
