import { use, useState } from "react"
import Bottle from "../Bottle/Bottle"
import './Bottles.css'


export default function Bottles({fetchPromise}){
    const [cart , setCart] = useState([])

    const handleAddToCart = (bottle) =>{
        const newCart = [...cart ,bottle]
        setCart(newCart)
    }

    // console.log(fetchPromise)
    const bottles = use(fetchPromise)
    return(
        <div>
            <h3>Bottles :{bottles.length}</h3>
            <h3>Added Product to cart : {cart.length}</h3>
           
           <div className="bottles">
                 {
                    bottles.map((bottle,id) =><Bottle 
                    key={id}
                    handleAddToCart={handleAddToCart} 
                    bottle={bottle}></Bottle>)
                 }
           
           </div>
        </div>
    )
}