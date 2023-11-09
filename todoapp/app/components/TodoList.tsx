import CustomTable from "@/app/components/CustomTable";
import styles from '@/styles/style.module.css'
import useStore from '@/store/store'
import {useEffect} from "react";
import TableRow from "@/app/components/TableRow";

const TodoList = (props: any) => {
    const objList = props.todos.map((i: any, k: any) => (
        {key: k, item: i}
    ))
    return (
        <>
                <table key={objList.key} className={styles['table']}>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Actions</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>

                    <TableRow   index={objList.key} text={objList.item}/>
                    </tbody>
                </table>
        </>

    )
}

export default TodoList