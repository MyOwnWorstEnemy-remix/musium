import { NavLink } from 'react-router-dom';
import Logo from "../../assets/icons/logo.svg?react";

function Footer () {
    return (
        <footer className="bg-[url('../src/assets/img/footer-background.png')] bg-cover lg:px-[75px] xl:px-[90px] lg:pt-56 lg:pb-16 z-30 relative flex justify-between">
            <Logo />
            <ul className='flex gap-8 text-white'>
                <NavLink to="/" className='p-3.5 hover:text-[#EE10B0]'>
                    Home
                </NavLink>
                <NavLink to="/discover" className='p-3.5 hover:text-[#EE10B0]'>
                    Discover
                </NavLink>
                <NavLink to="/playlists" className='p-3.5 hover:text-[#EE10B0]'>
                    Playlists
                </NavLink>
                <NavLink to="/user-tracks" className='p-3.5 hover:text-[#EE10B0]'>
                    User tracks
                </NavLink>
            </ul>
        </footer>
    )
}

export default Footer;