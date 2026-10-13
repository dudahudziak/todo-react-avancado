import { createContext, useCallback, useMemo, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext(null)

// Provider: guarda o estado global da lista e as ações para alterá-lo
export function TodoProvider({ children }) {
  const [tarefas, setTarefas] = useLocalStorage('todo-react-avancado:tarefas', [])
  const [filtro, setFiltro] = useState('todas') // 'todas' | 'pendentes' | 'concluidas'

  // useCallback mantém a mesma função entre renderizações,
  // o que permite o React.memo do TodoItem funcionar
  const adicionar = useCallback((texto) => {
    setTarefas((anteriores) => [
      ...anteriores,
      { id: Date.now(), texto, concluida: false },
    ])
  }, [setTarefas])

  const alternar = useCallback((id) => {
    setTarefas((anteriores) =>
      anteriores.map((t) => (t.id === id ? { ...t, concluida: !t.concluida } : t))
    )
  }, [setTarefas])

  const remover = useCallback((id) => {
    setTarefas((anteriores) => anteriores.filter((t) => t.id !== id))
  }, [setTarefas])

  // useMemo evita criar um novo objeto de contexto sem necessidade
  const value = useMemo(
    () => ({ tarefas, filtro, setFiltro, adicionar, alternar, remover }),
    [tarefas, filtro, adicionar, alternar, remover]
  )

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
