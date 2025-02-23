import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";
   
  export function ProductCard({product,addToCart,productDescribtion,productPrice,productImage,index,productTitle,productId}) {
    return (
      <Card key={index} className="w-78 mb-4 hover:scale-120 hover:z-20 hover:bg-cyan-950 transition duration-1000 hover:text-white">
         <Link to={`/products/${productId}`}>
         <CardHeader shadow={true} floated={false} className="h-55">
          <img
            src={productImage}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between ">
            <Typography color="blue-gray" className="font-medium ">
            {productTitle}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              ${productPrice}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 hover:text-amber-50"
          >
            {productDescribtion}
          </Typography>
        </CardBody></Link>
      
        <CardFooter className="pt-0">
          <Button
          onClick={()=>addToCart(product)}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 hover:bg-cyan-600 text-blue-900"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }