import React from 'react'
import ProductDetail from './components/ProductDetail'

function App() {
  const product = {
    name: 'Chocorramo',
    sku: 'CHR',
    description: 'Torta tradicional con cubierta de chocolate',
    imageURL:
      'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3501300-750-750/7702914596787.jpg?v=637244545407330000',
    publicURL: 'https://www.tiendasjumbo.co/ponque-chocoramo-x65g/p',
    price: 1550
  }
  return (
    <div className='conainter'>
      <ProductDetail product={product} />
    </div>
  )
}

export default App
