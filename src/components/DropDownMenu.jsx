import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


const DropDownMenu=({user,logOut})=>{
    const [isOpen, setIsOpen] = useState(false);

  const navigate=useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 

  const isAdmin = user && user.Role === 'admin';
  return (
   <>
   {user? <img
        
        alt="tania andrew"
        src={user.image}
        classNameName="relative inline-block h-2 w-2 cursor-pointer rounded-full object-cover object-center"
        onClick={toggleMenu}
      />:<img  src=""       classNameName="relative inline-block h-10 w-10 cursor-pointer rounded-full object-cover object-center"
></img>}
     
      {isOpen && (
        <ul
          
  role="menu"
  data-popover="profile-menu"
  data-popover-placement="bottom"
  className="absolute z-10 min-w-[180px] overflow-auto rounded-lg border border-slate-200 bg-white p-1.5 shadow-lg shadow-sm focus:outline-none"
>

{isAdmin && (
           <li
           role="menuitem"
           className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
         >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400">
             <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
           </svg>
        
           <Link to={'/admin'} className="text-slate-800 font-medium ml-2">
            Control
           </Link>
         </li>
          )}
  <li
    role="menuitem"
    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400">
      <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
    </svg>
 
    <Link to={'/profile'} className="text-slate-800 font-medium ml-2">
      My Profile
    </Link>
  </li>
  
 
  
  <hr className="my-2 border-slate-200" role="menuitem" />
  <li
    role="menuitem"
    className="cursor-pointer text-slate-800 flex w-full text-sm items-center rounded-md p-3 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400">
      <path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z" clip-rule="evenodd" />
      <path fill-rule="evenodd" d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z" clip-rule="evenodd" />
    </svg>
 
    <Link to={'/signin'} onClick={()=>logOut()} className="text-slate-800 font-medium ml-2">
      Log Out
    </Link>
  </li>
</ul>
      )}
</>
    
    )
}
export default DropDownMenu;