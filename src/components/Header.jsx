// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { FiLogIn } from "react-icons/fi";
// import '../App.css'

import React, { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { FaShoppingCart } from "react-icons/fa";

import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";


const Header=({cart,user})=>{
const [openNav, setOpenNav] = useState(false);
 useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const logOut=()=>{
    navigate('/signin')
    user=null
  }
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
        Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/products" className="flex items-center">
        Shop
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/cart" className="flex items-center">


        <div className="relative inline-flex">
            <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                 <FaShoppingCart className="text-black" /> 
             </button>
  {user? <span className="absolute top-0.5 right-0.5 grid min-h-[28px] min-w-[28px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white border border-white">
  {cart.length}
  </span>: <span className="absolute top-0.5 right-0.5 grid min-h-[28px] min-w-[28px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white border border-white">
  !
  </span>}
 
</div>




       
        </Link>
       
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-small w-[15%]"
      >
        <DropDownMenu logOut={logOut} user={user}/>
      </Typography>
     
    </ul>
  );
 
  return (
    <div className=" w-full fixed top-0 z-10">
      <Navbar className="sticky top-0 z-10  max-w-full rounded-none px-4 lg:px-8 ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            to="#"
            className="mr-4 cursor-pointer py-1.5 font-large text-2xl w-[20%]"
          >
            Fashion Store
          </Typography>

          {user?<div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div></div>: 
            <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span><Link to="/signin">Log In</Link></span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span><Link to="/signup"> Sign Up</Link></span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>}


      
        </div>
       
          

          
           <MobileNav open={openNav}>
          {navList}
       
           <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span><Link to="/signin">Log In</Link> </span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span><Link to="/signup"> Sign Up</Link></span>
            </Button>
          </div>
          </MobileNav>
         
        
      </Navbar>
    
    </div>
  );
}
export default Header;