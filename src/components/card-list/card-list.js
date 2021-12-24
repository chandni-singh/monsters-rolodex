import React from 'react';
import '../card-list/card-list.css';

const CardList = props => (
    <div className='card-list'>
        {props.children}
    </div>
);

export default CardList;