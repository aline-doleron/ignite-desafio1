import style from './App.module.css';
import { Rocket, PlusCircle } from "@phosphor-icons/react";
import { Task, Tasks } from './components/Tasks';
import { ChangeEvent, FormEvent, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState("");

  function handleUpdateTask(taskDescription: string) {
    tasks.forEach(taskItem => {
      if (taskItem.description === taskDescription) {
        taskItem.checked = !taskItem.checked;
      }
    });

    setTasks([...tasks]);
  }

  function handleDeleteTask(taskDescription: string) {
    setTasks(tasks.filter(taskItem => taskItem.description !== taskDescription));
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, {
      description: task,
      checked: false
    }]);
    setTask("");
  }

  function handleCommentChange(event: ChangeEvent<HTMLInputElement>): void {
    const newTask = event.target.value;
    setTask(newTask);
  }

  return (
    <div>
      <header className={style.header}>
        <div className={style.appName}>
          <Rocket className={style.rocket} size={32} /><span className={style.do}>to</span><span className={style.to}>do</span></div>
      </header>

      <div className={style.wrapper}>
        <form onSubmit={handleCreateTask}>
          <div className={style.inputWrapper}>
            <input type="text" onChange={handleCommentChange} className={style.input} placeholder='Adicione uma nova tarefa' value={task} />
            <button type='submit' className={style.createButton}><span>Criar</span><PlusCircle size={24} ></PlusCircle></button>
          </div>
        </form>
        <Tasks tasks={tasks} handleTaskChange={handleUpdateTask} handleTaskDeleted={handleDeleteTask} />
      </div>
    </div>
  )
}

export default App
