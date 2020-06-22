import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from  '../components/Card';
import Cardspec from '../components/Cardspec';

function Episodes() {

    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        getEpisodes();
      }, []);

    const getEpisodes = async () => {
        try {
            let {data} = await axios.get("https://rickandmortyapi.com/api/episode/", {});
            console.log("data", data)
            setEpisode(data.results);
        } catch (error) {
            console.log ("error", error);
        }
    };

    return (
        <div className="category-episode">
            {episode.map(episode => <Cardspec key={episode.id} episode={episode} /> )}                    
        </div>

        

    );
}

export default Episodes;