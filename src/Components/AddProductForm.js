import React from 'react'

const AddProductForm = (props) => {
    const productInput = React.createRef()
    const countInput = React.createRef()
    const priceInput = React.createRef()

    const handleAddProduct = (e) => {
        e.preventDefault()
        props.addProduct(productInput.current.value,
                        countInput.current.value,
                        priceInput.current.value)
        e.currentTarget.reset()
        console.log(e.currentTarget)
    }

    return (
        <form onSubmit={handleAddProduct}>
            <div className="form-row">
                <div className="col">
                    <input type="text" ref={productInput} className="form-control" placeholder="Product Title" aria-describedby="button-addon2" />  
                </div>
                <div className="col-2">
                    <input type="text" ref={countInput} className="form-control" placeholder="Count" aria-describedby="button-addon2" />
                </div>
                <div className="col-2 mb-2">
                    <input type="text" ref={priceInput} className="form-control" placeholder="Price" aria-describedby="button-addon2" />
                </div>

                <button className="mx-1 btn btn-outline-success btn-block" type="submit" name="button" value="add" id="button-addon2">Add to List</button>
                <button className="mx-1 btn btn-outline-warning btn-block" type="submit" name="button" value="delete" id="button-addon2">Clear List</button>
            </div>
        </form>
    )
}

export default AddProductForm