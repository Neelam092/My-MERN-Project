import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

const Errorpage = ()=>{
    return(
        <>
        <div className="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h2>404</h2>
                </div>
                <h2>we are sorry, page not found</h2>
                <p className="mb-5">
                    The page you are looking for might have been removed
                    had its name changed or is temporaily unavailable.
                </p>
                <NavLink to="/">Back to Home Page</NavLink>
            </div>
        </div>
        </>
    )
}
export default Errorpage