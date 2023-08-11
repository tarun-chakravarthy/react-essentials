import { useState, useEffect } from "react";
import { MyUserData } from './MyUser'

const query = `
    query {
        allLifts {
        name,
        elevationGain,
        status
        }
    }
`;

const opts = {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
};


export function UserData() {
    const [data, useData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://snowtooth.moonhighway.com/`, opts)
        .then((response) => response.json())
        .then(useData)
        .then(() => setLoading(false))
        .catch(setError);
        console.log(data, "Data Check!")
    }, []);
    if (loading) return <h1>Loading...</h1>
    if(error)
        return <pre>Error: {JSON.stringify(error)}</pre>
    if(!data) return null;
    return(
        <>
            <div>
                <h3>
                    With an external API fetch
                </h3>
                {
                    data.data.allLifts.map((lifts) => (
                        <MyUserData
                        name={lifts.name}
                        elevationGain={lifts.elevationGain}
                        status={lifts.status}
                        />
                    ))
                }
            </div>

            <div>
                <h3>
                    Task Pending: using internal server API call....
                </h3>
            </div>

            <hr />

            {/* <pre> Show API DATA: {JSON.stringify(data, null, 2)}</pre> */}
        </>
    )
}