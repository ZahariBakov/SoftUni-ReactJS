import { useState } from 'react';
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 'lmta9q76', text: "Clean my room" },
        { id: 'lmta9nv0 ', text: "Wash the dishes" },
        { id: 'lmta9llh', text: "Go to the gym" },
    ]);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value
        };

        setTodos(state => [
            ...state,
            todo
        ]);

        e.target.value = '';
    };

    const deleteTodoItemClickHandler = (id) => {
        setTodos(state => state.filter(todo => todo.id != id))
    };

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id='todo-name' onBlur={onTodoInputBlur} name='todo' />
            <ul>
                {todos.map(todo => <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodoItemClickHandler} />)}
            </ul>
        </>
    );
};

export default TodoList;
