import styles from "@/styles/todo.module.css";
import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode } from "react";

function Todo(props: { id: string | undefined; completed: boolean | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined; }) {
    return (
        <li className={styles["todoapp stack-large"]}>
            <div className={styles["c-cb"]}>
                <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                <label className={styles["todo-label"]} htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className={"btn-group"}>
                <button type="button" className={"btn"}>
                    Edit <span className={"visually-hidden"}>{props.name}</span>
                </button>
                <button type="button" className={"btn btn__danger"}>
                    Delete <span className={"visually-hidden"}>{props.name}</span>
                </button>
            </div>
        </li>
    );
}

export default Todo;
