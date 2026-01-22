import { useState } from 'react'
import Card from './components/Card'
import { useEffect } from 'react';

function App() {
  
  const [products, setProducts] = useState([]);
  const [selectedCount, setSelectedCount] = useState(2);
  async function fetchData(){
    try{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
    // console.log(data)
    }
    catch(error){
      console.log("Api response failed",error);
    }
  }
useEffect(()=>{
  fetchData();
},[]);

  return (
    <>
      <div className='bg-blue-300 h-20'>
        <h4 className='text-2xl flex items-center justify-center'>Choose here</h4>
        <div className='flex justify-center items-center'>
        <select onChange = {(e) => setSelectedCount(Number(e.target.value))} className='p-2 rounded'>
          <option value="2">Two Items</option>
          <option value="4">Four Items</option>
          <option value="10">Ten Items</option>
          <option value="5">Five Items</option>
        </select>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {products.length > 0 ? 
          products.slice(0, selectedCount).map((element) => (
            <Card key={element.id} element={element} />
          )
        ) : (
          <p className="text-center mt-10">Loading products...</p>
        )}
      </div>
      
      
    </>
  )
}

export default App
