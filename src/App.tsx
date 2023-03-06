import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isChecked: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "tomato", isChecked: true},
        {id: 2, title: "cucumber", isChecked: true},
        {id: 3, title: "orange", isChecked: false},
        {id: 4, title: "potato", isChecked: false},
    ])
    let tasksForTodolist = tasks
    let [filter, setFilter] = useState<FilterValuesType>("all")
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => !t.isChecked)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isChecked)
    }

    function ChangeTasksFilter(value: FilterValuesType) {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist tasks={tasksForTodolist}
                      ChangeTasksFilter={ChangeTasksFilter}
            />
        </div>
    );
}

export default App;
