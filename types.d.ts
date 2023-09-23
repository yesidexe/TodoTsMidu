import type { TODO_FILTERS } from './src/consts'

export interface TodoType {
    id: string
    title: string
    completed: boolean
}
/**
 * ! con el Pick sacamos de los tipos "Todo", el "title", en caso de que cambie
**/
export type TodoId = Pick<TodoType, 'id'>
export type TodoTitle = Pick<TodoType, 'title'>

export type FilterTypes = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
