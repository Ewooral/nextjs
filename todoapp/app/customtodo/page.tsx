import App from './App'

function CustomTodo() {
    const DATA = [
        { id: "todo-0", name: "Eat", completed: true },
        { id: "todo-1", name: "Sleep", completed: false },
        { id: "todo-2", name: "Repeat", completed: false },
    ];
    return (
        <>
            <App tasks={DATA}/>
        </>
    );
}

export default CustomTodo