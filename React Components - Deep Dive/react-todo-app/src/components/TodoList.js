import { useState, useEffect } from 'react';
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Clean my room" },
        { id: 2, text: "Wash the dishes" },
        { id: 3, text: "Go to the gym" },
    ]);

    console.log('render');

    useEffect(() => {
        console.log('Mounted');
    }, []);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: todos.length + 1,
            text: e.target.value
        };

        setTodos(state => [
            ...state,
            todo
        ]);

        e.target.value = '';
    };

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id='todo-name' onBlur={onTodoInputBlur} name='todo' />
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} text={todo.text} />)}
            </ul>
        </>
    );
}

export default TodoList;
