const TodoListItem = (props) => {
    console.log(props);
    return <li style={{ color: props.color }}>{props.children} - { props.person?.name }</li>
}

export default TodoListItem;
