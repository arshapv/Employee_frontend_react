import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
        <div className=' bg-success'>
      <div className='row  bg-success'>
        <div className='col-lg-4 ms-4 mt-5 me-4'>
        <h4><i class="fa-solid fa-user"></i><span style={{marginLeft:'20px'}}>Employee details</span></h4>
        <p className='text-light'>Inspiration doesn’t always come naturally, and even the most motivated employees occasionally need a boost.</p>
           
        </div>
        <div className='col-lg-2 mt-5 ms-4'>
          <h4>Links</h4>
         <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Home</Link><br />
         <Link to={'/history'} style={{textDecoration:"none",color:"white"}}>View Employee</Link><br />
        </div>
        <div className='col-lg-2 mt-5 ms-2'>
        <h4>Guides</h4>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}>React</Link><br />
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link><br />
         <Link to={'/'} style={{textDecoration:"none",color:"white"}}>React Router</Link>
        </div>
        <div className='col-lg-3 mt-5 ms-2'>
          <h4>Contact Us</h4>
          <div style={{marginTop:'20px'}}>
          <a style={{color:'white',marginLeft:'10px',fontSize:'25px'}} href=""><i class="fa-brands fa-facebook"></i></a>
          <a style={{color:'white',marginLeft:'20px',fontSize:'25px'}} href=""><i class="fa-brands fa-twitter"></i></a>
          <a style={{color:'white',marginLeft:'20px',fontSize:'25px'}} href=""><i class="fa-brands fa-instagram"></i></a>
          <a style={{color:'white',marginLeft:'20px',fontSize:'25px'}} href=""><i class="fa-brands fa-linkedin"></i></a>
          <a style={{color:'white',marginLeft:'20px',fontSize:'25px'}} href=""><i class="fa-brands fa-github"></i></a>
          <a style={{color:'white',marginLeft:'20px',fontSize:'25px'}} href=""><i class="fa-light fa-phone"></i></a>
          </div>
        </div>
      </div>
      <div style={{textAlign:'center'}} className='row mt-5'>
      </div>
      <div className='row'>
        
        <h4></h4>
      </div>
    </div>
    </div>
  )
}

export default Footer