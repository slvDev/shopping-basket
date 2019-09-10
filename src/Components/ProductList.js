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
                    key={p.id.toString()}
                />
            )}
        </React.Fragment>
    )
}

export default ProductList