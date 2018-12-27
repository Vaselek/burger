import React from 'react';
import {renderToppings} from '../Utils';

import './Meat.css';

const Meat = (props) => {
    return renderToppings('Meat', props.qty);
};

export default Meat;