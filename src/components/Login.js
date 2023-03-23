import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({props: {logged, setLogged, logout}}) {
   const navigate= useNavigate()
   const [email,setemail]= useState('')
   const [password,setpassword]=useState('')
   const [message,setmessage]= useState('')

    function handelsubmit(e){
        e.preventDefault()
        const formdata= {email,password}
        fetch('/api/login',{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(formdata)
        }).then((res)=>{return res.json()}).then((data)=>{
            console.log(data)
            if(data.message ==='Successful Login'){
                localStorage.setItem("loginname",data.user.name)
                localStorage.setItem('user',JSON.stringify(data.user));
            const now = new Date();
				const expires = new Date(now.getTime() + 3 * 60 * 60 * 1000);
				document.cookie = `isLoggedIn=true; expires=${expires.toUTCString()}; path=/`;
				//navigate('/home');
                setLogged(true)
                navigate('/dashbord')
            }
            else{
             setmessage(data.message)
            }
        })
    }
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4"></div>
                <div style={{borderRadius:"20px"}} className="col-md-4 shadow p-3 mb-5 bg-white rounded">
                    <h5 className="text-center text-dark ">Log in</h5>
                    
                    <form onSubmit={(e)=>{handelsubmit(e)}} className="w-75 m-auto">
                        <p className="text-danger">{message}</p>
                        <label className="text-secondary">Email</label>
                        <input placeholder="Enter email" style={{height:"32px"}} className="form-control border border-dark mt-1" type='email'
                        value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
                        <label className="mt-2 text-secondary">Password</label>
                        <input placeholder="Enter password" style={{height:"32px"}} className="form-control border border-dark mt-1" type='password'
                        value={password} onChange={(e)=>{setpassword(e.target.value)}}></input>
                        
                        <div className="mt-2">
                        <Link style={{fontSize:"14px",textDecoration:"none" ,fontWeight:"600"}} className="float-right text-dark" to=''>Forgot password ?</Link>
                        </div>
                        <button type="submit" className="btn btn-dark form-control mt-3">Login</button>
                        
                        <div className="text-center mt-4 mb-2">
                        <Link to='/reg' style={{fontSize:"14px",textDecoration:"none" ,fontWeight:"600"}} className="text-dark"> Don't have an account? Register?</Link>
                        </div>
                    
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
            
        </div>
        
     );
}

export default Login;