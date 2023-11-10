// import styles from '@/styles/todo.module.css'
// import Todo from './Todo'
// function App() {
//     return (
//         <div className={styles["todoapp stack-large"]}>
//             <Todo name="Eat" completed={true} id="todo-0" />
//             <Todo name="Sleep" completed={false} id="todo-1" />
//             <Todo name="Repeat" completed={false} id="todo-2" />
//         </div>
//     );
// }
//
// export default App

import React from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";

function App(props: { tasks: any[]; }) {
    const taskList = props.tasks.map((task) => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
        />
    ));
    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form />
            <div className="filters btn-group stack-exception">
                <FilterButton />
                <FilterButton />
                <FilterButton />
            </div>
            <h2 id="list-heading">3 tasks remaining</h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    );
}

export default App;
