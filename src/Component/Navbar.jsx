import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>

        <div className="navbar bg-red-100 shadow-sm flex px-20 py-6 ">
  <div className="flex-1 py-1 ">
    <a className="btn btn-ghost text-xl text-red-800">Navbar</a>
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-10 py-1 flex gap-10 font-semibold text-lg ">
     
      <Link to='/' >Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Product</Link>


    </ul>
    
  </div>
  <div className="w-10 rounded-full border-2 border-red-300 ">
          <img className='rounded-full '
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
</div>
    </div>
  )
}

export default navbar