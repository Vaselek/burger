import React from 'react';
import {renderToppings} from '../Utils';

import './Salad.css';

const Salad = (props) => {
    return renderToppings('Salad', props.qty);
};

export default Salad;