import React from "react";
import producTile from '../components/producTile';
export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cart: []

        }
    }
    initCart()
    {
        let mycart =localStorage.getItem('cart')
        mycart=JSON.parse(mycart)
        this.setState({
            cart:mycart || []
        })
    }
    componentDidMount()
    {
        this.initCart();
    }
    clearcart(){
        localStorage.setItem('cart',JSON.stringify([]))
        this.setState({
            cart: []
        })
    }
    removeFromCart(product){
        const myCart =this.state.cart.slice();
        const removeProductIndex =myCart.findIndex((cartItem)=>product.id===cartItem.id)
        myCart.splice(removeProductIndex,1);



        localStorage.setItem('cart',JSON.stringify([]))
        this.setState({
            cart:myCart
        })
    }

    render()
    { 
        const productsList =this.state.cart.map((products)=>{
        return producTile(null,products,this.removeFromCart.bind(this))
    })


       
        return(
        
           
   
   <div className="container">
     <nav className="navbar navbar-light" style={{"backgroundColor": "red"}}>
}

<img src="download.jpg." width="70" height="150" className="d-inline-block align-top" alt=""/>



<p align="right">
        <button type="button" className="btn btn-warning" onClick={()=>{
            this.clearcart();
        }}>Clear cart</button>
    </p>

</nav>
{productsList}
       <div className="row">
         
           
           </div>
           
     
</div>



 
        )
    }
}