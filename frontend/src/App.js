/* eslint-disable default-case */
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login/Login.js';
import fire from './Firebase/fire.js';
import Homepage from './components/Homepage/Homepage.js';

function App() {

  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailerr,setEmailErr] = useState('');
  const [passworderr, setPasswordErr] = useState('');
  const [hasAccount,sethasAccount]=useState(false);


  //*Use to clear the inputs
  //! Do not edit this function.(Ask me.! @Om-Bhagwat)
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }


  //*Use to clear the errors which are store in the useState.
  //! Do not Edit this Function.(Ask me.! @Om-Bhagwat)
  const clearErrors=()=>{
    setEmailErr('');
    setPasswordErr('');
  }


  //*Login function provided by the FireBase.
  //! Do not edit this function.(Ask me.! @Om-Bhagwat)
  const handleLogin=()=>{
    clearErrors();
      fire.auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailErr(err.message);
              break;

            case "auth/wrong-password":
              setPasswordErr(err.message);
              break; 
          }
      });

  }


  //*SignUp function here.
  //! Do not change this function.(Ask me !Om-Bhagwat)
  const handleSignup=()=>{
    clearErrors();
    fire.auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailErr(err.message);
              break;

            case "auth/weak-password":
              setPasswordErr(err.message);
              break; 
          }
      });
  }

  //! Logout Function do not change(Ask me !Om-Bhagwat)
  const handleLogout=()=>{
    fire.auth().signOut();
  }

  const authListener=()=>{
    fire.auth().onAuthStateChanged(user=>{
        if(user){
          clearInputs();
          setUser(user);
        }else{
          setUser("");
        }
    })
  }

  useEffect(()=>{
    authListener();
  },[])

  return (
    <div>
    {user?(
         <Router>
           {/* Takes to homepage with Navbar. */}
              <Route path="/" exact render={(props)=>(
                <Homepage  handleLogout={handleLogout}/>
              )} />
        </Router>
    ):(
      <Login 
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin} 
      handleSignup={handleSignup} 
      hasAccount={hasAccount}
      sethasAccount={sethasAccount}
      emailerr={emailerr}
      passworderr={passworderr}
      />
    )}
  </div>
  );
}


export default App;
      