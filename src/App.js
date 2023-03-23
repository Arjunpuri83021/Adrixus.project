import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Navigate,Route,Routes, useNavigate} from 'react-router-dom'
import Dashbord from './components/Dashbord';
import Header from './components/Header';
import Login from './components/Login';
import Reg from './components/Reg';
import Search from './components/Search';

function App() {
    
  const navigate= useNavigate()
  const [logged, setLogged] = useState(  
		// document.cookie.match(/^(.;)?\s*isLoggedIn\s=\s*[^;]+(.*)?$/) !== null
    localStorage.getItem('user') !== null
	);  
  const CheckLoggedIn = ({ children }) => {
		if (!logged) return <Navigate to="/" replace/>;
		return children;
	};
  const CheckNotLoggedIn = ({ children }) => {
		if (logged) return <Navigate to="/dashbord" replace/>;
		return children;
	};


  useEffect(() => {
    if(!logged) {
      logout();
    }
  }, [logged])

  function logout(){
    localStorage.removeItem('user');
  document.cookie = `isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  setLogged(false)
  navigate('/');
  }

  ///These are props will be all passed into every component where they are needed.
	const props = {
		logged,
		setLogged,
		logout,
	};


  return ( 
    
    <>
      
        <Routes>
          {/* <Route path='/' element={<Login/>}></Route>
          <Route path='/reg' element={<Reg/>}></Route> */}
          
          <Route path='/' element={<CheckNotLoggedIn><Login props={props}/></CheckNotLoggedIn>}/> 
         <Route path='/reg'element={<CheckNotLoggedIn><Reg/></CheckNotLoggedIn>}/>

          {/* <Route path='/dashbord' element={<Dashbord/>}></Route>
          <Route path='/header' element={<Header/>}></Route> */}

          <Route path="/dashbord" element={<CheckLoggedIn><Dashbord props={props}/></CheckLoggedIn>}/>
          <Route path="/header"element={<CheckLoggedIn><Header props={props}/></CheckLoggedIn>}/>
          <Route path="/search"element={<CheckLoggedIn><Search props={props}/></CheckLoggedIn>}/>


        </Routes>
       

    </>
   );
}

export default App;