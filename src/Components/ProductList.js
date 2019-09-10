import React from 'react'
import Product from './Product'

const ProductList = (props) => {
    return(
        <React.Fragment>
            {props.products.map( (product, index) => 
                <Product 
                    key={product.id.toString()}
                    name={product.name}
                    count={product.count}
                    price={product.price}
                    id={product.id}
                    deleteProduct={props.deleteProduct}
                />
            )}
        </React.Fragment>
    )
}

export default ProductList