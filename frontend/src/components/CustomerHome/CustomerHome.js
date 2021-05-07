import React,{useState} from 'react'
import axios from 'axios';

import './CustomerHome.css';

const CustomerHome=(props)=>{

    const{name,email} = props;
    const[hash,setHash] = useState('0xaaE3eqw32232dsad');
    const[phasecount,setPhaseCount] = useState(0);

    const SubmitAutoClaim=async(e)=>{
            e.preventDefault();
            console.log(name);
            try{
                const response = await axios.post('http://localhost:5000/users/addgraph',{
                    //Todo:Details to be Sent.
                    name,
                    email,
                    hash,
                    phasecount
                },);
                console.log(response);
            }catch(error){
                console.log(error);
            }
    }

    return (
        <div>
            <button onClick={SubmitAutoClaim}>Apply For Auto Claim</button>
            <button>Apply For Home Claim</button>
        </div>
    )
}

export default CustomerHome;
