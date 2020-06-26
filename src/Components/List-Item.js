import React from 'react';

function ListItem(props) {
    return (
        <li>{props.combination.toppings} ({props.combination.count})</li>
    );
}

export default ListItem;