import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Cardloc(props) {
    const { location } = props;
    return (
        <div>
            <div className="category-episode">
                    <div className="grid">
                        <h4 className="category-title">{location.name}</h4>
                        <p className="category-episode-subtitle">{location.type}</p>
                        <p className="category-subtitle">{location.dimension}</p>
                    </div>
            </div>
        </div>
    )
}

export default Cardloc
