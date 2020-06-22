import React, {useEffect, useState} from 'react';
import axios from 'axios';


function Cardspec(props) {
    const { episode } = props;
    return (
        <div>
            <div className="category-episode">
                    <div className="grid">
                        <h4 className="category-title">{episode.name}</h4>
                        <p className="category-episode-subtitle">{episode.episode}</p>
                        <p className="category-subtitle">{episode.air_date}</p>
                    </div>
            </div>
        </div>
    )
}

export default Cardspec
