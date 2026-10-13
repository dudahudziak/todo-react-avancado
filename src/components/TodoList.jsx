import { useMemo } from 'react'
import { useTodos } from '../hooks/useTodos'
import TodoItem from './TodoItem'

function TodoList() {
  const { tarefas, filtro, alternar, remover } = useTodos()

  const visiveis = useMemo(() => {
    if (filtro === 'pendentes') return tarefas.filter((t) => !t.concluida)
    if (filtro === 'concluidas') return tarefas.filter((t) => t.concluida)
    return tarefas
  }, [tarefas, filtro])

  if (visiveis.length === 0) {
    return <p className="vazio">Nenhuma tarefa por aqui.</p>
  }

  return (
    <ul className="lista">
      {visiveis.map((tarefa) => (
        <TodoItem
          key={tarefa.id}
          tarefa={tarefa}
          onAlternar={alternar}
          onRemover={remover}
        />
      ))}
    </ul>
  )
}

export default TodoList
