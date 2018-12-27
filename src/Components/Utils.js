import React from 'react';

export function renderToppings(type, qty) {
    let toppings = [];
    for (let i = 0; i < qty; i++) {
        toppings.push(<div className={type}></div>);
    }
    return toppings;
};