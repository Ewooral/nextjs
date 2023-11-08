import styles from '@/styles/custom.module.scss'
import {useState} from "react";
const CustomInput = () => {
    // const [inputValues, setInputValues] = useState('')
    return (
        <div className={styles['Custom__Wrapper']}>
            <div className={styles['Custom__Input']}>
                <header>
                    A TODO APP
                </header>
                <form action="">
                    <label htmlFor="todo">Itinerary:</label>
                    <input type="text" placeholder='Enter what you wanna do' />
                    <button type='submit'>send</button>
                </form>
            </div>
        </div>
    )
}

export default CustomInput