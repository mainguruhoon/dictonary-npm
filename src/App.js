import Product from "./component/Product";
import Products from "./model/Products";
import NavBar from "./component/Navbar";
import { useRef, useState } from "react";
import axios from "axios";


function App() {
  const url ="https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [title,setTitle]=useState("loading....");
  const [des,setDes]=useState("loading....");
  const userInput =useRef();
  const updateData =()=>{
    let mainUrl = url+userInput.current.value;

    axios.get(mainUrl)
    .then((res)=>{
      setDes (res.data[0].meanings[0].definitions[0].definition);
    }).catch((error)=>{
      console.log(error);
    });
    setTitle(userInput.current.value);
    setDes();
  }
  return(
    <div>
      <NavBar/>
    <div className='row'>
      <h1 className='text-center p-4 text-danger'><mark>Welcome to Guru ke Dukan</mark></h1>
      <div className="card">
        <h1 className="card-title text-center">{title}</h1>
        <p className="card-title text-center">{des}</p>
        <div className="row">
          <input className="col-7" placholder="enter what you want to search" ref={userInput}/>
          <button className="btn btn-success col-4 p-4"   onClick={updateData}><i className="fas fa-search p-4" ></i></button>
        </div>
      </div>
     
      </div>

    </div>
  ) 
}

export default App;
