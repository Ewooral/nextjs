'use client'
import styles from '@/styles/style.module.css'
import {useState} from "react";
const Forms = () => {
    const [error, setError] = useState(false)
    function handleOnsubmit() {
        console.log("Submitting form...");
    }
    return (
        <div className={styles["Custom__Container"]}>
            <div className={styles["Custom__Form"]}>
                <h1>Register</h1>
                <form action="" style={{display:'flex', justifyContent:'center',  flexDirection:'column'}} >
                    <label htmlFor="fname">first name: </label>
                    <input type="text" id="fname" required minLength={5} maxLength={10}   />
                    <label htmlFor="lname">last name: </label>
                    <input type="text" id="lname" required minLength={5} maxLength={10}  />
                    <label htmlFor="age">age: </label>
                    <input type="text" id="age" required minLength={1} maxLength={2}  />
                    <label htmlFor="mobile_number">mobile number: </label>
                    <input type="text" id="mobile_number" />
                    {/*<p>{error ? "An error occurred!" : <span className='bg-black p-4 space-y-2 text-green-600'>Looks Good</span>}</p>*/}
                    <button type="submit" onClick={handleOnsubmit}>Submit</button>
                </form>
            </div>
            {/*<MyForm />*/}
        </div>
    )
}
export default Forms