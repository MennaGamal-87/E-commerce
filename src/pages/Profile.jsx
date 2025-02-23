import { useEffect, useState } from "react";
import React from 'react';
import { FaMapMarkerAlt, FaCode, FaUserCircle } from 'react-icons/fa';

const Profile=({user,logOut})=>{
    const[loading,setLoading]=useState(true)
    useEffect(() => {
        if (user) {  // Check if user exists *first*
          setLoading(false); // Then, set loading to false
        } else {
          setLoading(true); // Keep loading if no user
        }
      }, [user]); // Add user to dependency array
    


      if (loading) {
        return <div>Loading profile...</div>; // Display loading message
      }
    
      if (!user) { // Handle the case where the user is null (not logged in)
          return <div>Please log in to view your profile.</div>;
      }
    return(
        <>
        {/* <h1>My Profile</h1>
       <div>
        <img src={user.image} alt="" />
        <div>
        <h3>Name: {user.username}</h3>
        <h3>Email:{user.email} </h3>
        <h3>Password: {user.password}</h3>
        <h3>Address: {user.address.address}</h3>
        <h3>City: {user.address.city}</h3>
        <h3>Phone Number: {user.phone}</h3>
        </div>
       </div> */}




       <div className="  bg-gray-200 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4">
      <div className="relative w-[80%] bg-white rounded-lg shadow-xl max-w-md  transition-all duration-300 ease-in-out transform hover:scale-105">
        <div className="absolute top-0 right-0 pt-4 pr-4">
          {/* <button className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> */}
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-4">
              <img
                className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-lg"
                src={user.image}
                alt="Profile Avatar"
              />
              <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white">
                <FaUserCircle className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{user.username}</h2>
            <p className="text-gray-600 mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              {user.address.address}, {user.address.city}
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center">
              <FaCode className="mr-2 text-blue-500" /> Additional Info
            </h3>
            <div className="flex flex-wrap gap-2 my-3">
             
                <span
                  
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-all duration-200 hover:bg-blue-200"
                >
                  height : {user.height}
                </span>
            
            </div>
            <div className="flex flex-wrap gap-2 my-3">
             
             <span
               
               className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-all duration-200 hover:bg-blue-200"
             >
               weight : {user.weight}
             </span>
         
         </div>
         <div className="flex flex-wrap gap-2 my-3">
             
             <span
               
               className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-all duration-200 hover:bg-blue-200"
             >
               Eye Color : {user.eyeColor}
             </span>
         
         </div>
         <div className="flex flex-wrap gap-2 my-3">
             
             <span
               
               className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-all duration-200 hover:bg-blue-200"
             >
               height : {user.height}
             </span>
         
         </div>
         <div className="flex flex-wrap gap-2 my-3">
             
             <span
               
               className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full transition-all duration-200 hover:bg-blue-200"
             >
               Hair Type : {user.hair.type}
             </span>
         
         </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Bio</h3>
            working at {user.company.name} and has a credit card number {user.bank.cardNumber}
          </div>
          <div className="mt-8">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}
export default Profile;


   