import React from 'react'

const AddProductForm = () => {
    return (
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="Product Title" aria-describedby="button-addon2" />  
            </div>
            <div className="col-2">
                <input type="text" className="form-control" placeholder="Count" aria-describedby="button-addon2" />
            </div>
            <div className="col-2 mb-2">
                <input type="text" className="form-control" placeholder="Price" aria-describedby="button-addon2" />
            </div>

            <button className="mx-3 btn btn-outline-success btn-block" type="submit" id="button-addon2">Add to List</button>
            <button className="mx-3 btn btn-outline-warning btn-block" type="submit" id="button-addon2">Clear List</button>
        </div>
    )
}

export default AddProductForm