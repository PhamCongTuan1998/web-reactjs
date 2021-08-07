import React from 'react'
// import PropTypes from 'prop-types'

const TodoItem = (props) => {
    const todo = props.todoProps
    const markCompleted = props.markCompleted 
    const deletetodos = props.deletetodos
    const todoItemStyle = {
        background : "#f4f4f4",
        color : "aqua",
        padding : "10px",
        borderBotom : '1px #ccc dotted',
        textDecoration: todo.completed ? "line-through" : "none",
        marginLeft: "15px"
    }
    const deleteButton = {
        background : "#ff0000",
        color : "#ffff",
        boder : "none",
        padding :'5px 9px',
        borderRadius : "5px", 
        cursor: "pointer",
        float: "right"

    }
    return (
        <p style ={todoItemStyle}>
            <input 
            type="checkbox" 
            onChange ={markCompleted.bind(this, todo.id)} 
            checked= {todo.completed}
            />
            {todo.title}
            <button 
            style ={deleteButton} 
            onClick = {deletetodos.bind(this, todo.id)}
            >
            Delete
            </button>
        </p>
    )
}

// TodoItem.PropTypes ={
//     todoProps: PropTypes.object.isRequired
// }

export default TodoItem
