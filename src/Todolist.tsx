import React from "react";
import "./Todolist.module.css"
import {FilterValuesType, TaskType} from "./App";

type TodolistPropsType = {
    tasks: TaskType[]
    ChangeTasksFilter: (value: FilterValuesType) => void
    RemoveTask: (TaskId: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    function onAllClickHandler() {
        props.ChangeTasksFilter("all")
    }

    function onActiveClickHandler() {
        props.ChangeTasksFilter("active")
    }

    function onCompletedClickHandler() {
        props.ChangeTasksFilter("completed")
    }

    return (
        <div>
            <div>
                <header>Header</header>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        function OnRemoveTaskHandler() {
                            props.RemoveTask(t.id)
                        }

                        return (
                            <li>
                                <button onClick={OnRemoveTaskHandler}>X</button>
                                <input type={"checkbox"} checked={t.isChecked}/>
                                <span>{t.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button onClick={onAllClickHandler}>all</button>
                <button onClick={onActiveClickHandler}>active</button>
                <button onClick={onCompletedClickHandler}>completed</button>
            </div>
        </div>
    )
}