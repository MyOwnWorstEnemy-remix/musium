import { NavLink } from 'react-router-dom';
import Plus from '../assets/icons/plus.svg?react';

function MoreButton({isRound = true}: {isRound?: boolean}) {
  return (
    <>
        {isRound ? 
            <NavLink to='/not-found' className='text-white flex flex-col gap-1'>
                <span className='rounded-full bg-[#1e1e1e] w-[62px] h-[62px] flex justify-center items-center'>
                    <Plus className='w-3.5 h-3.5' />
                </span>
                <span>View All</span>
            </NavLink> : 
            <NavLink to='/not-found' className='rounded-md px-5 py-2 bg-[#1e1e1e] text-white flex gap-2 items-center'>
                <Plus className='w-3.5 h-3.5' />
                <span>View All</span>
            </NavLink>
        }
    </>
    
  );
}

export default MoreButton;