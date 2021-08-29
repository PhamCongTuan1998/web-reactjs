import React from 'react';
// import PropTypes from 'prop-types';
import TodoList from './TodoList';

// TodoItem.propTypes = {

// };

function TodoItem(props) {
    const todoList = [
        {
            id: 1,
            title: 'Tuyet'
        },
        {
            id: 2,
            title: 'Trinh'
        },
        {
            id: 3,
            title: 'Nguyen'
        },
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoItem;