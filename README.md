# Todo React Avançado

Lista de tarefas em React que permite **adicionar, concluir, remover e filtrar** tarefas (todas, pendentes e concluídas). Projeto de estudo sobre estado global, hooks customizados e memoization.

## Tecnologias

- React 18
- Vite
- Context API (`createContext` e `useContext`)
- Hooks: `useState`, `useEffect`, `useCallback`, `useMemo`
- `React.memo`
- CSS puro (abordagem mobile first)

## Funcionalidades

- Adicionar, concluir e remover tarefas
- Filtrar por todas, pendentes e concluídas (com contador)
- Tarefas salvas no `localStorage` (não somem ao recarregar a página)
- Layout responsivo

## Estrutura do projeto

```
src/
├── components/
│   ├── TodoForm.jsx      formulário de nova tarefa
│   ├── TodoFilters.jsx   botões de filtro e contadores
│   ├── TodoList.jsx      lista filtrada
│   └── TodoItem.jsx      item da lista (React.memo)
├── context/
│   └── TodoContext.jsx   estado global (TodoProvider)
├── hooks/
│   ├── useLocalStorage.js  persistência no navegador
│   ├── useInput.js         controle de input
│   └── useTodos.js         acesso ao contexto
├── App.jsx
├── main.jsx
└── index.css
```

## Onde cada conceito é usado

| Conceito | Onde |
|---|---|
| Context API | `TodoContext.jsx` + `useTodos` |
| Hooks customizados | `useLocalStorage`, `useInput`, `useTodos` |
| `useMemo` | filtro em `TodoList.jsx` e contadores em `TodoFilters.jsx` |
| `React.memo` | `TodoItem.jsx` |
| `useCallback` | ações do contexto (mantêm a mesma referência para o `memo` funcionar) |

## Como rodar localmente

```bash
git clone https://github.com/SEU-USUARIO/todo-react-avancado.git
cd todo-react-avancado
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente http://localhost:5173).

## Como validar a memoization

Abra o console do navegador (F12). Ao marcar uma tarefa como concluída, apenas o `TodoItem` dela aparece no log de novo. Os demais itens não renderizam, graças ao `React.memo`. No modo de desenvolvimento, o `React.StrictMode` pode duplicar os logs; isso não acontece no build de produção.
