import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import BeerCard from "../components/BeerCard";

export default function BeerDetails() {

    const { id } = useParams()

    const [beerDetails, setBeerDetails] = useState({})

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(result => setBeerDetails(result.data))
            .catch(err => console.log("err catch details", err))
        //la siguiente línea es para deshabilitar un warning por no poner id entre los [] ya que en este caso no me interesa
        //eslint-disable-next-line
    }, []);

    return (
        <>
            <Navbar />
            <h1>BeerDetails!</h1>
            <div className="d-flex justify-content-center">
                <BeerCard details={beerDetails} />
            </div>
        </>
    )
}