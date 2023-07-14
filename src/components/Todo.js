import { useState } from "react";

function Todo(props) {
    return (
        <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input/>
        </td>
        <td>{props.createAt}</td>
        </tr>
    )
}

export {Todo}