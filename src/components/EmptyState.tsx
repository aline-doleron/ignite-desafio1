import { ClipboardText } from "@phosphor-icons/react";
import style from './EmptyState.module.css';

export function EmptyState() {
    return (
        <div className={style.emptyState}>
            <ClipboardText className={style.clipboard} size={70} />
            <span className={style.emptyStateMessage}>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}