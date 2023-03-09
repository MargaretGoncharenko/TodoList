import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";

export type TaskType = {
    id: string
    title: string
    isChecked: boolean
}
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "tomato", isChecked: true},
        {id: v1(), title: "cucumber", isChecked: true},
        {id: v1(), title: "orange", isChecked: false},
        {id: v1(), title: "potato", isChecked: false},
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

    function RemoveTask(TaskId: string) {
        let restTasks = tasks.filter(t => t.id !== TaskId)
        setTasks([...restTasks])
    }

    function AddNewTask(title: string) {
        let newTask: TaskType = {id: v1(), title, isChecked: false}
        if (newTask) {
            setTasks([newTask, ...tasks])
        }
    }

    function ChangeTaskStatus(TaskId: string, StatusValue: boolean) {
        let TaskForChangeStatus = tasks.find(t => t.id === TaskId)
        if (TaskForChangeStatus) {
            TaskForChangeStatus.isChecked = StatusValue
            setTasks([...tasks])
        }
    }

    return (
        <div className="App">
            <Todolist tasks={tasksForTodolist}
                      ChangeTasksFilter={ChangeTasksFilter}
                      RemoveTask={RemoveTask}
                      AddNewTask={AddNewTask}
                      ChangeTaskStatus={ChangeTaskStatus}
            />
        </div>
    );
}

export default App;
