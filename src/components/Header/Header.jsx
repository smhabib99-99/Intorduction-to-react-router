import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <Link to="/">Home</Link>
                <NavLink to ="/about">About</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;