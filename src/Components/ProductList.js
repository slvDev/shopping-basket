import React from 'react'
import Product from './Product'

const ProductList = (props) => {
    return(
        <React.Fragment>
            {props.products.map( p => 
                <Product 
                    name={p.name}
                    count={p.count}
                    price={p.price}
                />
            )}
        </React.Fragment>
    )
}

export default ProductList