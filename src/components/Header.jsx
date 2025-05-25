import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Plus } from 'lucide-react';

const Header = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <header className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <form onSubmit={handleSubmit} className="flex items-center w-full gap-2">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Add a new task..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
                >
                    <Plus size={20} />
                </button>
            </form>
            <ThemeToggle />
        </header>
    );
};

export default Header;
