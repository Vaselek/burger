import React from 'react';
import {renderToppings} from '../Utils';

import './Bacon.css';

const Bacon = (props) => {
    return renderToppings('Bacon', props.qty);
};

export default Bacon;