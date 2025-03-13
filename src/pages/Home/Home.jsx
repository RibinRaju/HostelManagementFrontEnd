import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="flex items-center">
          <nav className="flex-1">
            <ul className="list-none p-0">
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Gallery</Link></li>
              <li><Link to="#">Contact</Link></li>
              <li><Link to="#">Residentials</Link></li>
              <li><Link to="#">Admin</Link></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="content text-center py-20">
        <h1>WanderLust Haven</h1>
        <h2 className="text-xl text-gray-600 mb-6">Discover Your Adventure</h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Welcome to Wanderlust Haven: Your Gateway to Adventure and Comfort! Nestled in Kochi, our hostel is more than just a place to stay – 
          it's a vibrant hub for travelers seeking unforgettable experiences. Let us be your home away from home as you embark on your next adventure...
        </p>
      </div>

      <div className="booknow text-center">
        <Link to="/login" className="btn-primary">BOOK YOUR ROOM NOW</Link>
      </div>
    </div>
  );
}

export default Home;
