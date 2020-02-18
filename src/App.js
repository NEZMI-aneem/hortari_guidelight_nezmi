
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import producTile from './components/producTile';
const productArray=[
    {
        "id":1,
        "title":"lenovo",
        "price":"Rs.30,000"
    },
    {"id":2,
    "title":"Hp",
    "price":"Rs.28,000"

    },
    {
        "id":3,
    "title":"acer",
    "price":"Rs.32,000"
    }
]

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstState: 'hello world',
            cartCount: 0,
            products:[
                
            ],
            cart: []

        }
    }
        


    componentDidMount(){
        this.loadProduct( )
        this.initCart();
    }
    initCart()
    {
        let mycart =localStorage.getItem('cart')
        mycart=JSON.parse(mycart)
        this.setState({
            cart:mycart || []
        })
    }
    componentDidUpdate(prevProps,prevState)
    {
        if(this.state.cartCount>=10)
        alert('count exceeded!!')
    }

    addtocart(products){
       const newCart = this.state.cart;
       newCart.push(products)

       localStorage.setItem('cart',JSON.stringify(newCart))
        this.setState({
            cart: newCart
        })
    }
    loadProduct(){
        fetch('https://my-json-server.typicode.com/shiyasvp92/sample_products/products',{
            method: 'GET'
        })
        .then((response)=> {
            return response.json()
        })
        .then((data)=>{
            console.log(data)
            this.setState({
                products:data
            })
        })
        .catch((error)=> {
            console.error(error)
        
    })
    }
    viewCart()
    {
        console.log(this.state.cart)
    }
 render() {
     const productsList =this.state.products.map((products)=>{
         return producTile(this.addtocart.bind(this),products)
     })
     console.log(productsList)
    return (
   
        <div className="container">
          <nav className="navbar navbar-light" style={{"backgroundColor": "red"}}>
    }

    <img src="download.jpg." width="70" height="150" className="d-inline-block align-top" alt=""/>
    {this.state.firstState}
    
    <p align="right">
        <button type="button" className="btn btn-warning" onClick={()=>{
            this.viewCart();
        }}>Cart{this.state.cartCount}</button>
    </p>
    </nav>
            <div className="row">
                {productsList}
                
                </div>
                
            <p align="right">
              <button type="button" className="btn btn-primary btn-lg">Checkout</button></p>
    
    </div>
    
    
    
      );

}




}


export default App;
