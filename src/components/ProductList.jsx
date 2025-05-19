import React from 'react'
import Product from './Product';

function ProductList() {
  return (
    <div className="products-grid">
      <Product name="Product 1" price="29.99" description="Description for Product 1" />
      <Product name="Product 2" price="39.99" description="Description for Product 2" />
      <Product name="Product 3" price="49.99" description="Description for Product 3" />
      <Product name="Product 4" price="59.99" description="Description for Product 4" />
      <Product name="Product 5" price="69.99" description="Description for Product 5" />
    </div>
  )
}

export default ProductList
