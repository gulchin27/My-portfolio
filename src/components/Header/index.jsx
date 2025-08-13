import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Header = () => {
  return (
    <div className='container-head flex items-center justify-center gap-[4%] mt-[2%] border-b border-black w-[60%] ml-[20%]'>
      <Link to="/about" className='mb-[1%]'>About me</Link>
      <Link to="/projects" className='mb-[1%]'>My projects</Link>
      <Link to="/contact" className='mb-[1%]'>Contacts</Link>
    </div>
  );
}

export default Header;
