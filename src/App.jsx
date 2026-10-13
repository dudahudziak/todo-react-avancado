import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoFilters from './components/TodoFilters'
import TodoList from './components/TodoList'

function App() {
  return (
    <TodoProvider>
      <main className="app">
        <h1>📝 Minhas tarefas</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </main>
    </TodoProvider>
  )
}

export default App
