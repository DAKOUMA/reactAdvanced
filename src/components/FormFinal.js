import { useState } from "react";

function FormFinal() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "", 
        isTouched: false});
    const [role, setRole] = useState("role");

    const getIsFormValid = () => {
        return (
            firstname && lastname &&
            password.value.length >= 8 &&
            role !== "role"
        );
    };

    const clearForm = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false
        });
        setRole("role");

    };

    const handleSubmit = e => {
        e.preventDefault();
        alert("Account created");
        clearForm();
    };

    return (
        <div className="FormFinal">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign up</h2>
                    <div className="Field">
                        <label htmlFor="firstname">
                            Firstname
                        </label>
                        <input 
                            placeholder="Firstname" 
                            type="text" 
                            id="firstname" 
                            name="firstname"
                            value={firstname}
                            onChange={(e) => {
                                setFirstname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="lastname">
                            Lastname
                        </label>
                        <input 
                            placeholder="Lastname" 
                            type="text" 
                            id="lastname" 
                            name="lastname"
                            value={lastname}
                            onChange={(e) => {
                                setLastname(e.target.value)
                            }}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="email">
                            Email address <sup>*</sup>
                        </label>
                        <input 
                            placeholder="Email" 
                            type="email" 
                            id="email" 
                            name="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="password">
                            Password <sup>*</sup>
                        </label>
                        <input 
                            placeholder="Password" 
                            type="password" 
                            id="password" 
                            name="password"
                            value={password.value}
                            onChange={(e) => {
                                setPassword({...password, value: e.target.value})
                            }}
                            onBlur={() => {
                                setPassword({...password, isTouched: true})
                            }}
                        />
                        {
                            password.isTouched && password.value.length < 8 ? (
                                <p>ERROR MESSAGE</p>
                            ) : null
                        }
                    </div>
                    <div className="Field">
                        <label>
                            Role
                        </label>
                        <select value={role} onChange={(e) => {setRole(e.target.value)}}>
                            <option value="role">Role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>Submit</button>
                </fieldset>
            </form>
        </div>
    )
};

export default FormFinal;