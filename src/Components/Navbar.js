import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Tab, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/icons/LogoHoriz.svg";

function Navbar() {
  return (
    <>
      <style type="text/css">{`  
    
    .navbar {
      height: 106px;
      display: none;
      background-color: transparent;
    }


    @media screen and (max-width: 991px) {
      .navbar {

      display: flex;
      }
    }

    
    `}</style>

      <Navbar variant="light">
        <Container className="">
          <Nav>
            <UnionIcon className="nav_icon" onClick={showSidebar} />
          </Nav>
          <Navbar.Brand className="m-auto" href="#">
            {/* <Link to="#"> */}
            <img src={logo} alt={"logo"} />
            {/* </Link> */}
          </Navbar.Brand>
          <Nav>
            <img className="avatarNav" src={avatar} alt={"avatar"}></img>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbar;
