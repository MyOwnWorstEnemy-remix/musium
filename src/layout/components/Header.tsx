import { NavLink } from 'react-router-dom';
import Logo from "../../assets/icons/logo.svg?react";
import Search from "../../assets/icons/search.svg?react";

function Header () {
    return (
        <header className='lg:text-sm flex items-center lg:pb-14'>
            <Logo className='ml-2 lg:mr-[119px]' />
            <div className='flex justify-between w-full'>
                <div className="relative lg:w-[350px]">
                    <div className="absolute left-2 top-1.5
                                flex items-center 
                                pointer-events-none">
                        <Search className="h-[25px] w-[25px] text-gray-400" />
                    </div>
                    <input type="text" 
                        className="pl-9 pr-4 py-2 rounded-lg bg-[#1f1f1f] w-full text-white outline-0" 
                        placeholder="Search For Musics, Artists, ..." />
                </div>
                <div className='flex gap-3'>
                    <button className='text-[#EE10B0] border border-[#EE10B0] bg-transparent hover:bg-[#EE10B0] hover:text-white rounded-sm lg:w-[167px] lg:h-9 
                                        flex justify-center items-center cursor-pointer font-light'>Login</button>
                    <NavLink to='/sign-up'>
                        <button className='text-white border border-[#EE10B0] bg-[#EE10B0] hover:bg-transparent hover:text-[#EE10B0] rounded-sm lg:w-[167px] lg:h-9 
                                        flex justify-center items-center cursor-pointer font-light'>Sign Up</button>
                    </NavLink>
                </div>
            </div>            
        </header>
    )
}

export default Header;