import { useState } from "react";

// Custom Hook
function useInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange: (e) => setValue(e.target.value)
        }, () => setValue(initialValue)
    ];
}

export function ColorPicker () {
    const [text, resetText] = useInput("");

    const submit= (e)=> {
        e.preventDefault();
        alert(
           `Title: ${text.value}`
        );
        resetText();
    }

    return (
        <>
        <form onSubmit={submit} className="align-center w-100">
            <input 
            {...text}
            placeholder="Enter text..." type="text" className="form-control mx-5" />
            
            <button className="btn btn-warning w-100">
                Alert Text
            </button>
        </form>
        </>
    )
}