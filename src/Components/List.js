import React from 'react';
import ListItem from './List-Item';

function List(props) {
    const listItems = props.combinations.map((combo, index) => {
        return (
            <ListItem
                key={index.toString()}
                toppings={combo.toppings}
                count={combo.count}
            />
        );
    });

    return (
        <ol>{listItems}</ol>
    );
}

export default List;
