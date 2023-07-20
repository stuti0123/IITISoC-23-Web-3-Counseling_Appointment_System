import React , {useEffect , useState} from 'react';
import {useLocation} from 'react-router-dom'
const MayShowNavbar =({children}) => {

    const location = useLocation();

    const [showNavbar , setShowNavbar]=useState(false);
    useEffect(() =>{
        console.log('this is locstion: ',location)
        if(location.pathname === '/booknow'){
            setShowNavbar(false)
        }else{
            setShowNavbar(true)
        }
    },[location])

    return(
        <div>{showNavbar && children}</div>
    )
        }
export default MayShowNavbar