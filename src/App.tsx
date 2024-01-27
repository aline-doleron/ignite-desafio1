import style from './App.module.css';
import { Rocket, PlusCircle } from "@phosphor-icons/react";

function App() {
  return (
    <div>
      <header className={style.header}>
        <div className={style.appName}>
          <Rocket className={style.rocket} size={32} /><span className={style.do}>to</span><span className={style.to}>do</span></div>
      </header>
      <div className={style.wrapper}>
        <div className={style.inputWrapper}>
          <input type="text" className={style.input} placeholder='Adicione uma nova tarefa' />
          <button className={style.createButton}><span>Criar</span><PlusCircle size={24} ></PlusCircle></button>
        </div>
      </div>
    </div>
  )
}

export default App
