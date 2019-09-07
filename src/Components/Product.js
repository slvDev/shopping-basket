import React from 'react'

const Product = (props) => {
    return (
        <div class="row mt-4 h4 text-center">
            <div class="col pl-5 text-left">
                {props.name}
            </div>
            <div class="col-2">
                {props.count}
            </div>
            <div class="col-2">
                {props.price}
            </div>
        </div>        
    )
}

export default Product