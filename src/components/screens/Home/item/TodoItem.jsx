import Checkbox from "./Checkbox";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className="lg:max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6 rounded-2xl bg-zinc-800 p-5 w-full text-base">
                <button
                    className="flex items-center"
                    onClick={() => changeTodo(todo.id)}
                >
                    <Checkbox isCompleted={todo.isCompleted} />
                    <span
                        className={cn({
                            "line-through": todo.isCompleted,
                        })}
                    >
                        {todo.title}
                    </span>
                </button>
                <button onClick={() => removeTodo(todo.id)}>
                    <BsTrash
                        size={22}
                        className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
                    />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
