import React from "react";
import "./Todolist.module.css"
import {TaskType} from "./App";

type TodolistPropsType = {
    tasks: TaskType[]
}

export const Todolist = (props: TodolistPropsType) => {
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
                        return (
                            <li>
                                <button>X</button>
                                <input type={"checkbox"} checked={t.isChecked}/>
                                <span>{t.title}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}