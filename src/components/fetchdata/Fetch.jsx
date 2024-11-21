// import React, { useEffect, useState } from 'react'

// const Fetch = ({setProducts}) => {
  
//     useEffect(()=>{
//         const fetchData = async () => {
//             const response = await fetch('https://api.escuelajs.co/api/v1/products');
//             const data = await response.json();
//          setProducts(data)
//         console.log(data)
           
         
//         }
//         fetchData()
//     },[])
//   return (

//     <div>
      
//     </div>
//   )
// }

// export default Fetch

import React, {useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setProducts

 } from '../actions/ProductAction';

 const Fetch = ()=>{
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await fetch("https://api.escuelajs.co/api/v1/products")
        const data = await response.json();
        dispatch(setProducts(data));

      }
      catch(error){
        console.log("Error fetching products", error);
      }
    }
    fetchData();
  },[dispatch])
  return(
    <div>

    </div>
  )
 }
 export default Fetch;