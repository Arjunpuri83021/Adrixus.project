import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/ContextApi";

function Header({props: { setLogged }}) {
  const {loginname}=useContext(UserContext)
    return ( 
        <div className="container">
  <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <Link to='' className="navbar-brand" href="#"><h5 classname="text-dark">User</h5></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to='' className="nav-link active" aria-current="page" href="#">{loginname} | Admin</Link>
          </li>
          <li className="nav-item">
            <Link to='' className="nav-link"> <button style={{border:"none",background:"none"}} onClick={(e) => {setLogged(false) }}>Log out</button> </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
     );
}

export default Header;