import React from "react";
import { useLocation } from "react-router";
import { API } from "../config";

const PhotoLoad = ({item, url}) => (
 <div className="product-img">
    {
      useLocation().pathname === '/' ?
        <img  src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className='mb-3'
        style={{maxHeight: "200px", maxWidth: "200px", borderRadius: "50%"}}
      /> :
      <img  src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        className='mb-3'
        style={{maxHeight: "200px", maxWidth: "200px"}}
      />
    }

 </div> 
);

export default PhotoLoad;
