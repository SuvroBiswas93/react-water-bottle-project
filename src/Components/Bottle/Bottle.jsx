import './Bottle.css'
export default function Bottle({bottle, handleAddToCart}){
    const {img , name ,stock,price} = bottle
    console.log(bottle)
    return(
        <div className="bottle img">
            <img src={img} alt="" />
            <h3>Name : {name}</h3>
            <h3>Price : ${price}</h3>
            <h3>Only <b>{stock}</b> remaining</h3>
            <button onClick={()=>handleAddToCart(bottle)} className='btn'>Buy Now</button>
        </div>
    )
}