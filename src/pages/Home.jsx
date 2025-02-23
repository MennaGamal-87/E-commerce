import { Link } from "react-router-dom";


const Home=()=>{
    return(
        <>
       
<div classNameName="relative top-8 overflow-hidden bg-white">
 
  <div aria-hidden="true" className="absolute inset-0 p-10">
    <div className="absolute inset-0 mx-auto max-w-7xl overflow-hidden xl:px-8">
      <img  alt="" className="h-full w-full object-cover object-center"/>
    </div>
    <div className="absolute inset-0 bg-white bg-opacity-75"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
  </div>

  
  <section aria-labelledby="sale-heading" className="relative mx-auto  flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-8 py-30 pt-60">
    <div className="mx-auto max-w-2xl lg:max-w-none">
      <h2 id="sale-heading" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Get 25% off during our one-time sale</h2>
      <p className="mx-auto mt-4 max-w-xl text-xl text-gray-600">Most of our products are limited releases that won't come back. Get your favorite items while they're in stock.</p>
      <Link to="/products" className="mt-6 inline-block w-full rounded-md border border-transparent bg-gray-900 px-8 py-3 font-medium text-white hover:bg-cyan-800 sm:w-auto">Get access to our one-time sale</Link>
    </div>
  </section>

 
  
</div>

        </>
    )
}
export default Home;