import React from 'react'

const Card = ({element}) => {
    const {title,price,image} = element
  return (
    <div className='hover:bg-amber-100 p-4 shadow'>
      <img
      src={image} alt = {title}/>
      <h2 className="font-bold mt-2 text-sm">
        {title}
      </h2>

      <p className="text-green-600 font-semibold">
        ₹ {price}
      </p>
    </div>
  )
}

export default Card
