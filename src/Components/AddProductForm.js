import React from 'react'

const AddProductForm = (props) => {
    const productInput = React.createRef()
    const countInput = React.createRef()
    const priceInput = React.createRef()

    const handleAddProduct = () => {
        props.addProduct(productInput.current.value,
                        countInput.current.value,
                        priceInput.current.value)
        productInput.current.value = null
        countInput.current.value = null
        priceInput.current.value = null
    }

    return (
        <div className="form-row">
            <div className="col">
                <input type="text" ref={productInput} className="form-control" placeholder="Product Title" aria-describedby="button-addon2" />  
            </div>
            <div className="col-2">
                <input type="text" ref={countInput} className="form-control" placeholder="Amount" aria-describedby="button-addon2" />
            </div>
            <div className="col-2 mb-2">
                <input type="text" ref={priceInput} className="form-control" placeholder="Price" aria-describedby="button-addon2" />
            </div>

            <button className="mx-1 btn btn-outline-success btn-block" onClick={handleAddProduct} id="button-addon2">Add to List</button>
            <button className="mx-1 btn btn-outline-warning btn-block" onClick={props.clearBasket} id="button-addon2">Clear List</button>
        </div>
    )
}

export default AddProductForm