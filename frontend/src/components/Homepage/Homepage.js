import React from 'react';
// import {Link} from 'react-router-dom';

const Homepage=(props)=>{

    //*Rendering Navbar from here.
    //*Navbar can be Edited from here.

    const {
            handleLogout,
            name,
            isCustomer,
            // isEmployee
        } = props;

    return (
        <section className="hero">
                <nav>
                    <h2>Welcome</h2>
                    <h4>{name}</h4>
                    {isCustomer?(
                        <>
                            Hii Customer
                        </>
                    ):(
                        <>
                            Hii employee
                        </>
                    )}
                    <button onClick={handleLogout}>Logout</button>{/**This Button Log's the user out.*/ }
                </nav>
        </section>
    )
}


export default Homepage;
