//Create react form with inputs for name,email,age.Use useState to capture submitted data and display it below the form upon submission
import React, { useState,useRef } from 'react'

function Form() {
    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const [email,setEmail]=useState('');
    const k=useRef();
    const add=(e)=>{
      e.preventDefault();
       console.log(name,age,email)
       {k.current.style.display='block'};
      }
  return (
  <form onSubmit={add}>
    <h1>Contact Us</h1>
    <label htmlFor="name">Enter the name : </label>
    <input type="text" id="name" placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}></input><br></br>
    <label htmlFor="email">Enter the mail id : </label>
    <input type="email" id="email" placeholder='Enter the mail id' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <label htmlFor="age">Enter the age : </label>
    <input type="number" id="age" placeholder='Enter the age' onChange={(e)=>setAge(e.target.value)}></input><br></br>
    <button type='submit'>Submit</button>
    <p ref={k} style={{display:'none'}}><span style={{color:'green' ,fontWeight:'bold'}}>N</span>ame : {name} <span style={{color:'green',fontWeight:'bold'}}>,A</span>ge : {age} <span style={{color:'green',fontWeight:'bold'}}>,E</span>mail Id : {email}</p>
  </form>
  )
}

export default Form