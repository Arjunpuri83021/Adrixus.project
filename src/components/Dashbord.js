import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/ContextApi";
import Header from "./Header";
import Search from "./Search";

function Dashbord({props: { logged, setLogged, logout }}) {
      //sear 1
    const [userdata,setuserdata]= useState([])
   const [userdatadummy,setuserdatadummy]= useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/users').then((res)=>{return res.json()}).then((data)=>{
            setuserdata(data.users)
            setuserdatadummy(data.users)
            //setuserdata(data)
        })
    },[])
  

    const [loginname,setloginname]=useState(localStorage.getItem('loginname'))
    const innerProp = {
        logged, setLogged, logout
      }
    return ( <>
        <UserContext.Provider value={{loginname,setloginname,setuserdata,userdata,userdatadummy,setuserdatadummy}}>  {/*//sear 2 */}
        <Header props={ innerProp}/>
        <Search/>
        </UserContext.Provider>

       <div className="container">
        
        <table className="table table-bordered mt-2">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>User Name</th>
                    <th>Mobile Number</th>
                    <th>Email</th>
                    <th>Age</th>
                    
                </tr>
            </thead>
            <tbody>
                {userdata.map((result,key)=>(
                <tr>
                    <td>{key +1}</td>
                    <td>{result.username}</td>
                    <td>{result.phone}</td>
                    <td>{result.email}</td>
                    <td>{result.age}</td>
                    
                </tr>
                ))}
                
            </tbody>
        </table>
       </div>
       </>
     );
}

export default Dashbord;