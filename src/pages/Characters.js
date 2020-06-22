import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from  '../components/Card';

function Characters() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        getCharacter();
      }, []);

    const getCharacter = async () => {
        try {
            let {data} = await axios.get("https://rickandmortyapi.com/api/character/", {});
            console.log("data", data)
            setPeople(data.results);
        } catch (error) {
            console.log ("error", error);
        }
    };

    return (
        <div className="category-cont">
            {people.map(item => <Card key={item.id} item={item} /> )}                    
        </div>

        

    );
}

export default Characters;
