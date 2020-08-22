import React from 'react'

const ProductDetail = ({ product }) => {
  return (
    <div className='card shadow mb-4 border-left-primary'>
      <div className='card-header py-3'>
        <h2 className='text-primary'>Detalle Producto: {product.name}</h2>
      </div>

      <div className='card-body'>
        <div className='row'>
          <div className='col-md-3 mb-4'>
            <img
              className='img-thumbnail rounded '
              src={product.imageURL}
              alt={`Imagen ${product.name}`}
            />
          </div>
          <div className='col-md-9'>
            <div className='table-responsive'>
              <table className='table'>
                <tbody>
                  <tr className='d-flex'>
                    <th className='col-lg-3'>Referencia (SKU)</th>
                    <td className='col-lg'>{product.sku}</td>
                  </tr>
                  <tr className='d-flex'>
                    <th className='col-lg-3'>Descripción</th>
                    <td className='col-lg'>{product.description}</td>
                  </tr>
                  <tr className='d-flex'>
                    <th className='col-lg-3'>URL Pública</th>
                    <td className='col-lg'>
                      <a href={product.publicURL} target='_BLANK'>
                        {product.publicURL}
                      </a>
                    </td>
                  </tr>

                  <tr className='d-flex'>
                    <th className='col-lg-3'>Peso(kg)</th>
                    <td className='col-lg'>{product.weight}</td>
                  </tr>
                  <tr className='d-flex'>
                    <th className='col-lg-3'>Dimensiones</th>
                    <td className='col-lg'>
                      {product.height} (Alto) x {product.width} (Ancho) x{' '}
                      {product.lenght} (Largo)
                    </td>
                  </tr>
                  <tr className='d-flex'>
                    <th className='col-lg-3'>Stock</th>
                    <td className='col-lg'>{product.stock}</td>
                  </tr>
                  <tr className='d-flex'>
                    <th className='col-lg-3'>Precio</th>
                    <td className='col-lg'>{product.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
