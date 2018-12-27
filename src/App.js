import React, { Component } from 'react';
import './App.css';
import Burger from './Components/Burger/Burger';
import ToppingInfo from './Components/ToppingInfo/ToppingInfo';


class App extends Component {
  state = {
    toppings: {
      cheese: {qty: 0, price: 20},
      salad: {qty: 0, price: 5},
      meat: {qty: 0, price: 50},
      bacon: {qty: 0, price: 30}
    },
  };

  addTopping = (topping) => {
      let toppings = {...this.state.toppings};
      toppings[topping].qty++;
      this.setState({toppings});
  };

  removeTopping = (topping) => {
      let toppings = {...this.state.toppings};
      if (toppings[topping].qty !== 0) toppings[topping].qty--;
      this.setState({toppings});
  };

  calcutalePrice = () => {
      let price = 20;
      for(let topping in this.state.toppings) {
          price += this.state.toppings[topping].qty*this.state.toppings[topping].price;
      }
      return price;
  };

  render() {
    const toppings = Object.keys(this.state.toppings).map((topping, index) => {
        return <ToppingInfo topping={topping}
                            qty={this.state.toppings[topping].qty}
                            index={index}
                            onAdd={()=>this.addTopping(topping)}
                            onRemove={()=>this.removeTopping(topping)}
        />
    });
    return (
      <div className="App">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-6">
                      <h3>Ingredients</h3>
                      {toppings}
                  </div>
                  <div className="col-sm-6">
                      <Burger toppings={this.state.toppings}/>
                      <div style={{'text-align': 'center'}}>Price: {this.calcutalePrice()}</div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
