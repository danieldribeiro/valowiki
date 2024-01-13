import './Navbar.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/Agents' className='link'>Agents</Link>
            <a href="" className='link'>Buddies</a>
            <a href="" className='link'>Cards</a>
            <a href="" className='link'>Maps</a>
            <Link to="/"><img src="images/valorant-logo.png" alt="Logo valorant" className='logo'/></Link>
            <a href="" className='link'>Tiers</a>
            <a href="" className='link'>Player Titles</a>
            <a href="" className='link'>Sprays</a>
            <a href="" className='link'>Weapons</a>
        </nav>
    )
}

export default Navbar