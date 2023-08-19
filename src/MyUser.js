import { UserData } from './UserApi';
import { useState, useEffect } from "react";


export function MyUserData(props) {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Elevation Gain (EG)</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>{ props.name }</td>
                            <td>{ props.elevationGain }</td>
                            <td>{ props.status }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}