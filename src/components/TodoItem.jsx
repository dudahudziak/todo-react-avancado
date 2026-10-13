import { memo } from 'react'

function TodoItem({ tarefa, onAlternar, onRemover }) {

  return (
    <li className={`item ${tarefa.concluida ? 'concluida' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => onAlternar(tarefa.id)}
        />
        <span>{tarefa.texto}</span>
      </label>
      <button
        type="button"
        className="remover"
        aria-label={`Remover tarefa ${tarefa.texto}`}
        onClick={() => onRemover(tarefa.id)}
      >
        ✕
      </button>
    </li>
  )
}

export default memo(TodoItem)
