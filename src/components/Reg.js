import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Reg() {
   
   const navigate= useNavigate()
   const [name,setname]=useState('')
   const [email,setemail]=useState('')
   const [password,setpassword]=useState('')
   const [conpass,setconpass]=useState('')
    function handelsubmit(e){
        e.preventDefault()
        const formdata={name,email,password,conpass}
        fetch('/api/reg',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
            if(data.user._id){
                navigate('/')
            }
        })
    }

    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4"></div>
                <div style={{borderRadius:"20px"}} className="col-md-4 shadow p-3 mb-5 bg-white rounded">
                    <h5 className="text-center text-dark ">Registration</h5>

                    <form onSubmit={(e)=>{handelsubmit(e)}} className="w-75 m-auto">
                        
                    <label className="text-secondary mt-2">Full name</label>
                        <input placeholder="Enter name" style={{height:"32px"}} className="form-control border border-dark mt-1" type='text'
                          value={name} onChange={(e)=>{setname(e.target.value)}}></input>
                    <label className="text-secondary mt-2">Email</label>
                        <input placeholder="Enter email" style={{height:"32px"}} className="form-control border border-dark mt-1" type='email' 
                         value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                    <label className="mt-2 text-secondary">Password</label>
                        <input placeholder="Enter password" style={{height:"32px"}} className="form-control border border-dark mt-1" type='password' 
                         value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                    <label className="mt-2 text-secondary">Password</label>
                        <input placeholder="Enter password" style={{height:"32px"}} className="form-control border border-dark mt-1" type='password' 
                         value={conpass} onChange={(e)=>{setconpass(e.target.value)}}></input>

                        <button type="submit" className="btn btn-dark form-control mt-3">Sign Up</button>
                        <div className="text-center mt-4 mb-2">
                        <Link to='/' style={{fontSize:"14px",textDecoration:"none" ,fontWeight:"600"}} className="text-dark" >Already have an account? Login</Link>
                        </div>
                    </form>

                </div>
                <div className="col-md-4"></div>
            </div>
            
        </div>
        
     );
}

export default Reg;