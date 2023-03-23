import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/ContextApi";

function Search() {
     
 const {userdata,setuserdata,userdatadummy,setuserdatadummy}=useContext(UserContext) // sear 3
  function handelinput(e){
    
     
      // sear 4
     let filterdata=userdatadummy.filter((elem)=>{
      return (elem.username).startsWith(e.target.value)
     })
     setuserdata(filterdata)
  }


    return ( 
        <div className="container">
        <nav className="navbar">
  <div className="container-fluid">
    <form className="d-flex w-75" role="search">
      <input onChange={(e)=>{handelinput(e)}} className="form-control me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-secondary w-25 text-dark" type="submit"><i style={{marginRight:"10px"}} class="bi bi-funnel"></i>Filter By</button>
    </form>
  </div>
</nav>

</div>

     );
}

export default Search;