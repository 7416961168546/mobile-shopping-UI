import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Total from "./Total";
import img1 from"./images/mobile1.jpg";
import img2 from"./images/mobile2.jpg";
import img3 from"./images/mobile3.jpg";
import img4 from"./images/mobile4.jpg";

let products=[
    {
        name:"oppoA1K",
        path: img1,
        price:9000,
    },
    {
        name:"Redmi",
        path:img2,
        price:12000,
    },
    {
        name:"vivo",
        path:img3,
        price:11000,
    },
    {
        name:"iphone",
        path:img4,
        price:25000,
    },
];
function App()
{
    let [cartItems ,setCartItems]=useState(0);
    let[total,setTotal]=useState(0);
    function addToCart(){
        setCartItems(cartItems+1);
    }
    function removeFromCart(){
        setCartItems(cartItems-1)
    }
    function changeTotal(t){
        console.log(t);
        setTotal(total+t)
    }
    return(
        <>
        <Header cartItems={cartItems} />

        <main>
            { products.map((e) => (
                <Card 
                product={e}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                changeTotal={changeTotal}
                />

            ))}
        </main>
        <Total total={total} />
        </>
    );

}
export default App;