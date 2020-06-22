import React, {useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";



function Categories() {
      const history = useHistory();

    useEffect( () => {}, []);

    const getPeople = async () => {
        try {
            let {data} = await axios.get("https://swapi.dev/api/people/", {});
            console.log ("data", data);
        } catch (error) {
            console.log ("error", error);
        }
    };
    
    return (
        <div>
            <div className="category-cont">
                <div className="row-1">
                    <div>
                        <Link className="category-image" to="../People">
                            <img src="https://www.itl.cat/pngfile/big/86-869349_rick-and-morty-iphone-7-wallpaper-2019-cute.jpg" height="500" width="400" alt={"character"} className="single-category"/>
                            <h2 className="category-title" onClick={getPeople}>CHARACTERS</h2>
                        </Link>
                    </div>

                    <div>
                        <Link className="category-image" to="../Films">
                            <img src="https://iphone-wallpaper.pics/wallpaper/i/p/iphone-wallpaper-rick-and-morty3_90c952e13c3295ba981a08eaf1244dd3_raw.jpg" height="500" width="400" alt={"character"} className="single-category"/>
                            <h2 className="category-title">LOCATION</h2>
                        </Link>
                    </div>

                    <div>
                        <Link className="category-image" to="../Species">
                            <img src="https://www.jakpost.travel/wimages/large/0-8041_download-rick-and-morty-pc.jpg" height="500" width="400" alt={"character"} className="single-category"/>
                            <h2 className="category-title">EPISODE</h2> 
                        </Link>
                    </div> 
                           
                </div>             
            </div>
        </div>
    )
}


export default Categories;
