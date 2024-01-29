import { Task } from './Task';
import style from './Tasks.module.css';

export interface Task {
    index: string;
    checked: boolean;
    description: string;
}

export function Tasks({ tasks, handleTaskDeleted, handleTaskChange }: { handleTaskChange: (key: string) => void, handleTaskDeleted: (key: string) => void, tasks: Task[] }) {
    const completedTasks = tasks.filter(task => task.checked === true);

    return (
        <>
            <div className={style.tasksStatus}>
                <div className={style.created}>
                    <span className={style.createdTasks}>Tarefas criadas</span>
                    <div className={style.createdTasksCounter}><span>{tasks.length}</span></div>
                </div>
                <div className={style.concluded}>
                    <span className={style.concludedTasks}>Concluídas</span>
                    <span className={style.concludedTasksCounter}>{completedTasks.length} de {tasks.length}</span>
                </div>
            </div>

            <div className={style.taskList}>
                {tasks.map((task) => {
                    return <Task handleTaskChange={handleTaskChange} handleTaskDeleted={handleTaskDeleted} key={task.index} task={task}></Task>
                })}

            </div>
        </>
    );
}