import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Cardsdata from "./CardData";

const Admin = ({edititem,setEdititem,Item,setItem}) => {

   
  const editHandler=(item)=>{
   console.log(item)
  setItem(item)
  }

  return (
    <div>
      <div className="admin">Admin</div>
      <table>
        <tr>
          <th>Food Name</th>
          <th>Food Type</th>
          <th> Price</th>
          <th>Rating</th>
          <th>Qunatity</th>
          <th>Edit</th>
        </tr>
        {Cardsdata.map((item) => {
        return (
            <>
            <tr>
          <td className="row">{item.rname}</td>
          <td className="row">{item.address}</td>
          <td className="row">{item.price}</td>
          <td className="row">{item.rating}</td>
          <td className="row">{item.qnty}</td>
         <td><NavLink to="/edit" onClick={()=>editHandler(item)}>Edit</NavLink></td>
          {/* {openModal &&<Edititem setOpenModal={setOpenModal} setFlag={setFlag}/>} */}
        </tr>
        </>
        )
    })}  
      </table>
     
    </div>
  );
};

export default Admin;
