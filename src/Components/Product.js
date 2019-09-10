import React from 'react'

const Product = (props) => {
    const {
        name,
        count,
        price,
        id, 
        deleteProduct } = props
    return (
        <div className="row my-4 h4 text-center">
            <div className="col-1 pl-4">
                <button className="btn btn-outline-danger btn-sm" onClick={ () => deleteProduct(id)}>del</button>
            </div>
            <div className="col ml-2 text-left">
                {name}
            </div>
            <div className="col-2">
                {count}
            </div>
            <div className="col-2">
                {price}
            </div>
        </div>        
    )
}

export default Product