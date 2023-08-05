import { UserData } from './UserApi';
import { useState, useEffect } from "react";


export function MyUserData(props) {
    return (
        <>
            <div className='container'>
                <h1>
                    {props.name}
                </h1>
                <p>
                   location: {props.location}
                </p>
            </div>
        </>
    )
}