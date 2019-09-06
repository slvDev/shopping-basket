import React from 'react'
import Product from './Product'

const ProductList = (props) => {
    return(
        <React.Fragment>
            {props.products.map( p => 
                <Product 
                    name={p.name}
                />
            )}
        </React.Fragment>
    )
}

export default ProductList