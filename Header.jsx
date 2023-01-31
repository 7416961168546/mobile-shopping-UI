import CartIcon from "./CartIcon";

export default function Header(props)
{
    return(
        <header>
            <div className="app-name"><h1>Cart</h1></div>
            <CartIcon cartItems={props.cartItems} />
        </header>
    );
}