import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Card(props) {
    const { item } = props;
    return (
        <div>
            <div className="category-cont">
                    <div className="grid">
                        <img src={item.image} />
                        <h4 className="category-title">{item.name}</h4>
                        <p className="category-subtitle">{item.species}</p>
                    </div>
            </div>
        </div>
    )
}

export default Card

