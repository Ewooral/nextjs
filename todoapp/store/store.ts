import {create} from 'zustand'


type Todo = {
    text: string;
};

type State = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (index: number) => void;
    updateTodo: (index: number, text: string) => void;
};

const useStore = create<State>((set) => ({
    todos: [],
    addTodo: (text) => set((state) => ({ todos: [...state.todos, { text }] })),
    removeTodo: (index) =>
        set((state) => ({ todos: state.todos.filter((_, i) => i !== index) })),
    updateTodo: (index, text) =>
        set((state) => ({
            todos: state.todos.map((todo, i) => (i === index ? { text } : todo)),
        })),
}));

export default useStore;