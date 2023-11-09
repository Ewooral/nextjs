import React from 'react';
import styles from '@/styles/custom.module.scss'
import useStore from '@/store/store'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function TableRow(props: { text: any, index: number } ) {

    // @ts-ignore
    const removeTodo = useStore(state => state.removeTodo)
    // const [newText, setNewText] = useState(text);
    const updateTodo = useStore(state => state.updateTodo);
    const todos = useStore(state => state.todos)

    // const handleUpdate = () => {
    //     updateTodo(index, newText);
    // };
    const objList = todos.map((i: any, k: any) => (
        {key: k, item: i}
    ))
    // console.log(objList[0].item.text)

    const handleRemove = () => {
        console.log('Removing...', props.text, props.index)
        removeTodo(props.index);
    };



    return (
        <>
            {objList.map((item: any, index: number) => (
                <tr key={index}
                >
                    <td>{`${index + 1}`}</td>
                    <td>{item.item.text}</td>
                    <td>
                        <button
                            className={styles['Custom__TableRow']}
                            // onClick={}
                        >
                            <EditNoteIcon/>
                        </button>
                    </td>
                    <td>
                        {/*<input value={newText} onChange={e => setNewText(e.target.value)} />*/}
                        <button
                            className={styles['Custom__TableRow']}
                            onClick={handleRemove}
                        >
                            <DeleteForeverIcon/>
                        </button>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default TableRow;