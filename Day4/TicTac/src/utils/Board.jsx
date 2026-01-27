import React, { useState } from 'react'
import Square from '../components/Square'

const Board = () => {
    const [state,setstate] = useState(Array(9).fill(null))
    const [isXTurn, setisXTurn] = useState(true)

    const checkWinner = ()=>{
        const winnerList =[[0,1,2],
                            [3,4,5],
                            [6,7,8],
                            [0,3,6],
                            [1,4,7],
                            [2,5,8],
                            [0,4,8],
                            [2,4,6],
    ]
    for(let logic of winnerList){
        const [a,b,c] = logic;
        if(state[a] != null  && state[a] === state[b] && state[a] === state[c]){
            return state[a];
        }
        
    }
    return false;
    }
    
    const checkDraw = () => {
        
        return state.every(square => square !== null) && !checkWinner();
    }
    
    const isWinner = checkWinner();
    const isDraw = checkDraw();

    const handleClick = (index) =>{
        if(state[index] != null){
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn? "X":"0";
        setstate(copyState)
        setisXTurn(!isXTurn);
    }
    const handleReset =() =>{
        setstate(Array(9).fill(null));
    }
  return (
    <div className='min-h-screen bg-linear-to-br from-purple-600 via-pink-500 to-blue-500 flex flex-col justify-center items-center p-6'>
      {isWinner ? (
        <div className='text-center'>
          <div className='mb-8 animate-bounce'>
            <h1 className='text-5xl font-bold text-blue-600 mb-4 drop-shadow-lg'>
              🎉 {isWinner} Won! 🎉
            </h1>
            <p className='text-xl text-white font-semibold mb-8'>Congratulations!</p>
          </div>
          <button 
            onClick={handleReset}
            className='px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-yellow-300 hover:scale-110 transform transition duration-300 shadow-lg'
          >
            🔄 Play Again
          </button>
        </div>
      ) : isDraw ? (
        <div className='text-center'>
          <div className='mb-8 animate-bounce'>
            <h1 className='text-5xl font-bold text-white mb-4 drop-shadow-lg'>
              🤝 It's a Draw! 🤝
            </h1>
            <p className='text-xl text-white font-semibold mb-8'>Great Game! Both Players Played Well!</p>
          </div>
          <button 
            onClick={handleReset}
            className='px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-yellow-300 hover:scale-110 transform transition duration-300 shadow-lg'
          >
            🔄 Play Again
          </button>
        </div>
      ) : (
        <div className='text-center'>
          <h1 className='text-5xl font-bold text-white mb-2 drop-shadow-lg'>Tic Tac Toe</h1>
          <div className='h-1 w-32 bg-white mx-auto mb-8 rounded-full'></div>
          
          <div className='bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 shadow-2xl'>
            <div className='mb-8'>
              <p className='text-2xl font-bold text-black'>
                Player <span className={isXTurn ? 'text-cyan-600' : 'text-red-600'}>{isXTurn ? "X" : "O"}</span> Turn
              </p>
            </div>
            
            <div className='bg-black bg-opacity-30 rounded-xl p-4 shadow-inner'>
              <div className='flex flex-row gap-2 mb-2'>
                <Square onClick={() => handleClick(0)} value={state[0]} />
                <Square onClick={() => handleClick(1)} value={state[1]} />
                <Square onClick={() => handleClick(2)} value={state[2]} />
              </div>
              <div className='flex flex-row gap-2 mb-2'>
                <Square onClick={() => handleClick(3)} value={state[3]} />
                <Square onClick={() => handleClick(4)} value={state[4]} />
                <Square onClick={() => handleClick(5)} value={state[5]} />
              </div>
              <div className='flex flex-row gap-2'>
                <Square onClick={() => handleClick(6)} value={state[6]} />
                <Square onClick={() => handleClick(7)} value={state[7]} />
                <Square onClick={() => handleClick(8)} value={state[8]} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
    
  )
}

export default Board
