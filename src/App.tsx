import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoType, type TodoId, type FilterTypes, type TodoTitle } from '../types'
import { Footer } from './components/Footer'
import { TODO_FILTERS } from './consts'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterTypes>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const onFilterChange = (filter: FilterTypes): void => {
    setFilterSelected(filter)
  }

  const pendientes = todos.filter(todo => !todo.completed).length

  const filterTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const clearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const saveTodo = ({ title }: TodoTitle): void => {
    const newTodos = [...todos, {
      id: crypto.randomUUID(),
      title,
      completed: false
    }]
    setTodos(newTodos)
  }

  return (
    <main>
      <Header saveTodo={saveTodo} />
      <Todos todos={filterTodos} handleCompleted={handleCompleted} handleRemove={handleRemove} />
      <Footer
        filterSelected={filterSelected}
        onFilterChange={onFilterChange}
        pendientes={pendientes}
        completados={todos.length - pendientes}
        clearCompleted={clearCompleted} />
    </main>
  )
}

export default App
