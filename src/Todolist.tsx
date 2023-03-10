import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import tl from "./Todolist.module.css"
import {FilterValuesType, TaskType} from "./App";

type TodolistPropsType = {
    tasks: TaskType[]
    ChangeTasksFilter: (value: FilterValuesType) => void
    RemoveTask: (TaskId: string) => void
    AddNewTask: (title: string) => void
    ChangeTaskStatus: (TaskId: string, StatusValue: boolean) => void
    filter: FilterValuesType
}

export const Todolist = (props: TodolistPropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<null | string>(null)

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
        if (title.trim() !== "") {
            props.AddNewTask(title)
            setTitle("")
        } else {
            setError("String is empty")
        }

    }

    function onEnterDownHandler(e: KeyboardEvent<HTMLInputElement>) {
        setError(null)
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
                       className={error ? tl.error : ""}
                />
                <button onClick={onAddNewTaskHandler}>+</button>
                {error && <div className={tl.errorMessage}>{error}</div>}
            </div>
            <ul>
                {
                    props.tasks.map(t => {
                        function OnRemoveTaskHandler() {
                            props.RemoveTask(t.id)
                        }

                        function OnChangeTaskStatusHandler(e: ChangeEvent<HTMLInputElement>) {
                            let actualStatus = e.currentTarget.checked
                            props.ChangeTaskStatus(t.id, actualStatus)
                        }

                        return (
                            <li>
                                <button onClick={OnRemoveTaskHandler}>X</button>
                                <input type={"checkbox"}
                                       checked={t.isChecked}
                                       onChange={OnChangeTaskStatusHandler}
                                />
                                <span className={t.isChecked ? tl.checked : ""}>{t.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div>
                <button className={props.filter === "all" ? tl.active : ""} onClick={onAllClickHandler}>all</button>
                <button className={props.filter === "active" ? tl.active : ""} onClick={onActiveClickHandler}>active
                </button>
                <button className={props.filter === "completed" ? tl.active : ""}
                        onClick={onCompletedClickHandler}>completed
                </button>
            </div>
        </div>
    )
}