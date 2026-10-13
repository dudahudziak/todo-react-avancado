import { useInput } from '../hooks/useInput'
import { useTodos } from '../hooks/useTodos'

function TodoForm() {
  const { adicionar } = useTodos()
  const texto = useInput('')

  function handleSubmit(e) {
    e.preventDefault()
    const limpo = texto.value.trim()
    if (!limpo) return
    adicionar(limpo)
    texto.reset()
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite uma nova tarefa..."
        aria-label="Nova tarefa"
        value={texto.value}
        onChange={texto.onChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}

export default TodoForm
