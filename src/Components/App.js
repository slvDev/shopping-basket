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
                price: 2,
                id: 1
            },
            {
                name: "Pasts",
                count: 4,
                price: 4,
                id: 2
            },
            {
                name: "Bananas",
                count: 1,
                price: 8,
                id: 3
            }
        ]
    }

    prevProductId = 3

    handleAddProduct = (name, count, price) => {
        this.setState( prevState => {
            return {
                products: [
                    ...prevState.products,
                    {
                        name,
                        count,
                        price,
                        id: this.prevProductId +=1
                    }
                ]
            }
        })
    }

    handleClearBasket = () => {
        this.setState( () => {
            return {
                products: []
            }
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <Header />
                <ProductList products={this.state.products} />
                <Footer />
                <AddProductForm 
                    addProduct={this.handleAddProduct}
                    clearBasket={this.handleClearBasket}
                />
            </div>
        )
    }
}

export default App