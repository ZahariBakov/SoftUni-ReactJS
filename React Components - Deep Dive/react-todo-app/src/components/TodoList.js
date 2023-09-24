import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import TodoItem from "./TodoItem";
import { createTodo } from '../services/todoService';

const API_URL = 'http://localhost:3030/jsonstore';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/todos`)
            .then(res => res.json())
            .then(todosResult => {
                setTodos(Object.values(todosResult));
            });
    }, []);

    const onTodoInputBlur = (e) => {
        let todo = {
            id: uniqid(),
            text: e.target.value,
            isCompleted: false,
        };

        createTodo(todo)
            .then(createdTodo => {
                console.log(createdTodo);
                setTodos(state => [
                    ...state,
                    todo
                ]);

                e.target.value = '';
            })
            .catch(err => {
                console.log(err);
            })
    };

    const deleteTodoItemClickHandler = (e, id) => {
        e.stopPropagation();

        setTodos(state => state.filter(todo => todo.id != id))
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos(state => {
            // let selectedTodo = state.find(x => x.id === id);
            // let selectedIndex = state.findIndex(x => x.id === id);
            // let toggledTodo = {...selectedTodo, isCompleted: !selectedTodo.isCompleted};

            // return [
            //     ...state.slice(0, selectedIndex),
            //     toggledTodo,
            //     ...state.slice(selectedIndex + 1)
            // ];

            return state.map(todo =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            );
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
