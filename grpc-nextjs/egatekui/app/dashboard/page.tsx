'use client';
import { useEffect, useState } from "react";
import useCentralizedStore from "../../store"

const DashboardPage = () => {
// const username =useCentralizedStore(state => state.username)
// const password =useCentralizedStore(state => state.password)
// const email =useCentralizedStore(state => state.email)
const [username, password, email] = useCentralizedStore(state => [state.username, state.password, state.email])

const [user, setUser] = useState({
    username: "",
    password: "",
    email: ""
})

useEffect(() => {
    setUser({
        username: username,
        password: password,
        email: email
    })
}, [username, password, email])


    return (
        <div>
            {/* <p>Dashboard page</p>
            <h1>Username: {user.username}</h1>
            <h1>Password: {user.password}</h1>
            <h1>Email: {user.email}</h1> */}


            <p>USERS: </p>
           
                    <div>
                        <h1>Username: {user.username}</h1>
                        <h1>Password: {user.password}</h1>
                        <h1>Email: {user.email}</h1>
                    </div>          
        </div>
    )
}
export default DashboardPage