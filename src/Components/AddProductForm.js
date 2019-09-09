import React from 'react'

const AddProductForm = () => {
    return (
        // <div className="container-fluid border">
        //     <div className="row mt-3 h4 text-center input-group border">
        //         <div className="col">
        //             <input type="text" className="form-control" placeholder="Add Product" aria-describedby="button-addon2" />
        //         </div>
        //         <div className="col-2">
        //             <input type="text" className="form-control" placeholder="Add Count" aria-describedby="button-addon2" />
        //         </div>
        //         <div className="col-2">
        //             <input type="text" className="form-control" placeholder="Add Price" aria-describedby="button-addon2" />
        //         </div>
        //     </div>
        //     <button className="mt-0 btn btn-outline-secondary btn-block" type="submit" id="button-addon2">Add to List</button>
        // </div>
        <div className="row">
            <div className="col">
                <input type="text" className="form-control" placeholder="Product Title" aria-describedby="button-addon2" />  
            </div>
            <div className="col-2">
                <input type="text" className="form-control" placeholder="Count" aria-describedby="button-addon2" />
            </div>
            <div className="col-2 mb-1">
                <input type="text" className="form-control" placeholder="Price" aria-describedby="button-addon2" />
            </div>

            <button className="mb-1 btn btn-outline-success btn-block" type="submit" id="button-addon2">Add to List</button>
            <button className="btn btn-outline-warning btn-block" type="submit" id="button-addon2">Clear List</button>
        </div>
    )
}

export default AddProductForm