import { useState } from "react";

function Form(params) {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = () => {
        console.log(name);
    }

    return(
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export {Form}