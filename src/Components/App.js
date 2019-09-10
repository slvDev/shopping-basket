import React, { Component } from 'react'
import Header from './Header'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'
import Footer from './Footer'

class App extends Component {
    state = {
        products: []
    }

    prevProductId = 0

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

    handleDeleteProduct = (id) => {
        console.log(id)
        this.setState( prevState => {
            return {
                products: prevState.products.filter( p => p.id !== id)
            }
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <Header />
                <ProductList 
                    products={this.state.products}
                    deleteProduct={this.handleDeleteProduct}
                />
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