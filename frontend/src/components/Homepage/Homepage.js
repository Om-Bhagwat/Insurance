import React from 'react';
import {Link} from 'react-router-dom';

const Homepage=({handleLogout})=>{

    //*Rendering Navbar from here.
    //*Navbar can be Edited from here.

    return (
        <section className="hero">
                <nav>
                    <h2>Welcome</h2>
                    <button onClick={handleLogout}>Logout</button>{/**This Button Log's the user out.*/ }
                </nav>
        </section>
    )
}


export default Homepage;
