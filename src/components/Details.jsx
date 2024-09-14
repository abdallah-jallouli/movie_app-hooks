import React from 'react'
import { useParams } from 'react-router-dom'
import StarRating from './StarRating';

const Details = ({data}) => {
    const {id} = useParams();
    // console.log(id)
    const item = data.find(el=>el.id == id);
    // console.log(item)
  return (
    <div>
        <h1>{item.name}</h1>
        <img src={item.image} alt="" />
        <h4>{item.date}</h4>
        <StarRating rating={item.rating}/>
    </div>
  )
}

export default Details