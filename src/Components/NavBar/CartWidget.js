import icon from "./icon/Icon-notepad.svg"
const CartWidget = () => {
    return( 
        <button>
        <img src={icon} alt='carrito'/>
        </button> 
    );
};

export default CartWidget;