import style from './Tasks.module.css'

export function Tasks() {
    return (
        <div className={style.tasks}>
            <div className={style.created}>
                <span className={style.createdTasks}>Tarefas criadas</span>
                <div className={style.createdTasksCounter}><span>5</span></div>
            </div>
            <div className={style.concluded}>
                <span className={style.concludedTasks}>Concluídas</span>
                <span className={style.concludedTasksCounter}>2 de 5</span>
            </div>
        </div>
    );
}