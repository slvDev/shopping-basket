import React, { Component } from 'react'
import Header from './Header'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'
import Footer from './Footer'

class App extends Component {
    state = {
        products: [
            {
                name: "Potato",
                count: 2,
                price: 2
            },
            {
                name: "Pasts",
                count: 4,
                price: 4
            },
            {
                name: "Bananas",
                count: 1,
                price: 8
            }
        ]
    }

    render() {
        return (
            <div className="container mt-5">
                <Header />
                <ProductList products={this.state.products} />
                <Footer />
                <AddProductForm />
            </div>
        )
    }
}

export default App