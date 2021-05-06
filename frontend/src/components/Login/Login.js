import React from 'react';
import './Login.css';

const Login = (props)=> {

    //*Props means the email,password is received from app.js file here for login and signup purposes.

    const{email, setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,sethasAccount,emailerr,passworderr} = props;

    return (
        <div>
            <section className="login">
                    <div className="loginContainer">
                        <label>Username</label>
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
                                        <button onClick={handleLogin}>Sign In</button>
                                        <p>Don't have an account ?<span onClick={()=>sethasAccount(!hasAccount)}>Sign up</span></p>
                                    </>
                                ):(
                                    <>

                                        <button onClick={handleSignup}>Sign Up</button>
                                        <p>Have an Account ?<span onClick={()=>sethasAccount(!hasAccount)}>Sign in</span></p>
                                    </>
                                )}
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Login;
