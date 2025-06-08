import { NavLink } from 'react-router-dom';

const activeClass = "text-red-500";
const notActiveClass = "text-black";

function NavBar () {
    return (
        <nav>
            <ul>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>Home</NavLink>
                <NavLink to="/discover" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>discover</NavLink>
                <NavLink to="/playlists" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>playlists</NavLink>
                <NavLink to="/user-tracks" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>user-tracks</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;