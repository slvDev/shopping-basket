import React from 'react'

const Product = (props) => {
    return (
        <div className="my-3">
            <span className="h4">
                {props.name}
            </span>
        </div>
    )
}

export default Product