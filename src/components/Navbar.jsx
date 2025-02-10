import eltroncsLogo from '../assets/images/eltroncsblack.png'
import { PlaneLanding, Tags, User } from 'lucide-react';
import { Heart, ChevronDown } from 'lucide-react';
import { ShoppingCart, CircleHelp } from 'lucide-react';
import { Outlet, NavLink } from 'react-router-dom'
import { useState } from 'react';
import Footer from './Footer';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
      };
  
  return (
    <>
      <nav className='z-50 fixed bg-white/75 w-full md:w-full lg:w-full xl:w-full p-7 flex-wrap flex justify-between items-center backdrop-blur-md'>
        <div className='space-x-3'>
          <NavLink to='/'>
            <img src={eltroncsLogo} alt="" className='w-28 h-auto'/>
            </NavLink>
        </div>

        <div className='space-x-6 hidden md:hidden lg:flex'>
            <NavLink to="/" className='text-[13px] hover:text-blue-800 duration-300 flex items-center justify-center gap-2'>Categories <ChevronDown size={15} /></NavLink>
            <NavLink to="/" className='text-[13px] hover:text-blue-800 duration-300'>Featured</NavLink>
            <NavLink to="/" className='text-[13px] hover:text-blue-800 duration-300'>New arrivals</NavLink>
        </div>

        <div className='space-x-1 md:space-x-3 lg:space-x-6 flex justify-center items-center'>
            <NavLink to="/userprofile" className='hover:bg-slate-200 duration-300 p-2 rounded-full'><User size={20} /></NavLink>
            <NavLink to="/" className='hidden md:block hover:bg-slate-200 duration-300 p-2 rounded-full'><CircleHelp size={20} /></NavLink>
            <NavLink to="/wishlists" className='hidden md:block hover:bg-slate-200 duration-300 p-2 rounded-full'><Heart size={20} /></NavLink>
            <NavLink to="/cart" className='hover:bg-slate-200 duration-300 p-2 rounded-full'><ShoppingCart size={20} /></NavLink>
        
            <div className="pl-5 lg:hidden" onClick={toggleMenu}>
          <button className="text-white focus:outline-none relative scale-x-[-1] w-6 h-6 z-50">
            <span
              className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? 'rotate-45 bg-black' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`block absolute w-5 h-0.5 bg-black transition-opacity duration-300 ${
                isOpen ? 'opacity-0 bg-black' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`block absolute w-6 h-0.5 bg-black transition-transform duration-300 ${
                isOpen ? '-rotate-45 bg-black' : 'translate-y-1.5'
              }`}
            ></span>
          </button>
        </div>

        </div>

       
       
        

      </nav>
      <div id="mobile" className={`${
          isOpen ? "right-0" : "-right-full"
            } lg:hidden fixed grid duration-300 ease-out gap-2 text-left z-40 text-black font-primary text-[13px] overflow-y-scroll h-auto w-8/12 p-3 px-4 pb-96 pt-32 bg-white/90 backdrop-blur-md mx-auto max-w-screen-xl `}>
          <NavLink to="/" className="md:block bg-gray-600/5 p-3 hover:text-gray-900 rounded-md hover:bg-gray-600/10 duration-300 flex items-center justify-between gap-2" onClick={closeMenu} title="Categories">Categories <ChevronDown size={15} /> </NavLink>
          <NavLink to="/" className="md:block  bg-gray-600/5 p-3 hover:text-gray-900 rounded-md  hover:bg-gray-600/10 duration-300 flex items-center gap-3" onClick={closeMenu} title='Featured'><Tags size={14} />Featured</NavLink>
          <NavLink to="/" className="md:block  bg-gray-600/5 p-3 hover:text-gray-900 rounded-md  hover:bg-gray-600/10 duration-300 flex items-center gap-3" onClick={closeMenu} title='New Arrivals'><PlaneLanding size={14} />New Arrivals</NavLink>
          <NavLink to="/" className="md:block  bg-gray-600/5 p-3 hover:text-gray-900 rounded-md  hover:bg-gray-600/10 duration-300 flex items-center gap-3" onClick={closeMenu} title='Help Center'><CircleHelp size={14} />Help</NavLink>
          <NavLink to="/wishlists" className="md:block  bg-gray-600/5 p-3 hover:gray-blue-900 rounded-md  hover:bg-gray-600/10 duration-300 flex items-center gap-3" onClick={closeMenu} title='Wishlists'><Heart size={14} />Wishlist</NavLink>
          <div className='text-center font-light text-[8px] mt-12'>copyright 2024 eltroncs</div>
        </div>


      <Outlet />
      <Footer />

    </>
  )
}

export default Navbar
