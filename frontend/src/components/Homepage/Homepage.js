import React from 'react';
import {Link} from 'react-router-dom';

const Homepage=(props)=>{

    //*Rendering Navbar from here.
    //*Navbar can be Edited from here.

    const {
            user,
            handleLogout,
            name,
            isCustomer,
            // isEmployee
        } = props;

    return (
            <>
                    {user?(
                        <>  
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
                        </>
                    ):(
                        <>
                            <section className="hero">
                                <nav>
                                    <h2>Welcome</h2>
                                    <h2>HomePage</h2>
                                    <Link to="/login"><button>Login</button></Link>
                                </nav>
                            </section>
                        </>
                    )}
            </>
    )
}


export default Homepage;
