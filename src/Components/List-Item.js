import React from 'react';

function ListItem(props) {
    return (
        <li>{props.toppings} ({props.count})</li>
    );
}

export default ListItem;