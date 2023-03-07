import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import "./Todolist.module.css"
import {FilterValuesType, TaskType} from "./App";

type TodolistPropsType = {
    tasks: TaskType[]
    ChangeTasksFilter: (value: FilterValuesType) => void
    RemoveTask: (TaskId: string) => void
    AddNewTask: (title: string) => void
}

export const Todolist = (props: TodolistPropsType) => {
    let [title, setTitle] = useState("")

    function onAllClickHandler() {
        props.ChangeTasksFilter("all")
    }

    function onActiveClickHandler() {
        props.ChangeTasksFilter("active")
    }

    function onCompletedClickHandler() {
        props.ChangeTasksFilter("completed")
    }

    function onChangeInputHandler(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.currentTarget.value)
    }

    function onAddNewTaskHandler() {
        props.AddNewTask(title)
        setTitle("")
    }

    function onEnterDownHandler(e: KeyboardEvent<HTMLInputElement>) {
        if (e.code === "Enter") {
            onAddNewTaskHandler()
        }
    }

    return (
        <div>
            <div>
                <header>Header</header>
                <input value={title}
                       onChange={onChangeInputHandler}
                       onKeyDown={onEnterDownHandler}
                />
                <button onClick={onAddNewTaskHandler}>+</button>
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