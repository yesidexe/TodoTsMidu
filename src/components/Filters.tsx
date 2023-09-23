import { type FilterTypes } from '../../types'
import { FOOTER_FILTERS_BUTTONS } from '../consts'

interface Props {
    onFilterChange: (filter: FilterTypes) => void
    filterSelected: FilterTypes
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul>
            {
                Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, { literal, href }]) => {
                    return (
                        <li key={key}>
                            <a href={href}
                                onClick={(event) => {
                                    event.preventDefault()
                                    onFilterChange(key as FilterTypes)
                                }}>
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
