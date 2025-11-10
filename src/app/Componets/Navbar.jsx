import React from 'react'
import logo from '../../app/Images/logo (1).png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <>
    <section id='navbar'>
<div className="container">
    <div className="navItems">
        <div className="img-part">
            <Image src={logo} alt='logo' width={93} height={29} />
        </div>
        <div className="menuItems flex gap-10">
            <a href="#" className='text-main text-lg font-bold font-poppins text '>Home</a>
            <a href="#" className='text-main text-lg font-bold font-poppins text '>Service</a>
            <a href="#" className='text-main text-lg font-bold font-poppins text '>Agents</a>
            <a href="#" className='text-main text-lg font-bold font-poppins text '>Contact</a>
        </div>
        <div className="search-login-button"></div>
    </div>
</div>
    </section>
    </>
  )
}

export default Navbar