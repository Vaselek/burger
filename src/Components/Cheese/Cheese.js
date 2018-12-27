import React from 'react';
import {renderToppings} from '../Utils';

import './Cheese.css';

const Cheese = (props) => {
    return renderToppings('Cheese', props.qty);
};

export default Cheese;