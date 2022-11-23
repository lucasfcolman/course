import React from "react"
import { useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./itemList";
const ItemListContainer = () =>{
    return (
        <div>
            <itemList/>
            <div>
            <productList/>
            </div>
            
        </div> 
           )
}

    


export default ItemListContainer;