import React from 'react'
import { type TodoId, type TodoType } from '../../types'
import { Todo } from './Todo'

interface Props {
    todos: TodoType[]
    handleRemove: ({ id }: TodoId) => void
    handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todos: React.FC<Props> = ({ todos, handleRemove, handleCompleted }) => {
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <Todo
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            handleRemove={handleRemove}
                            handleCompleted={handleCompleted}
                        />
                    </li>
                )
            })}
        </ul>
    )
}
