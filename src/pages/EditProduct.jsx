import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import axios from "axios";
   
const EditProduct=()=>{
    const[getProduct,setGetProduct]=useState(null);
    const[data,setData]=useState({
        title:'',
        price:'',
        description:'',
        image:'',
        category:'',
        items:'',
        rating:'',
    })
    const{productId}= useParams()
    useEffect(()=>{
        fetch(`http://localhost:3000/products/${productId}`)
        .then((res)=>res.json())
        .then((data)=>setGetProduct(data));
    },[productId])
    useEffect(()=>{
        if(getProduct){
            setData(getProduct)
        }
    },[getProduct])
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios({
            method:'patch',
            url: `http://localhost:3000/products/${productId}`,
            data,

        }).then(()=>alert('product updated'))
    }
    return(
        <>
        <div className="m-auto w-full bg-white text-black  flex justify-center relative top-6 py-10">
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Edit Product
        </Typography>
        
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-[80%] max-w-screen-lg sm:w-96 m-auto">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Title
            </Typography>
            <Input
            value={data.title}
            onChange={(e)=>setData({...data,title: e.target.value})}
            type="text"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Price
            </Typography>
            <Input
             value={data.price}
             onChange={(e)=>setData({...data,price: e.target.value})}
            type="number"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Description
            </Typography>
            <Input
             value={data.description}
             onChange={(e)=>setData({...data,description: e.target.value})}
              type="text"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
              Category
            </Typography>
            <Input
             value={data.category}
             onChange={(e)=>setData({...data,category: e.target.value})}
              type="text"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
              Image
            </Typography>
            <Input
             value={data.image}
             onChange={(e)=>setData({...data,image: e.target.value})}
              type="text"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
              Items
            </Typography>
            <Input
             value={data.items}
             onChange={(e)=>setData({...data,items: e.target.value})}
              type="text"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
               <Typography variant="h6" color="blue-gray" className="-mb-3">
              Rating
            </Typography>
            <Input
             value={data.rating}
             onChange={(e)=>setData({...data,rating: e.target.value})}
              type="text"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
        
          <Button type="submit" className="mt-6 text-gray-900" fullWidth>
           Edit
          </Button>
         
        </form>
      </Card>
      </div>
        </>
    )
}
export default EditProduct;




  
 