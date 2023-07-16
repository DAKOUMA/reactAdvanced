import { useState } from "react"


function FormRange() {
    const [score, setScore] = useState(3);
    const [comment, setComment] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (Number(score) < 3 && comment.length < 40) {
            alert('Please provide a comment if the experience is poor')
        }
        console.log('Form submitted');
        setScore("5");
        setComment("")
    }

    return (
        <div className="FormRange">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="field">
                        <label htmlFor="feedback">Form range : </label>
                            <input 
                                min={0}
                                max={5}
                                onChange={e => setScore(e.target.value)}
                                value={score}
                                type="range"
                                name="feedback"
                                id="feedback"
                            /> <p>{score} Star</p><br/> 
                        <label htmlFor="value">Value : </label>
                            <textarea value={comment} onChange={e => setComment(e.target.value)}/>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export {FormRange}