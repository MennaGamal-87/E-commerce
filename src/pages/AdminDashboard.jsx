import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
 
const AdminDashboard=()=> {
    const[products,setProducts]=useState([]);
    const[users,setusers]=useState([])
    const userNum=users.length
    const productsNum=products.length
    const navigate=useNavigate()
    useEffect(()=>{
      fetch('http://localhost:3000/users')
      .then((data)=>{
          return data.json();
      }).then(res=>{
          console.log(res)
         
          setusers(res)
      })

      fetch('http://localhost:3000/products')
      .then((data)=>{
          return data.json();
      }).then(res=>{
          console.log(res)
         
          setProducts(res)
      })
    }, []);
    
  return (
    <>
    
   <div className=" w-[80%] bg-gray-900 m-auto  rounded-2xl my-15 p-10 py-15  pt-10">
   <h1 className="text-white text-center my-4 mb-10">My Dashboard</h1>
   <div className="flex w-[80%] m-auto">
   <div className="w-[40%] m-auto bg-white rounded-3xl text-center p-4">
      <h1 className=" text-1xl font-medium">Users</h1>
      <h1 className="my-3">{userNum}</h1>
     
      <Button className="text-gray-900"onClick={()=>navigate('/admin/users')} >Show All Users</Button>
    </div>
    <div  className="w-[40%] m-auto bg-white rounded-3xl text-center p-2">
       <h1 className=" text-1xl font-medium">Products</h1>
       <h1 className="my-3">{productsNum}</h1>
       <Button className="text-gray-900" onClick={()=>navigate('/admin/products')}  >Show All Products</Button>
    </div>
   </div>
   
   </div>
   </>
  );

}
export default AdminDashboard