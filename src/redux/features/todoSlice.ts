import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    id: string,
    title: string,
    description: string,
    status?: boolean
}

type TInitialState = {
    todos: TTodo[]
}

const initialState: TInitialState = {
    todos: [],
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, status: false })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(item => item.id !== action.payload)
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const task = state.todos.find(item => item.id === action.payload)
            task!.status = !task?.status
        }
    },
})

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;