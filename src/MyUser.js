import { UserData } from './UserApi';
import { useState, useEffect } from "react";


export function MyUserData(props) {
    return (
        <>
            <div className='container'>
                <h1>
                    { props.name }
                </h1>
                <p>
                    EG: { props.elevationGain }
                </p>
                <p>
                    { props.status }
                </p>
            </div>
        </>
    )
}