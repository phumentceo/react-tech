import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
        <Header/>
           <div className=" container mt-3 p-0">
                <div className="home-page">
                  <h1>Home Page</h1>
                </div>
           </div>
        <Footer/>
    </div>
  )
}

export default Home