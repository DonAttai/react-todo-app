import React, { Component } from 'react';
import TodoItem from './TodoItem';
// import propTypes from 'prop-types';

class TodoList extends Component {
    render() {
        const {todos, deleteTodo, editTodo} = this.props
        return (
            <div>
                <h3 className="text-center mt-5 mb-3">Todo Items</h3>
                <ul className="list-group">
                    {todos.map(todo => {
                        return <TodoItem key={todo.id} title={todo.title} 
                        deleteTodo={() => deleteTodo(todo.id)}
                        editTodo={() => editTodo(todo.id)}
                         />
                    })}
                </ul>
            </div>
               
        )
    }
}



export default TodoList