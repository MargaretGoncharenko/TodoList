import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isChecked: boolean
}

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "tomato", isChecked: true},
        {id: 2, title: "cucumber", isChecked: true},
        {id: 3, title: "orange", isChecked: false},
        {id: 4, title: "potato", isChecked: false},
    ])
    return (
        <div className="App">
            <Todolist tasks={tasks}/>
        </div>
    );
}

export default App;
