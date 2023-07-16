import { useState } from "react";

function Form(params) {
    const [name, setName] = useState("");

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        console.log(name);
    }

    return(
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name" 
                            type="text" 
                            placeholder="Name" 
                            name="name"
                            value={name} 
                            onChange={handleChange}
                        />
                    </div>
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export {Form};