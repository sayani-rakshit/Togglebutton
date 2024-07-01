
import { useState } from 'react';
import './App.css'
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";



function App() {
  const[isOn,setIsOn]=useState(false)
  const handletoggle=()=>{
    setIsOn(!isOn)
  }

  return (
    <>
   <div className="togglecontaioner">
   <div className="toggleitems ">

    <div  onClick={handletoggle}>
     
{isOn ? <MdDarkMode className='off'/> :<CiDark className='on'/>  }
  
    </div>
    </div>
   </div>
   
      
    </>
  )
}

export default App
