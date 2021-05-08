import React from 'react';
import CustomerHome from '../CustomerHome/CustomerHome';
import EmployeeeHome from '../EmployeeHome/EmployeeHome';
import NotLoggedIn from '../NotLoggedIn/NotLoggedIn';
import {Link} from 'react-router-dom';

import './Homepage.css';

const Homepage=(props)=>{

    //*Rendering Navbar from here.
    //*Navbar can be Edited from here.

    const {
            user,
            handleLogout,
            name,
            isCustomer,
            isEmployee,
            email
        } = props;


    return (
            <>
                    {user?(
                        <>  
                            <section className="hero">
                                <nav>
                                    <h2>Welcome</h2>
                                    <h4>{name}</h4>
                                    <button onClick={handleLogout}>Logout</button>{/**This Button Log's the user out.*/ }
                                </nav>
                                <div>
                                    {isCustomer?(
                                            <>
                                                <CustomerHome {...props} name={name} email={email} />
                                            </>
                                        ):(
                                            <>
                                                <EmployeeeHome/>
                                            </>
                                        )}
                                </div>
                            </section>
                        </>
                    ):(
                        <>
                            {/* <section className="hero">
                                <nav>
                                    <h2>Welcome</h2>
                                    <h2>HomePage</h2>
                                    <Link to="/login"><button>Login</button></Link>
                                </nav>
                                
                            </section> */}
                            <div>
                                    <NotLoggedIn/>
                            </div>
                        </>
                    )}
            </>
    )
}


export default Homepage;
