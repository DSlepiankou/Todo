import React from "react";
import TodoListItem from '../todo-list-item/todo-list-items';
import './todo-list.css'

function TodoList ( props ) {
    
    const elements = props.todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => props.onDeleted(item.id)}
                    onToggleImportant={() => props.onToggleImportant(id)}
                    onToggleDone={() => props.onToggleDone(id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;