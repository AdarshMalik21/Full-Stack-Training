import Data from '../data/Data'
import Card from './Card'

const Product = () => {
    const products = Data.products || [];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((p) => (
          <Card key={p.id} product={p} />
      ))}
      
      
    </div>
  )
}

export default Product
