import { useState } from "react";

// Define the Task type
interface Task {
    id: number;
    name: string;
}

export default function TodoList() {
    const [todoList, setTodoList] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<Task | null>(null);

    const inputTask = (event:any) => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            name: event.target.value
        }
        setNewTask(task)
    };

    const addTodoList = () => {
        if (!newTask) return;

        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
    };
    const deleteTask = (id:any) => {
        const newTodoList = todoList.filter((task) => task.id !== id);
        setTodoList(newTodoList);
    }

    return (
        <div className="todoList">
            <div className="addTask">
                <h1>Todo List</h1>
                <input onChange={inputTask} />
                <button onClick={addTodoList}>Add</button>
            </div>
            <div className="list">
                {todoList.map((task) => {
                    return (
                        <div>
                            <h3>{task.name}</h3>
                            <button onClick={() => deleteTask(task.id)}>x</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}