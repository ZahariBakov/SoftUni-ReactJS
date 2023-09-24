import { useState } from 'react';
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 'lmta9q76', text: "Clean my room", isDone: false },
        { id: 'lmta9nv0 ', text: "Wash the dishes", isDone: false },
        { id: 'lmta9llh', text: "Go to the gym", isDone: false },
    ]);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false,
        };

        setTodos(state => [
            ...state,
            todo
        ]);

        e.target.value = '';
    };

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation();
        
        setTodos(state => state.filter(todo => todo.id != id))
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos(state => {
            let selectedTodo = state.find(x => x.id === id);
            let selectedIndex = state.findIndex(x => x.id === id);
            let toggledTodo = {...selectedTodo, isDone: !selectedTodo.isDone};

            return [
                ...state.slice(0, selectedIndex),
                toggledTodo,
                ...state.slice(selectedIndex + 1)
            ];
        });
    };

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id='todo-name' onBlur={onTodoInputBlur} name='todo' />
            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                    />
                )}
            </ul>
        </>
    );
};

export default TodoList;
