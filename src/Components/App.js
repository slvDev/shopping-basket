import React, { Component } from 'react'
import Header from './Header'

class App extends Component {
    state = {
        poducts: [
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
                
            </div>
        )
    }
}

export default App