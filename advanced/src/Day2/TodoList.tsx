import { useState } from "react";

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState({});

    const inputTask = (event) => {
        let task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            name: event.target.value
        }
        setNewTask(task)
    };

    const addTodoList = () => {
        const newTodoList = [...todoList, newTask];
        setTodoList(newTodoList);
    };
    const deleteTask = (id) => {
        const newTodoList = todoList.filter((task) => task.id !== id);
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h1>Todo List</h1>
            <input onChange={inputTask} />
            <button onClick={addTodoList}>Add</button>
            <div>
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