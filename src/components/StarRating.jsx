import React from 'react'

const StarRating = ({rating,handleRating}) => {
    
    const starRating =(x)=>{
        var arr = [];
        for (let i = 1 ; i <= 5 ; i++ ){
          if (i<=x){
             arr.push(<span onClick={()=>handleRating(i)} style={{color:"gold" ,fontSize:"30px" ,cursor:"pointer"}}>★</span>)
          }
          else {
            arr.push(<span onClick={()=>handleRating(i)}  style={{color:"black" ,fontSize:"30px" ,cursor:"pointer"}}>★</span>)
          }
        }
        return arr
      }
      
  return (
    <div>
       {React.Children.toArray(starRating(rating))}
    </div>
  )
}
StarRating.defaultProps={
    handleRating:()=>{}
}
export default StarRating