import React from 'react'

const Header = () => {
    return(
        <div className="mt-3 text-muted">
            <h2 className="text-uppercase text-center ">Shopping List</h2>
            <div class="row mt-4 h6 text-center border-bottom pb-3">
                <div class="col pl-5 text-left">Name</div>
                <div class="col-2">Count</div>
                <div class="col-2">Price</div>
            </div>  
        </div>
    )
}

export default Header