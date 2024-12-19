import React from 'react';
import Add from '../Pages/Add';
import { Link } from 'react-router-dom';
import homeimg from '../assets/backgroundimg.avif';

function Home() {
  const pageStyle = {
    backgroundImage: `url(${homeimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Make the div take full screen height
    display: 'flex', // Flexbox layout
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'center', // Vertically center the items
    alignItems: 'center', // Horizontally center the items
    textAlign: 'center', // Center text inside the elements
  };

  return (
    <div style={pageStyle}>
      <div className="container mt-5">
        {/* Add component centered */}
        <Add className="d-flex align-items-center justify-content-center text-danger" />
        
        {/* Link button centered */}
        <Link to={'/history'}className="text-success  text-decoration-none fe-bold mb-5">
          <button style={{fontSize:'25px'}} className='bg-success p-3 rounded w-25'>View Employee Details</button>
        </Link>
      </div>

      <div>
        {/* Heading centered */}
        <h2 className='mt-5 text-primary' style={{textDecoration:'underline'}}>A Message for Employees</h2>
        <p className='ms-5 me-5' style={{fontSize:'20px ', fontWeight:'bold', }}>Staying motivated and engaged at work can be challenging, 
          especially with the everyday pressures and demands of a fast-paced work environment. A positive, motivated team is essential to
           creating a thriving workplace, where employees not only meet their goals but feel genuinely invested in their work. One simple yet
            powerful way to cultivate this positivity and enthusiasm is by sharing motivational quotes that inspire employees to keep going, 
            focus on their strengths, and work toward personal and team success.curious, stay driven, and most importantly, stay true to who you
             are.
      </p>
      </div>
    </div>
  );
}

export default Home;
