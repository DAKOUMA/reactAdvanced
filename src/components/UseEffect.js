import { useEffect } from "react"
import { useState } from "react"

function UseEffect(params) {
    const [toggle, setToggle] = useState(false);

    const clickHandler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        document.title = toggle ? "Welcome to little Lemon" : "Using the useEffect hook"
    }, [toggle]);
    return (
        <div>
            <h1>Usign the useEffect hook</h1>
            <button onClick={clickHandler}>
                Toggle MESSAGE
            </button>
            {toggle && <h2>Welcome to Little Lemon</h2>}
        </div>
    )
}

export {UseEffect}