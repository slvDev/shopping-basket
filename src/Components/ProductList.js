import React from 'react'
import Product from './Product'
import BlankProduct from './BlankProduct'

const ProductList = (props) => {
    const isFull = props.products.length
    return(
        <React.Fragment>
            {isFull 
                ? props.products.map( product => 
                    <Product 
                        key={product.id.toString()}
                        name={product.name}
                        count={product.count}
                        price={product.price}
                        id={product.id}
                        deleteProduct={props.deleteProduct}
                    />)
                : <BlankProduct />
            }            
        </React.Fragment>
    )
}

export default ProductList