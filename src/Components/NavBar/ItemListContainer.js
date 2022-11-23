import React from "react"
import { useState } from "react";
import ItemList from "../itemList";
const productos = [
    {
      id :"1",
      name : "Key",
      description : "lorem",
      stock: 10,
      img : "https://i.imgur.com/K2ITVJu.jpeg", 
    },
    {
      id :"2",
      name : "Guitar",
      description : "lorem",
      stock: 2,
      img : "https://i.imgur.com/4BvASBo.jpeg",
    },
    {
      id :"3",
      name : "Snare",
      description : "lorem",
      stock: 5,
      img : "https://i.imgur.com/XK6QMms.jpeg",
    },
  ];
  
const ItemListContainer = ({greeting}) =>{
    const {products, setProducts} = useState ([]);
    const productList = new Promise ((resolve)=>
    setTimeout(()=>{
    resolve(productos);
    }, 3000 )
    );

    productList.then ((data) => setProducts (data));
    return (<div> 
            <ItemList />
            </div>);
};

export default ItemListContainer;