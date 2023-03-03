import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BeersList() {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(results => {
                setBeers(results.data)
                console.log(results.data)
            })
            .catch(err => console.log("error catch", err))
    }, [])

    return (
        <>
            <Navbar />
            <h1>BeersList!</h1>
            <div className="container">
                <div className="row">
                    {beers.map(beer => <div className="d-flex justify-content-center mb-3 mt-3">
                        <Link to={`/beers/${beer._id}`}><img className="beerListImg" src={beer.image_url} alt="beerImg" /></Link>
                        <div className="ms-5"><Link to={`/beers/${beer._id}`}><h3>{beer.name}</h3></Link>
                            <p className="mx-auto">{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </div>)}
                </div>
            </div>

        </>
    )
}