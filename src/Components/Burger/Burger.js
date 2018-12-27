import React from 'react';
import Salad from '../../Components/Salad/Salad';
import Meat from '../../Components/Meat/Meat';
import Cheese from '../../Components/Cheese/Cheese';
import Bacon from '../../Components/Bacon/Bacon';

import './Burger.css';

const Burger = (props) => (
    <div className="Burger">
        <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
        </div>
        <Salad qty={props.toppings.salad.qty}/>
        <Cheese qty={props.toppings.cheese.qty}/>
        <Meat qty={props.toppings.meat.qty}/>
        <Bacon qty={props.toppings.bacon.qty}/>
        <div className="BreadBottom"></div>
    </div>);

export default Burger;