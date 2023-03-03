import Navbar from "../components/Navbar";
import BeerCard from "../components/BeerCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BeerRandom() {

    const [random, setRandom] = useState({})

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(result => setRandom(result.data))
            .catch(err => console.log("error en random: ", err))
    }, [])

    return (
        <>
            <Navbar />
            <h1>BeerRandom!</h1>
            <div className="d-flex justify-content-center">
                <BeerCard details={random} />
            </div>
        </>
    )
}