import React, { useState } from 'react';
import api from "./api";
/*import axios from 'axios';*/
import {Text}  from "rebass";

export default function Component() {
/* const [data, setData] = useState("");*/
  
 /*const Cmbio =()=>{axios.get('/api', {
    params: {
      id: 123,
      name: 'John Doe'
    }
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (error) {
      console.log(error);
    });}*/
    
  /*const onclick=()=>{
    api.getData().then((res)=>{
      setData(res.data);
      alert(`${JSON.stringify(data)}`);    
  })};*/

    return (
        
    <div className='head'>
      <Text color= "white" >
      WeLCOME</Text> 
        <button onClick={onclick} className="header" >Opciones</button>
    </div>


  );
}
