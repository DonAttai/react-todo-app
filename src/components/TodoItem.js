import React, { Component } from "react";
// import propTypes from 'prop-types';

class TodoItem extends Component {
  render() {
    const { title, deleteTodo, editTodo } = this.props;
    return (
      <div className="my-1">
        <li className="list-group-item d-flex justify-content-between">
          <h6>{title}</h6>
          <span>
            <input
              className="btn btn-success btn-sm mx-2"
              type="button"
              value="Edit"
              onClick={editTodo}
            />
            <input
              className="btn btn-danger btn-sm "
              type="button"
              value="Delete"
              onClick={deleteTodo}
            />
          </span>
        </li>
      </div>
    );
  }
}

export default TodoItem;
