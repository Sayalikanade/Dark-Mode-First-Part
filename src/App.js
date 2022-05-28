import React,{useState,useEffect} from 'react';
import './App.css';


function App() {
  const getmode = ()=>{
    return JSON.parse(localStorage.getItem("mode")) || false
    }

    const [dark,setMode] = useState(getmode())
    useEffect(()=>{
       localStorage.setItem("mode",JSON.stringify(dark))
        },[dark])
        
  return (
    <div className={dark ? "App dark-mode":"App"}>
     <div className="nav">
        <label className="switch">
  <input 
  type="checkbox" 
  checked={dark}
  onChange={()=>setMode(!dark)}
  />
  <span className="slider round"></span>
</label>
     </div>
<div className="Content">
  <h1>{dark?"Dark mode is on" :"Light mode is on"}</h1>
  <p style={{fontsize:"20px"}}>want to see some magic ? press toggle button</p>
</div>







    </div>
    
  );
}

export default App;
