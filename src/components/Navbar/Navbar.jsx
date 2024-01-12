import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <a href="" className='link'>Agents</a>
            <a href="" className='link'>Buddies</a>
            <a href="" className='link'>Cards</a>
            <a href="" className='link'>Maps</a>
            <a href="https://playvalorant.com/pt-br/" target='_blank' rel="noreferrer"><img src="images/valorant-logo.png" alt="Logo valorant" className='logo'/></a>
            <a href="" className='link'>Tiers</a>
            <a href="" className='link'>Player Titles</a>
            <a href="" className='link'>Sprays</a>
            <a href="" className='link'>Weapons</a>
        </nav>
    )
}

export default Navbar