import { useState } from "react";

    productList.then ((data) => setProducts (data));
    return (<div> 
            <ItemDetailContainer/>
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