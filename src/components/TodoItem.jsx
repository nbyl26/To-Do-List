import { Trash2 } from 'lucide-react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <li className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm hover:shadow transition">
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="accent-blue-500 w-5 h-5"
                />
                <span className={`text-lg ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
                aria-label="Delete task"
            >
                <Trash2 size={20} />
            </button>
        </li>
    );
};

export default TodoItem;
