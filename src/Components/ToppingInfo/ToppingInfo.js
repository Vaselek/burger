import React from 'react';

import './ToppingInfo.css';
import {Button} from 'reactstrap';

const ToppingInfo = (props) => {
    return (
        <div className="row" key={props.index}>
            <div className="col-sm-1 mb-2">
                <Button size='sm' onClick={props.onAdd}>+</Button>
            </div>
            <div className="col-sm-2">
                {props.topping.toString().charAt(0).toUpperCase() + props.topping.toString().slice(1)}
            </div>
            <div className="col-sm-1">
                x{props.qty}
            </div>
            <div className="col-sm-1">
                <Button onClick={props.onRemove}>Remove</Button>
            </div>
        </div>
    )
};

export default ToppingInfo;