import React from 'react'

const AddProductForm = () => {
    return (
        <div className="input-group mb-3">
            <input type="text" class="form-control" placeholder="Add Product" aria-describedby="button-addon2" />
            <input type="text" class="form-control" placeholder="Add Count" aria-describedby="button-addon2" />
            <input type="text" class="form-control" placeholder="Add Price" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add to List</button>
            </div>
        </div>
    )
}

export default AddProductForm