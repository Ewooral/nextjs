'use client'
import styles from '@/styles/style.module.css'
const AnotherForm = () => {
    return (
        <div className={styles["Custom__Container"]}>
            <div className={styles["Custom__Form"]}>
                <form  style={{display:'flex', justifyContent:'center',  flexDirection:'column'}}>
                    <label htmlFor="choose">Would you prefer a banana or cherry? (required)</label>
                    <input id="choose" name="i-like" required className={styles.inputInvalid} />
                    <button>Submit</button>
                </form>
            </div>
            {/*<MyForm />*/}
        </div>
    )
}
export default AnotherForm