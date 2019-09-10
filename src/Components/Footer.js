import React from 'react'

const Footer = (props) => {
    let totalPrice = props.products.reduce( (total, product) => {
        return total + product.count * product.price
    }, 0)

    return (
        <div className="row border-top py-3 text-muted">
            <div className="col text-right">
                <h4 className="mr-2">Total Price: {totalPrice}</h4>
            </div>
        </div>
    )
}

export default Footer