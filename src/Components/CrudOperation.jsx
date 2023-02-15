import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CrudOperation = () => {
    const [data,setData]=useState([]);
    const fetchApiData=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
    }
    useEffect(()=>{
        fetchApiData();
    },[])
    return (
        <div style={{display:"flex" , justifyContent:"center" }} >
            {data.map((item)=>{
                return(
                    <div  >
                        <h1>{item.title}</h1>
                        <img src={item.image} alt="" />
                        <p>{item.description}</p>
                        <h4>{item.category}</h4>
                    </div>
                )
            })}
            
        </div>
    );
};

export default CrudOperation;