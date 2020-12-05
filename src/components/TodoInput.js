import React, { Component } from 'react'

class TodoInput extends Component {
    render() {
        const {title, getInput, submitTodo, editTodo} = this.props
        return (
            <div>
                <div className="card card-body">
                    <form onSubmit={submitTodo} autoComplete="off" >
                        <input className="form-control" type="text" value={title} onChange={getInput} placeholder="Add Item..." required/>
                        <input 
                        className={ editTodo ? "btn btn-info btn-block my-3"
                         : "btn btn-success btn-block my-3" } type="submit" value={editTodo ? 'Edit Todo': 'Add Todo'} />
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoInput
