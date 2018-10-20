import React from 'react';

const Item = ({name, platform, url})=>{
  return (  
    <div>
      { url 
       ? (
         <div className="item">
            <img src={url} alt={name + "'s cover"} />
          </div>
         )
       : (
          <div className="item">
            <div className='item__platform'>{platform}</div>
            <div className='item__name'>
              <p>{name}</p>
            </div> 
          </div>   
       )
      }
    </div>  
  )
}

export default Item;