
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './components/Cart'
import { useEffect, useState } from 'react'
import SignIn from './pages/Signin'

import AdminDashboard from './pages/AdminDashboard'
import Profile from './pages/Profile'
import './App.css'
import { Footer } from './components/Footer'
import  Signup  from './pages/SignUp'
import ProductsDashboard from './pages/ProductsDashboard'
import EditProduct from './pages/EditProduct'
import UsersDashboard from './pages/UsersDashboard'
import AddProduct from './pages/AddProduct'


function App() {

  const [user,setUser]=useState(null)

  const[cart,setCart]=useState([])
const navigate=useNavigate()

  const addToCart=(product)=>{
  
    if(user){
      setCart([...cart,product]);
      console.log(cart)
    }
    else{
      navigate('/signin')
    }
   

  }
  const logOut=()=>{
    navigate('/signin')
    user=null
  }
  return (
    <>
    <div className="bg-gray-200 relative top-15">
        <Header user={user} cart={cart} /> {/* Header is *outside* the Routes */}
        <Routes>
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/" element= {<Home user={user} />} ></Route> 
          <Route path="/cart" element={<Cart  user={user} cart={cart} setCart={setCart} />} />
 
          <Route path="/products" element={<Shop user={user} addToCart={addToCart} />} />
          <Route path="/products/:id" element={<ProductDetails  addToCart={addToCart} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          {/* ... other routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductsDashboard />} />
          <Route path="/admin/users" element={<UsersDashboard />} />
          <Route path="/profile" element={<Profile logOut={logOut} user={user} />} />
          <Route path="/admin/products/edit/:productId" element={<EditProduct />} />
          <Route path="/admin/products/add" element={<AddProduct cart={cart} user={user} />} />
        </Routes>
        <Footer />
      </div>
  
 
  
   

    </>
  )
}

export default App
