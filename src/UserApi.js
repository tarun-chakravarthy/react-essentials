import { useState, useEffect } from "react";
import { MyUserData } from './MyUser'


export function UserData() {
    const [data, useData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/wycats`)
        .then((response) => response.json())
        .then(useData);
    });
    if(data) {
        return(
        <>
            <MyUserData
                name={data.name}
                location={data.location}
            />

            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
        )
    }
}