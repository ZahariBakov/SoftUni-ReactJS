// Class components:
// import React from 'react';

// class TodoList extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>Clean your room</li>
//                 <li>Go shopping</li>
//                 <li>Learn react</li>
//                 <li>Learn class components</li>
//             </ul>
//         );
//     }
// }

// export default TodoList;

import {useState} from 'react';
import TodoListItem from "./TodoListItem";

function TodoList() {
    // let todoState = useState(['Clean your room', 'Go shopping', 'Learn React', 'Learn function components']);

    // let [todos, setTodos] = todoState;

    // let firstTask = 'Clean your room modified';
    // let firstColor = 'blue';
    // let person = {
    //     name: 'Pesho',
    //     age: 32,
    // };

    let [todo, setTodo] = useState('initial Todo');

    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <TodoListItem>{ todo }</TodoListItem>

                {/* {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)} */}

                {/* <TodoListItem color={ 'light' + firstColor }>{ firstTask }</TodoListItem>
                <TodoListItem color="red">Go shopping</TodoListItem>
                <TodoListItem color="green" person={ person }>Learn react</TodoListItem>
                <TodoListItem color="blue">Learn function components</TodoListItem> */}
            </ul>

            <button onClick={() => console.log('clicked')}>Modify</button>
        </>
    );
}

export default TodoList;