import React, { useState } from "react";

function App() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        const trimmedTask = task.trim();

        if (!trimmedTask) return; // prevent empty tasks
        if (todos.includes(trimmedTask)) return; // prevent duplicates

        const updatedTodos = [...todos, trimmedTask].sort((a, b) =>
            a.localeCompare(b)
        );

        setTodos(updatedTodos);
        setTask(""); // clear input field
    };

    const deleteTask = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTask();
        }
    };

    return ( <
        div >
        <
        h2 > Todo List < /h2>

        <
        input type = "text"
        value = { task }
        placeholder = "Enter a task"
        onChange = {
            (e) => setTask(e.target.value)
        }
        onKeyDown = { handleKeyDown }
        />

        <
        button onClick = { addTask } > Add < /button>

        <
        ul > {
            todos.map((todo, index) => ( <
                li key = { index } > { todo } <
                button onClick = {
                    () => deleteTask(index)
                } > Delete < /button> < /
                li >
            ))
        } <
        /ul> < /
        div >
    );
}

export default App;