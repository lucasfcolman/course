import React from "react"
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {productList} from './Mock'
const ItemListContainer = () =>{
    const[products, setproducts]= useState([])
    useEffect(()=>{
        productList
        .then((res)=> setproducts(res))
    }, [])
    return (
        <div>
            <ItemList products={products}/>
        </div> 
           )
}
export default ItemListContainer;


  