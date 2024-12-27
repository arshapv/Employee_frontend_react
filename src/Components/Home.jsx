import React from 'react';
import Add from '../Pages/Add';
import { Link } from 'react-router-dom';
import homeimg from '../assets/backgroundimg.avif';

function Home() {
  const pageStyle = {
    backgroundImage: `url(${homeimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop:'-40px'
  };

  return (
    <div style={pageStyle}>
      <div className="container ">
        <div className='container row my-5 ms-5 d-flex justify-content-between'>
           {/* Add component centered */}
        <div className='col-lg-6 mt-5 '>       
           <Add className=" text-danger" />
        </div>
        {/* Link button centered */}
          <div  className='col-lg-6 mt-5'>
            <Link to={'/history'} className="text-success  text-decoration-none fe-bold mb-5">
              <button style={{fontSize:'25px'}} className='bg-success p-3 rounded w-50'>View Employee Details</button>
            </Link>
          </div>
          </div>

      <div>
        {/* Heading centered */}
        <div className='row'>
        <h2 className='mt-5 text-primary text-center' style={{textDecoration:'underline'}}>A Message for Employees</h2>
        <p className='ms-2 me-5 d-flex justify-content-center' style={{fontSize:'20px ', fontWeight:'bold', }}>Staying motivated and engaged at work can be challenging, 
          especially with the everyday pressures and demands of a fast-paced work environment. A positive, motivated team is essential to
           creating a thriving workplace, where employees not only meet their goals but feel genuinely invested in their work. One simple yet
            powerful way to cultivate this positivity and enthusiasm is by sharing motivational quotes that inspire employees to keep going, 
            focus on their strengths, and work toward personal and team success.curious, stay driven, and most importantly, stay true to who you
             are.
         </p>
         </div>
       </div>
      </div>
    </div>
  );
}

export default Home;