import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css';

const Login = (props)=> {

    //*Props means the email,password is received from app.js file here for login and signup purposes.
    //!Add UseState Variables only after Asking.
    const{  
        email, 
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        sethasAccount,
        emailerr,
        passworderr,
        name,
        setName,
        ph_number,
        setPhone,
        empID,
        setEmpoyeeId,
        isCustomer,
        setCustomer,
        isEmployee,
        setEmployee
    } = props;

    const PresentCustomer=(e)=>{
        e.preventDefault();
        setEmployee(false);
        setCustomer(true);
    }

    const Presentemployee=(e)=>{
        e.preventDefault();
        setCustomer(false);
        setEmployee(true);
    }

    return (
        <div>
            <>
                    {isCustomer?(
                        <>
                            <section className="login">
                                 <div className="loginContainer">
                                    <>
                                        {hasAccount?(
                                            <>
                                            </>
                                        ):( 
                                        <>
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e)=>setName(e.target.value)}
                                            />
                                            <label>Phone Number</label>
                                            <input
                                                type="text"
                                                required
                                                value={ph_number}
                                                onChange={(e)=>setPhone(e.target.value)}
                                            />
                                        </>
                                        )}
                                    </>
                                    <label>Email</label>
                                        <input
                                            type="text"
                                            autoFocus
                                            required
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    <p className="errorMsg">{emailerr}</p>
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    <p className="errorMsg">{passworderr}</p>
                                        <div className="btnContainer">
                                            {hasAccount?(
                                                <>
                                                    <button onClick={handleLogin}><Link to="/">Sign In</Link></button>
                                                    <p style={{textAlign:"center"}}>Don't have an account ?<span onClick={()=>sethasAccount(!hasAccount)}>Sign up</span></p>
                                                    <p style={{textAlign:"center"}}>Are You An Employee?<span onClick={Presentemployee}>Sign in</span></p>
                                                </>
                                            ):(
                                                <>
                                                    <button onClick={handleSignup}><Link to="/">Sign Up</Link></button>
                                                    <p style={{textAlign:"center"}}>Have an Account ?<span onClick={()=>sethasAccount(!hasAccount)}>Sign in</span></p>
                                                    <p style={{textAlign:"center"}}>Are You An Employee?<span onClick={Presentemployee}>Sign in</span></p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                            </section>
                        </>
                    ):(
                        <>
                        </>
                    )}
                    {isEmployee?(
                        <>
                            <section className="login">
                                <div className="loginContainer">
                                <label>Employee ID</label>
                                        <input
                                            type="text"
                                            autoFocus
                                            required
                                            value={empID}
                                            onChange={(e)=>setEmpoyeeId(e.target.value)}
                                        />
                                <label>Email</label>
                                        <input
                                            type="text"
                                            autoFocus
                                            required
                                            value={email}
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    <p className="errorMsg">{emailerr}</p>
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    <p className="errorMsg">{passworderr}</p>
                                    <div className="btnContainer">
                                        <button onClick={handleLogin}><Link to="/">Sign in</Link></button>
                                        <p style={{textAlign:"center"}}>Are You An Customer?<span onClick={PresentCustomer}>Sign in</span></p>
                                    </div>
                                </div>
                            </section>
                        </>
                    ):(
                        <>
                        </>
                    )}

            </>
        </div>
    )
}

export default Login;
