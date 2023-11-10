import { create } from 'zustand'
import {devtools} from "zustand/middleware";

// @ts-ignore
const useStore = create<State>(devtools((set) => ({
    count: 0,
    todos: [],
    addTodo: (text: string) => set((state) => ({ todos: [...state.todos, { text }] }), false, 'addTodo'),
    removeTodo: (index: number) => {
        set((state) => ({ todos: state.todos.filter((_, i) => i !== index) }), false, 'removeTodo')
    },

    updateTodo: (index: number, text: string) =>
        set((state) => ({
            todos: state.todos.map((todo, i) => (i === index ? { text } : todo)),
        }),false, 'updateTodo'),
})));

// Assert the type of 'window' to include the 'store' property
declare global {
    interface Window {
        store: typeof useStore;
    }
}

// Assign the store to the window object
window.store = useStore;

export default useStore