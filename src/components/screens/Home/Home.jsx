import TodoItem from "./item/TodoItem";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import { useState } from "react";

const data = [
    {
        id: "wefw23",
        title: "Прочитать следующую главу книги",
        isCompleted: false,
    },
    {
        id: "wefw23232",
        title: "Посмотреть урок по программированию",
        isCompleted: false,
    },
    {
        id: "wefw2qwefcev3",
        title: "Сходить на тренировку",
        isCompleted: false,
    },
];

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find((t) => t.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    };

    const removeTodo = (id) => setTodos([...todos].filter((t) => t.id !== id));

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-14 uppercase">
                To Do: планы и задачи
            </h1>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    );
};

export default Home;
