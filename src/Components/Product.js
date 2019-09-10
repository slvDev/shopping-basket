import React from 'react'

const Product = (props) => {
    return (
        <div className="row my-4 h4 text-center">
            <div className="col pl-4 text-left">
                {props.name}
            </div>
            <div className="col-2">
                {props.count}
            </div>
            <div className="col-2">
                {props.price}
            </div>
        </div>        
    )
}

export default Product