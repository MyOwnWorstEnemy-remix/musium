import { NavLink } from 'react-router-dom';
import Home from "../../assets/icons/home.svg?react";
import Discover from "../../assets/icons/discover.svg?react";
import Playlists from "../../assets/icons/playlists.svg?react";
import UserTracks from "../../assets/icons/user-tracks.svg?react";
import Profile from "../../assets/icons/profile.svg?react";
import LogOut from "../../assets/icons/logout.svg?react";

const activeClass = "text-[#EE10B0] relative hover:opacity-[0.5] flex justify-center";
const notActiveClass = "text-[#4F524F] relative hover:opacity-[0.5] flex justify-center";

function NavBar () {
    return (
        <nav className='flex flex-col gap-10'>
            <ul className='flex flex-col gap-8 w-[52px] bg-[#1A1E1F] py-[25px] px-[15px] rounded-full'>
                <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>
                    <Home />
                    <span className='invisible absolute'>Главная</span>
                </NavLink>
                <NavLink to="/discover" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>
                    <Discover />
                    <span className='invisible absolute'>Поиск</span>
                </NavLink>
                <NavLink to="/playlists" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>
                    <Playlists />
                    <span className='invisible absolute'>Плейлисты</span>
                </NavLink>
                <NavLink to="/user-tracks" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>
                    <UserTracks />
                    <span className='invisible absolute'>Треки пользователя</span>
                </NavLink>
            </ul>
            <ul className='flex flex-col gap-8 w-[52px] bg-[#1A1E1F] py-[25px] px-[15px] rounded-full'>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? activeClass : notActiveClass)}>
                    <Profile />
                    <span className='invisible absolute'>Профиль</span>
                </NavLink>
                <button type='button' className='cursor-pointer text-[#4F524F] relative flex justify-center hover:text-[#EE10B0] hover:opacity-[0.5]'>
                    <LogOut />
                    <span className='invisible absolute'>Выход</span>
                </button>
            </ul>
        </nav>
    );
}

export default NavBar;