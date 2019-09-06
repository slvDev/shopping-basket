import React, { Component } from 'react'
import Header from './Header'
import ProductList from './ProductList'

class App extends Component {
    state = {
        products: [
            {
                name: "Potato",
                count: 2
            },
            {
                name: "Pasts",
                count: 4
            },
            {
                name: "Bananas",
                count: 1
            }
        ]
    }

    render() {
        return (
            <div className="container border text-center mt-5">
                <Header />
                <ProductList products={this.state.products} />
            </div>
        )
    }
}

export default App