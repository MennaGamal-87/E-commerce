import { Button, Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";

 
const TABLE_HEAD = ["ID","Name", "Email", "Phone Number", 'Role'];
 

 
const UsersDashboard=()=> {
    const[users,setUsers]=useState(null);
        useEffect(() => {

            
           fetch('http://localhost:3000/users')
           .then((data)=>{
               return data.json();
           }).then(res=>{
               console.log(res)
               setUsers(res)
           })
         }, []);

         const changeUserRole =  (userId, newRole) => {
            try {
           
              axios({
                method:'post',
                url:`http://localhost:3000/users/${userId}`,
                Role: newRole,
              })
        
            
              setUsers((prevUsers) =>
                prevUsers.map((user) =>
                  user.id === userId ? { ...user, Role: newRole } : user
                )
              );
            } catch (error) {
              console.error("Error changing role:", error);
              alert("Failed to change role. Please try again.");
            }
          };



         const makeAdmin = (userId) => {
            changeUserRole(userId, "admin");
          };
        
          const removeAdmin = (userId) => {
            changeUserRole(userId, "user");
          };
     
  return (
    <Card className="relative top-15 w-[80%] m-auto ">
      <table className=" w-full min-w-max table-auto text-left">
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
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users !=null && users.length > 0 ? (
          users.map(({id, username, email, phone,Role }, index) => {
            const isLast = index === users.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 

          




            const isAdmin = Role === 'admin';
           
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
                    {username}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {email}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                  {phone}
                  </Typography>
                </td>
                <td className={`${classes} flex`}>


                    {isAdmin?(
                         <Typography
                         onClick={()=>removeAdmin(id)}
                         as={Button} 
                       
                          variant="small"
                          color="blue-gray"
                          className="font-medium px-4"
                        >
                         Remove admin
                          
                        </Typography>
                    ):(
                        <Typography
                        onClick={()=>makeAdmin(id)}
                        as={Button} 
                       
                         variant="small"
                         color="blue-gray"
                         className="font-medium px-4"
                       >
                        make admin
                         
                       </Typography>
                    )}





                 
                 
                </td>
              </tr>
            );
          })): <p>Loading...</p>}
        </tbody>
      </table>
    </Card>
  );

}
export default UsersDashboard