import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from  '../components/Card';
import Cardspec from '../components/Cardspec';
import Cardloc from '../components/Cardloc';

function Locations() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        getLocations();
      }, []);

    const getLocations = async () => {
        try {
            let {data} = await axios.get("https://rickandmortyapi.com/api/location/", {});
            console.log("data", data)
            setLocation(data.results);
        } catch (error) {
            console.log ("error", error);
        }
    };

    return (
        <div className="category-episode">
            {location.map(location => <Cardloc key={location.id} location={location} /> )}                    
        </div>

        

    );
}

export default Locations;
