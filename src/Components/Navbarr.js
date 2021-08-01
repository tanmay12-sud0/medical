
import React, { useState } from 'react';
// import { Nav } from 'react-bootstrap';
// import {
//   MDBContainer,
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
  
//   MDBCollapse
// } from 'mdb-react-ui-kit';


function Navbarr() {
    // const [showBasic, setShowBasic] = useState(false);
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">
        Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/blog">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About us</a>
      </li>
    
    </ul>
  
  </div>
</nav>
  
    )
}

export default Navbarr;




  //     <MDBNavbar sticky expand='lg' light bgColor='light'>
    //   <MDBContainer fluid>
    //     <MDBNavbarBrand href='#'>Diestrous</MDBNavbarBrand>

    //     <MDBNavbarToggler
    //       aria-controls='navbarSupportedContent'
    //       aria-expanded='false'
    //       aria-label='Toggle navigation'
    //       onClick={() => setShowBasic(!showBasic)}
    //     >
    //       <MDBIcon icon='bars' fas />
    //     </MDBNavbarToggler>

    //     <MDBCollapse  navbar show={showBasic}>
    //       <MDBNavbarNav>
    //         <MDBNavbarItem  className="ml-lg-auto mr-lg-3  ">
    //           <MDBNavbarLink  active aria-current='page' href='#' >
    //            <Link to="/">
    //           Home
    //            </Link>
    //           </MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem className="mr-lg-0  ">
    //           <MDBNavbarLink href='#'>
    //           {/* <Link to="/blog"> */}
    //           Blogs
    //         {/* </Link> */}
    //           </MDBNavbarLink>
    //         </MDBNavbarItem>
    //         <MDBNavbarItem className="mr-lg-5 ml-lg-3">
    //           <MDBNavbarLink href='#'>
    //           {/* <Link to="/about"> */}
    //           About Us
    //         {/* </Link> */}
    //         </MDBNavbarLink>
    //         </MDBNavbarItem>

    //         <MDBNavbarItem>
             
    //         </MDBNavbarItem>

            
    //       </MDBNavbarNav>

         
    //     </MDBCollapse>
    //   </MDBContainer>
    // </MDBNavbar>