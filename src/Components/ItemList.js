import Item from "./item"

const ItemList = () =>{
    return(
        <ul>
    {products.map ((product)=> (
    <Item product={product}/>
    ))}
    
       </ul>
    );
};

export default ItemList;