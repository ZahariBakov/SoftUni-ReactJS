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

    let [count, setCount] = useState(0);
    let [name, setName] = useState('');

    const addButtonClickHandler = () => {
        setCount(count + 1);
    };

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    };

    const peshoHeader = (
        <header>
            <h3>He is the best!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, animi!</p>
        </header>
    );

    return (
        <>
            { name &&  <h2>Counter - { name }</h2> }

            { name || <h2> No name </h2> }
            
            { name == 'Pesho' 
                ? peshoHeader
                : <h3>Nah</h3> 
            }

            <ul>
                <TodoListItem>{ count }</TodoListItem>

                {/* {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)} */}

                {/* <TodoListItem color={ 'light' + firstColor }>{ firstTask }</TodoListItem>
                <TodoListItem color="red">Go shopping</TodoListItem>
                <TodoListItem color="green" person={ person }>Learn react</TodoListItem>
                <TodoListItem color="blue">Learn function components</TodoListItem> */}
            </ul>

            <input type="text" onBlur={inputChangeHandler} />

            <button onClick={addButtonClickHandler}>+</button>
        </>
    );
}

export default TodoList;