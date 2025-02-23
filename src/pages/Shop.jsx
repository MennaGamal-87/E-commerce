import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import Header from "../components/Header";

const Shop=({addToCart,user})=>{
    const[products,setProducts]=useState(null);
    useEffect(() => {
       fetch('http://localhost:3000/products')
       .then((data)=>{
           return data.json();
       }).then(res=>{
           console.log(res.products)
           setProducts(res)
       })
     }, []);
 
    return(
        <>
       
        <div className="container relative top-8 p-15 pt-5 flex flex-row flex-wrap justify-between items-center ">
        {products !=null&&products.map((product,index)=>{
            return(<>
           
            <ProductCard productId={product.id}  product={product} addToCart={addToCart} productDescribtion={product.description} productPrice={product.price} index={index} productImage={product.images} productTitle={product.title}></ProductCard>

            
        {/* // <div style={{width:'20%'}} key={index}>
        //      <Link to={`/products/${product.id}`}>
        //     <img width={'100px'} src={product.images} alt="" />
        //     <h3>{product.title}</h3>
        //     <p>{product.price}</p>
        //  </Link>
        //  <button onClick={()=>addToCart(product)}>Add to cart</button>
        // </div> */}
        </>
            )})}
            </div>
        </>
    )
}
export default Shop;