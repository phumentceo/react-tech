import React from 'react'

const Header = () => {
  return (
    <header className=' p-2 ps-5 pe-5 bg-dark d-flex justify-content-between align-items-center'>
        <h1 className=' text-light'>React Router</h1>
        <div className="menu d-flex">
            <a href="/" className="nav-link text-light me-3">Home</a>
            <a href="/about" className="nav-link text-light me-3">About</a>
            <a href="/contact" className="nav-link text-light me-3">Contact</a>
        </div>
    </header>
  )
}

export default Header