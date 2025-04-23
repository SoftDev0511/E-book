import React from 'react'

const Navbar = () => {
  const links = [
    { title: 'Home', link: '/' },
   
    { title: 'About Us', link: '/about-us' },
    { title: 'All Books', link: '/all-books' },
    { title: 'Cart', link: '/cart' },
    { title: 'Profile', link: '/profile' },


  ];
  return (
    <div className="bg-gray-800 text-white px-4 py-4 flex justify-between items-center">
      <div className='flex items-center'>
        <img 
        className='h-10 me-4'
        src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" 
        alt="logo" 
        />
        <h1 className='text-2xl font-semibold'>BookHeaven</h1>
      </div>
      <div className='nav-links-bookheaven flex items-center gap-4'>
        <div className='flex gap-4'>
        {links.map((items, i) => (
          <div className="hover:text-blue-500 transition-all duration-300" key={i}>{items.title}</div>
        ))}
        </div>
        <div className='flex gap-4'>
          <button className="border border-blue-500  px-2 py-1 rounded hover:bg-white hover:text-gray-800 transition-all duration-300">Login</button>
          <button className="bg-blue-500  px-2 py-1 rounded hover:bg-white hover:text-gray-800 transition-all duration-300">Sign Up</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar

