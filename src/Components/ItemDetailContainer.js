import {productList}from './Mock'
import React,{useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {
    const [itemDetalle, setItemDetalle]= useState({})
    useEffect(()=>{
        productList
        .then((res)=> setItemDetalle(res.find((prod)=> prod.id === "3")))
    },[])
    return(
       <>
       <ItemDetail itemDetalle={itemDetalle}/>
       </>
    )
}

export default ItemDetailContainer

/*     const info = () =>{
        const [showInfo, setShowInfo] = useState (true);
        const hideOrShowInfo = () => {
            setShowInfo (!showInfo);
        };
        return  (
                <div>
                <main>{showInfo && <Body/>}</main>
                <button onClick={hideOrShowInfo}>
                    {showInfo ? "Ocultar" : "Mostrar"} info
                </button>
                </div>
                
        );
    };
 */



