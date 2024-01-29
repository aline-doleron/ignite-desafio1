import { Trash } from "@phosphor-icons/react";
import style from './Task.module.css';

import { Task } from "./Tasks";

export function Task({ handleTaskChange, handleTaskDeleted, task }: { handleTaskChange: (key: string) => void, handleTaskDeleted: (key: string) => void, task: Task }) {
    function handleTaskChecked() {
        handleTaskChange(task.description);
    }

    function handleTaskDelete() {
        handleTaskDeleted(task.description);
    }

    return (
        <div className={style.task}>
            <input onChange={handleTaskChecked} type='checkbox' checked={task.checked}></input>
            <label>{task.description}</label>
            <div className={style.trashContainer}><Trash onClick={handleTaskDelete} size={20}></Trash></div>
        </div>
    )
}