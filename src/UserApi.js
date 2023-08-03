import { useState, useEffect } from "react";


export function UserData() {
    const [data, useData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/tarunduggempudi`)
        .then((response) => response.json())
        .then(useData);
    })
    if(data) {
        return(
            <pre>{JSON.stringify(data, null, 2)}</pre>
        )
    }
    return(
        <>
        <h1>
            User Data Function
        </h1>
        </>
    )
}