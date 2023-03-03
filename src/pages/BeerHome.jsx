import fotoBeers from '../assets/beers.png'
import fotoNew from '../assets/new-beer.png'
import fotoRandom from '../assets/random-beer.png'
import { Link } from 'react-router-dom'

export default function BeerHome() {
    return (
        <>
            <h1>BeerHome!</h1>
            <div className="container">
                <div className="row">
                    <div className="col"><Link to={`/beers`}><img src={fotoBeers} alt="cerveza" /></Link><h2><Link className='text-decoration-none text-black' to={`/beers`}>All Beers</Link></h2><p className='w-75 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error quibusdam doloremque unde delectus nulla deleniti aperiam atque perferendis culpa alias blanditiis repellendus placeat incidunt nesciunt, illo omnis ut ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error quibusdam doloremque unde delectus nulla deleniti aperiam atque perferendis culpa alias blanditiis repellendus placeat incidunt nesciunt, illo omnis ut ea.</p></div>
                    <div className="col"><Link to={`/beers/new`}><img src={fotoNew} alt="cerveza" /></Link><h2><Link className='text-decoration-none text-black' to={`/beers/new`}>New Beer</Link></h2><p className='w-75 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error quibusdam doloremque unde delectus nulla deleniti aperiam atque perferendis culpa alias blanditiis repellendus placeat incidunt nesciunt, illo omnis ut ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error quibusdam doloremque unde delectus nulla deleniti aperiam atque perferendis culpa alias blanditiis repellendus placeat incidunt nesciunt, illo omnis ut ea.</p></div>
                    <div className="col"><Link to={`/beers/random`}><img src={fotoRandom} alt="cerveza" /></Link><h2><Link className='text-decoration-none text-black' to={`/beers/random`}>Random Beer</Link></h2><p className='w-75 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error quibusdam doloremque unde delectus nulla deleniti aperiam atque perferendis culpa alias blanditiis repellendus placeat incidunt nesciunt, illo omnis ut ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis error quibusdam doloremque unde delectus nulla deleniti aperiam atque perferendis culpa alias blanditiis repellendus placeat incidunt nesciunt, illo omnis ut ea.</p></div>
                </div>
            </div>
        </>
    )
}