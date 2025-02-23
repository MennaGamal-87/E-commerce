import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
 
const TABLE_HEAD = ["ID","Title", "Price", "Category", 'Operations'];
 

 
const ProductsDashboard=()=> {
    const navigate=useNavigate()
    const[products,setProducts]=useState(null);
    const getAllProducts=()=>{
        fetch('http://localhost:3000/products')
        .then((data)=>{
            return data.json();
        }).then(res=>{
           
            setProducts(res)
        })
    }
        useEffect(() => {
            getAllProducts()
            
          
         }, []);

         const deleteProduct=(id)=>{
            
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    axios({
                        method:'DELETE',
                        url:`http://localhost:3000/products/${id}`
                    }).then(()=>{
                        getAllProducts()
                    })
                    
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              });
         }
  return (
    
    <Card className="relative top-15 w-[80%] m-auto shadow-amber-800  ">
        <button><Link to={'/admin/products/add'}>Add Product</Link> </button>
      <table className=" w-full min-w-max table-auto text-center">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className=" leading-none opacity-70 font-bold"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products !=null && products.length > 0 ? (
          products.map(({id, title, price,category }, index) => {
            const isLast = index === products.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 

         




            return (
              <tr key={index}>
                 <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {title}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {price}
                  </Typography>
                </td>
               
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {category}
                  </Typography>
                </td>
                <td className={`${classes} flex `}>
                  <Typography
                   as={Link} 
                   to={`/products/${id}`} 
                    variant="small"
                    color="blue-gray"
                    className="font-medium px-4 m-auto"
                  >
                   view
                    
                  </Typography>
                  <Typography
                 
                    as={Link}
                    to={`/admin/products/edit/${id}`}
                    variant="small"
                    color="blue-gray"
                    className="font-medium px-4 m-auto"
                  >
                    Edit
                  </Typography>
                  <Typography
                  onClick={()=>deleteProduct(id)}
                    as={Link}
                    variant="small"
                    color="blue-gray"
                    className="font-medium px-4 m-auto"
                  >
                    Delete
                  </Typography>
                </td>
              </tr>
            );
          })):<p>Loading...</p>}
        </tbody>
      </table>
    </Card>
  );

}
export default ProductsDashboard