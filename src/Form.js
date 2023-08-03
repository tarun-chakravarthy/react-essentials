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
        <form onSubmit={submit} className="align-center">
            <input 
            {...text}
            placeholder="Color title .." type="text" />
            
            <button>
                Add Color
            </button>
        </form>
        </>
    )
}