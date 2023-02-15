import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ZIshan = () => {
    const [elem,setElem]=useState([]);

    const getApiData=async()=>{
        const res=await axios.get("https://fakestoreapi.com/products");
        setElem(res.data);
        console.log(res.data);
    }
    useEffect=(()=>{
        getApiData();
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ZIshan;