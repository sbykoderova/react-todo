import { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState("");

    const addTodo = (title) => {
        setTodos((prev) => [
            {
                id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ]);
        setTitle("");
    };

    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 px-5 py-3 mt-14 p-5 lg:max-w-2xl mx-auto">
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Добавить задачу"
            />
        </div>
    );
};

export default CreateTodoField;
