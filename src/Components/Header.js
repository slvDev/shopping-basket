import React from 'react'

const Header = () => {
    return(
        <div className="mt-3 text-muted">
            <h2 className="text-uppercase text-center ">Shopping Card</h2>
            <div className="row mt-4 h6 text-center border-bottom pb-3">
                <div className="col pl-4 text-left">Title</div>
                <div className="col-2">Count</div>
                <div className="col-2">Price</div>
            </div>  
        </div>
    )
}

export default Header