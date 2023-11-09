import styles from '@/styles/todo.module.css'

function CustomTodo() {
    return (
        <div className={styles["todoapp stack-large"]}>
            <h1>TodoMatic</h1>
            <form>
                <h2 className={styles["label-wrapper"]}>
                    <label htmlFor="new-todo-input" className={styles["label__lg"]}>
                        What needs to be done?
                    </label>
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className={styles["input input__lg"]}
                    name="text"
                    autoComplete="off"
                />
                <button type="submit" className={styles["btn btn__primary btn__lg"]}>
                    Add
                </button>
            </form>
            <div className={styles["filters btn-group stack-exception"]}>
                <button type="button" className={styles["btn toggle-btn"]} aria-pressed="true">
                    <span className={styles["visually-hidden"]}>Show </span>
                    <span>all</span>
                    <span className={styles["visually-hidden"]}> tasks</span>
                </button>
                <button type="button" className={styles["btn toggle-btn"]} aria-pressed="false">
                    <span className={styles["visually-hidden"]}>Show </span>
                    <span>Active</span>
                    <span className={styles["visually-hidden"]}> tasks</span>
                </button>
                <button type="button" className={"btn toggle-btn"} aria-pressed="false">
                    <span className={styles["visually-hidden"]}>Show </span>
                    <span>Completed</span>
                    <span className={styles["visually-hidden"]}> tasks</span>
                </button>
            </div>
            <h2 id="list-heading">3 tasks remaining</h2>
            <ul
                role="list"
                className={styles["todo-list stack-large stack-exception"]}
                aria-labelledby="list-heading">
                <li className={styles["todo stack-small"]}>
                    <div className={styles["c-cb"]}>
                        <input id="todo-0" type="checkbox" defaultChecked={true}/>
                        <label className={styles["todo-label"]} htmlFor="todo-0">
                            Eat
                        </label>
                    </div>
                    <div className={styles["btn-group"]}>
                        <button type="button" className={styles["btn"]}>
                            Edit <span className={styles["visually-hidden"]}>Eat</span>
                        </button>
                        <button type="button" className={styles["btn btn__danger"]}>
                            Delete <span className={styles["visually-hidden"]}>Eat</span>
                        </button>
                    </div>
                </li>
                <li className={styles["todo stack-small"]}>
                    <div className={styles["c-cb"]}>
                        <input id="todo-1" type="checkbox"/>
                        <label className={styles["todo-label"]} htmlFor="todo-1">
                            Sleep
                        </label>
                    </div>
                    <div className={styles["btn-group"]}>
                        <button type="button" className={styles["btn"]}>
                            Edit <span className={styles["visually-hidden"]}>Sleep</span>
                        </button>
                        <button type="button" className={styles["btn btn__danger"]}>
                            Delete <span className={styles["visually-hidden"]}>Sleep</span>
                        </button>
                    </div>
                </li>
                <li className={styles["todo stack-small"]}>
                    <div className={styles["c-cb"]}>
                        <input id="todo-2" type="checkbox"/>
                        <label className={styles["todo-label"]} htmlFor="todo-2">
                            Repeat
                        </label>
                    </div>
                    <div className={styles["btn-group"]}>
                        <button type="button" className={styles["btn"]}>
                            Edit <span className={styles["visually-hidden"]}>Repeat</span>
                        </button>
                        <button type="button" className={styles["btn btn__danger"]}>
                            Delete <span className={styles["visually-hidden"]}>Repeat</span>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default CustomTodo