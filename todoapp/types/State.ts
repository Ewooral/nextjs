type Todo = {
    text: string;
};

type State = {
    count: number;
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (index: number) => void;
    updateTodo: (index: number, text: string) => void;
};