import React,{Fragment, useState} from 'react'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todoState, setTodoState] = useState([
        {
            id: "1",
            title: "Việc 1",
            completed: false
        },
        {
            id: "2",
            title: "Việc 2",
            completed: false
        },
        {
            id: "3",
            title: "Việc 3",
            completed: false
        }

    ])
    const markCompleted = id =>{
        const newTodos = todoState.map(todo =>{
            if (todo.id === id) todo.completed = !todo.completed
            return todo
        })
        setTodoState(newTodos)

    }
    const deletetodos = id =>{
        const newTodos =todoState.filter(todo=> todo.id !==id)
        setTodoState(newTodos)
    }
    return (
        <Fragment>
            {todoState.map(todo => {
                return <TodoItem 
                key={todo.id} 
                todoProps={todo} 
                markCompleted={markCompleted}
                deletetodos={deletetodos}/>
            })}
        </Fragment>
        
    )
}

export default Todo
