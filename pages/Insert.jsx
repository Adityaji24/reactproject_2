import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Insert=()=>{
    const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
   const handleSubmit=()=>{
    let api="http://localhost:3000/employees";
    axios.post(api, input).then((res)=>{
        console.log(res);
        toast.success("Data Successfully Save!!!")
    })
   }
    return(
        <>
         <h1> Insert Record</h1>
         Enter Employee No : <input type="text" name="empno"  
         onChange={handleInput} />
         <br/>
         Enter name : <input type="text" name="name" 
          onChange={handleInput} />
         <br/>
         Enter email : <input type="text" name="email"  
         onChange={handleInput} />
         <br/>
         Enter contact no. : <input type="text" name="contact"  
         onChange={handleInput} />
         <br/>
         <button onClick={handleSubmit}>Save!!!</button>
         <ToastContainer />
        </>
    )
}
export default Insert;