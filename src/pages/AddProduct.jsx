import axios from "axios";
import { useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

const AddProduct=({cart,user})=>{
    const[newProduct,setNewProduct]=useState({
        title:'',
        description:'',
        price:'',
        image:'',
        category:''
    })


    const handleSubmit=()=>{
        if(newProduct.title==''||newProduct.description==''||newProduct.price==''||newProduct.image==''||newProduct.category==''){
            alert('All Fields must be filled')
        }else{
            axios({
                method:'post',
                url:'http://localhost:3000/products',
                data: newProduct,
            })
            
        }
    }

    
    return(
        <>
      
        <div className="w-[60%] m-auto mt-10 rounded-3xl py-10 bg-gray-900 text-center">
            <div className="flex flex-col">
                <label className="text-white font-bold ">Title</label>
                <input className="w-[80%] p-2 m-auto bg-amber-50 my-3" type='text' value={newProduct.title} onChange={(e)=>setNewProduct({
                    ...newProduct,
                    title: e.target.value,
                })}></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white font-bold  ">Description</label>
                <input className="w-[80%] p-2 m-auto bg-amber-50 my-3" type='text' value={newProduct.description} onChange={(e)=>setNewProduct({
                    ...newProduct,
                    description: e.target.value,
                })} ></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white font-bold  ">Price</label>
                <input className="w-[80%] p-2 m-auto bg-amber-50 my-3" type='number' value={newProduct.price} onChange={(e)=>setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                })} ></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white font-bold ">Image</label>
                <input className="w-[80%] p-2 m-auto  bg-amber-50 my-3" type='text' value={newProduct.image}  onChange={(e)=>setNewProduct({
                    ...newProduct,
                    image: e.target.value,
                })}></input>
            </div>
            <div className="flex flex-col">
                <label className="text-white  ">Category</label>
                <input className="w-[80%] p-2 m-auto bg-amber-50 my-3" type='text' value={newProduct.category} onChange={(e)=>setNewProduct({
                    ...newProduct,
                    category: e.target.value,
                })} ></input>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>

       
        </>
    )
}
export default AddProduct;