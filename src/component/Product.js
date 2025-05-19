import { useRef, useState } from "react";
function Product({p}){
    const pR = useRef();
    const[price,setPrice]=useState(60);
    const [pName,changePname]=useState(p.name);

    return (
        
        <div className="col-2 card m-4">
            <img className="p-2" src={p.img}/>
            <h1>{p.name}</h1>
            <p>₹{p.price}</p>
            <input ref={pR} placeholder="enter product name" onChange={()=>changePname(pR.current.value)}/>
            <button className="btn btn-success p-2 m-4" onClick={()=>setPrice+10}>Add to cart</button>
        </div>
    )
}
export default Product;