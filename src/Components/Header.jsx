import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div >
        <Navbar className="bg-info d-flex align-items-center justify-content-center ">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand className='d-flex justify-content-center align-items-center' >
          <i class="fa-solid fa-user me-4 ms-5"></i>
           <span className='fs-5 ' >EMPLOYEE DETAILS</span> 
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header