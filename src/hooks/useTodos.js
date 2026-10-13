import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

// Hook customizado: facilita o acesso ao contexto e avisa se usado fora do Provider
export function useTodos() {
  const contexto = useContext(TodoContext)
  if (!contexto) {
    throw new Error('useTodos deve ser usado dentro de um <TodoProvider>')
  }
  return contexto
}
