import React from 'react';

function TodoItem({ task, deleteTask, toggleCompletion }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleCompletion(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

export default TodoItem;
 