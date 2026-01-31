import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link to="/" className="navLinkLogo"><strong>World Journal Project</strong></Link>
            </div>
            <div className="links">
                <Link to="/" className="navLink">Home</Link>
                <Link to="/about" className="navLink">About</Link>
                <Link to="/explore" className="navLink">Explore</Link>
                <Link to="/submit" className="navLinkSubmit">Submit</Link>
            </div>
        </nav>
    )
}

export default Navbar;