import React from 'react';
import "./fefalist.scss"

export default function Fefalist({title,id,active,setselected}){
  return (
    <li className={active ? "fefalist active" :"fefalist"} onClick={() => setselected(id)}>
      {title}
    </li>
  );
}

 
