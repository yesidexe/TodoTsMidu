import React from 'react'
import { type TodoId, type TodoType } from '../../types'

interface Props extends TodoType {
    handleRemove: ({ id }: TodoId) => void
    handleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, handleRemove, handleCompleted }) => {
    const handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        handleCompleted({
            id,
            completed: event.target.checked
        })
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCheckbox}
            />
            <label>{title}</label>
            <button onClick={() => { handleRemove({ id }) }}>Borrar</button>
        </div>
    )
}
