import { Filters } from './Filters'
import { type FilterTypes } from '../../types'

interface Props {
    pendientes: number
    completados: number
    filterSelected: FilterTypes
    onFilterChange: (filter: FilterTypes) => void
    clearCompleted: () => void
}

export const Footer: React.FC<Props> = ({
    pendientes = 0,
    completados = 0,
    filterSelected,
    onFilterChange,
    clearCompleted
}) => {
    return (
        <footer>
            <span>
                <strong>{pendientes}</strong>
                Tareas pendientes
            </span>
            <Filters filterSelected={filterSelected} onFilterChange={onFilterChange} />
            {
                completados > 0 &&
                <button onClick={clearCompleted}>Borrar completados</button>
            }
        </footer>
    )
}
