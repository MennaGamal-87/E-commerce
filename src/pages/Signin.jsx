import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    checkbox,
  } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
   
 const SignIn=({setUser})=> {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [isChecked, setIsChecked] = useState(false); // State for checkbox

    const navigate=useNavigate()

    const handleLogin = (e) => {
     
        e.preventDefault();
        if (!isChecked) { // Check if checkbox is checked
          alert('You must agree to the Terms and Conditions.');
          return; // Stop further execution
        }
        axios
          .get('http://localhost:3000/users', {
            params: { email, password },
          })
          .then((response) => {
            console.log(response)
            if (response.data.length > 0) {
              setUser(response.data[0]); // Set the authenticated user
              navigate('/products'); // Redirect to home page
              
            } else {
              setError('Invalid email or password');
            }
          })
          .catch((err) => {
            setError('An error occurred. Please try again.');
          });
      };


     
    return (
      
            <Card className="w-[60%] m-auto my-5 relative top-20 text-center mb-50 p-10 bg-white" color="transparent" shadow={true}>
        <Typography variant="h4" color="blue-gray">
          Log In To Your Account
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you again! 
        </Typography>
        <form onSubmit={handleLogin} className="mt-8 mb-2 w-[80%] max-w-screen-lg sm:w-96 m-auto">
          <div className="mb-1 flex flex-col gap-6">
            
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 m-auto text-center w-[80%]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 m-auto w-[80%]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            checked={isChecked} // Bind checked state
          onChange={(e) => setIsChecked(e.target.checked)}
          />
          <Button  type="submit" className="mt-6 bg-black text-black" fullWidth>
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Create Your Account
            </Link>
          </Typography>
        </form>
      </Card>
      
       
    );
  }
  export default SignIn