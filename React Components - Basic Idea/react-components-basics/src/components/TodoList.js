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

import TodoListItem from "./TodoListItem";

function TodoList() {
    let firstTask = 'Clean your room modified';
    let firstColor = 'blue';
    let person = {
        name: 'Pesho',
        age: 32,
    };

    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <TodoListItem color={ 'light' + firstColor }>{ firstTask }</TodoListItem>
                <TodoListItem color="red">Go shopping</TodoListItem>
                <TodoListItem color="green" person={ person }>Learn react</TodoListItem>
                <TodoListItem color="blue">Learn function components</TodoListItem>
            </ul>
        </>
    );
}

export default TodoList;