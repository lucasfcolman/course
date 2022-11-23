import { useState } from "react";

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
  
const ItemDetailContainer = () =>{
    const {products, setProducts} = useState ([]);
    const productList = new Promise ((resolve)=>
    setTimeout(()=>{
    resolve(products);
    }, 3000 )
    );

    productList.then ((data) => setProducts (data));
    return (<div> 
            <ItemList />
            </div>);
};


    const info = () =>{
        const [showInfo, setShowInfo] = useState (true);
        const hideOrShowInfo = () => {
            setShowInfo (!showInfo);
        };
        return  (
            <main>
                <div>
                <button onClick={hideOrShowInfo}>
                    {showInfo ? "Ocultar" : "Mostrar"} info
                </button>
                </div>
                 </main>
        )
    }




    export default ItemDetailContainer;