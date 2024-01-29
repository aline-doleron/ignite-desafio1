import { Trash } from "@phosphor-icons/react";
import style from './Task.module.css';

import { Task } from "./Tasks";

export function Task({ handleTaskChange, handleTaskDeleted, task }: { handleTaskChange: (key: string) => void, handleTaskDeleted: (key: string) => void, task: Task }) {
    function handleTaskChecked() {
        handleTaskChange(task.index);
    }

    function handleTaskDelete() {
        handleTaskDeleted(task.index);
    }

    return (
        <div className={style.task}>
            <input id={task.index} onChange={handleTaskChecked} type='checkbox' checked={task.checked}></input>
            <label htmlFor={task.index} className={task.checked ? style.concluded : ''}>{task.description}</label>
            <div className={style.trashContainer}><Trash onClick={handleTaskDelete} size={20}></Trash></div>
        </div>
    )
}