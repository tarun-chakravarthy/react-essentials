import { useState } from "react"

export function Header(props) {
    const [checked, setChecked] = useState(false);
    return (
        <header>
            <h1>Hello {props.name}, Welcome to {props.profession}!</h1>
            <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>
            <label>
                {checked ? 'Checked' : 'Please Check inn!'}
            </label>
        </header>
    )
}
