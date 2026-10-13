import { useMemo } from 'react'
import { useTodos } from '../hooks/useTodos'

const OPCOES = [
  { valor: 'todas', rotulo: 'Todas' },
  { valor: 'pendentes', rotulo: 'Pendentes' },
  { valor: 'concluidas', rotulo: 'Concluídas' },
]

function TodoFilters() {
  const { tarefas, filtro, setFiltro } = useTodos()

  // useMemo: só recalcula as contagens quando a lista de tarefas muda
  const contagem = useMemo(() => {
    const concluidas = tarefas.filter((t) => t.concluida).length
    return {
      todas: tarefas.length,
      concluidas,
      pendentes: tarefas.length - concluidas,
    }
  }, [tarefas])

  return (
    <div className="filtros" role="group" aria-label="Filtrar tarefas">
      {OPCOES.map((opcao) => (
        <button
          key={opcao.valor}
          type="button"
          className={filtro === opcao.valor ? 'ativo' : ''}
          aria-pressed={filtro === opcao.valor}
          onClick={() => setFiltro(opcao.valor)}
        >
          {opcao.rotulo} ({contagem[opcao.valor]})
        </button>
      ))}
    </div>
  )
}

export default TodoFilters
