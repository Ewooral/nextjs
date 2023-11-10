'use client'
import styles from '@/styles/custom.module.scss'
import useStore from '@/store/store'
import TodoList from "@/app/todos/TodoList";

const TodoApp = () => {
    // @ts-ignore
    const todos = useStore((state) => state.todos)
    // @ts-ignore

    const addTodo = useStore(state => state.addTodo)


    function buttonHandler(e: { preventDefault: () => void; }) {
        e.preventDefault()
        // @ts-ignore
        const text = e.target.elements.text.value.trim();
        if (text) {
            addTodo(text);
            // @ts-ignore
            e.target.elements.text.value = '';
        }
    }


    return (
        <div className={styles['Custom__Wrapper']}>
            <div className={styles['Custom__Input']}>
                <header>
                    A TODO APP
                </header>
                <div>
                    <form onSubmit={buttonHandler}>
                        <label htmlFor="todo">Itinerary:</label>
                        <input id="todo" type="text" name="text" placeholder="Add a new todo"/>
                        <button type="submit" onClick={() => {
                            addTodo
                        }}>Add Todo
                        </button>
                    </form>
                    <div className={styles['Custom__Table']}>
                        <TodoList todos={todos} />
                    </div>
                </div>




            </div>
        </div>
    )
}

export default TodoApp