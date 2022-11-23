import React from "react"
import { useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer";
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
const ItemListContainer = () =>{
    return (
        <div> 
            <ItemDetailContainer/>
        </div> 
           )
}

    


export default ItemListContainer;