import styles from '@/styles/custom.module.scss'
const CustomInput = () => {
    return (
        <div className={styles['Custom__Wrapper']}>
            <div className={styles['Custom__Input']}>
                <label htmlFor="todo">Itinerary:</label>
                <input type="text" placeholder='Enter what you wanna do' />
            </div>
        </div>
    )
}

export default CustomInput