

export default function BeerCard({ details: { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } }) {
    return (
        <div className="card" style={{ width: "20rem" }} >
            <img src={image_url} style={{ height: "16rem" }} className="card-img-top w-50 mx-auto" alt="beerIMG" />
            <div className="card-body">
                <div>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{tagline}</p>
                </div>
                <div>
                    <p className="card-text">{attenuation_level}</p>
                    <p className="card-text">{first_brewed}</p>
                </div>
                <p className="card-text">{description}</p>
                <p className="card-text">{contributed_by}</p>

            </div>
        </div>
    )
}