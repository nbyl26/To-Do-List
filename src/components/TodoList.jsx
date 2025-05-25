import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    if (todos.length === 0) {
        return <p className="text-center text-gray-500 dark:text-gray-400">No tasks yet. Add one!</p>;
    }

    return (
        <ul className="space-y-3">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
