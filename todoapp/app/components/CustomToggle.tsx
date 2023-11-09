import {useCallback, useState} from "react";
import ToggleStyle from '@/styles/style.module.css'

const ToggleComponent = () => {
    const [isToggled, setIsToggled] = useState(false)
    const toggle = useCallback(() => {
        setIsToggled((prevState) => !prevState)
    }, [])
    return (
        <div className={ToggleStyle['toggleContainer']}>
            <p>Do not disturb</p>
            <button
                onClick={toggle}
                className={isToggled ? ToggleStyle["on"] : ToggleStyle["off"]}
            >
                {isToggled ? "ON" : "OFF"}
            </button>

        </div>
    )
}

export default ToggleComponent

/*
* The useState hook sets up a state variable isToggled with initial value false.
* The function toggle, created with useCallback, toggles the isToggled value between true and
* false each time it's called (on button click). The button's appearance and text ("ON" or "OFF") dynamically
* reflect the isToggled state.
* */