// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";

// const ProductDetails=()=>{
//     const {productId}=useParams()
    
//      const[productDetails,setProductDetails]=useState('');
//         useEffect(() => {
//             axios({
//                 method:'GET',
//                 url:`https://dummyjson.com/products/${productId}`,
//             }).then((data)=>{
//                 console.log(productDetails)
//                 setProductDetails(data.data)
//             })
      
//          }, []);
//     return(
//         <>
//         <h1>product</h1>
       
//                 <div style={{width:'20%'}} >
//                 <img width={'100px'} src={productDetails.images} alt="" />
//                 <h3>{productDetails.title}</h3>
//                 <p>{productDetails.price}</p>
//                 <Link to={`/products/${productDetails.id}`}>Add to cart</Link>
//             </div>
 
            

        
        

//         </>
//     )
// }
// export default ProductDetails;


import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import React from "react";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";

const ProductDetails = ({addToCart}) => {
  const {  id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    

    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productDetails) {
    return <div>Product not found.</div>;
  }

  return (
    <>


    <section className="py-16 px-8 ">
      <div className="w-[90%] mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2 bg-gray-900 rounded-4xl">
        <img
          src={productDetails.images[0]}
          alt={productDetails.title} 
          className="h-[36rem]"
        />
        <div className="mr-4">
          <Typography className="mb-4 text-amber-50" variant="h3">
          {productDetails.title} 
          </Typography>
          <Typography variant="h5" className="text-gray-500">${productDetails.price}</Typography>
          <Typography className="!mt-4 text-base font-normal leading-[27px]  text-amber-50">
          {productDetails.description}
          </Typography>
          <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              {productDetails.rating}/5 (100 reviews)
            </Typography>
          </div>
        
         
          <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <Button  onClick={()=>addToCart(productDetails)} color="gray" className="w-52 text-gray-900">
                 Add to Cart
             
            </Button>
            <IconButton color="gray" variant="text" className="shrink-0">
              <HeartIcon className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
 
    </>
  );
};

export default ProductDetails;