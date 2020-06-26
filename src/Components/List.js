import React from 'react';
import ListItem from './List-Item';

function List(props) {
    const topCombinations = props.combinations;

    const listItems = topCombinations.map((combo) => {
        let idx = topCombinations.indexOf(combo)
        ,   key = idx.toString()
        ,   rank = (++idx).toString();
        
        return (
            <ListItem key={key} rank={rank} combination={combo}/>
        );
    });

    return (
        <ol>{listItems}</ol>
    );
}

export default List;
