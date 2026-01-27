import React from 'react'

const Square = (props) => {
  const isX = props.value === 'X';
  
  
  return (
    <div 
      className='h-24 w-24 bg-linear-to-br from-slate-100 to-gray-200 border-4 border-white rounded-xl flex justify-center items-center cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-200 hover:from-slate-200 hover:to-gray-300'
      onClick={props.onClick}
    >
      <h5 className={`text-5xl font-bold ${
        isX ? 'text-blue-600' : 'text-red-600'
      } drop-shadow-md`}>
        {props.value}
      </h5>
    </div>
  )
}

export default Square
