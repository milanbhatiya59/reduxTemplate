import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
}

export const todoSlice = createSlice(
    {
        name: "todo",
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload,
                }
                state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                const id = action.payload
                // option - 1
                //
                // for (let i = 0; i < state.todos.length; i++) {
                //     if(state.todos[i].id === 234){
                //         state.todos.splice(i, 1);
                //         break;
                //     }
                // }

                state.todos = state.todos.filter(todo => todo.id != id)
            }
        }
    }
)


export const { addTodo, removeTodo } = todoSlice.reducer

export default todoSlice.reducer