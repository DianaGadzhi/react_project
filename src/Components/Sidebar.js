import React, { useState } from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import { ReactComponent as UnionIcon } from "../assets/icons/Union.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Tab, Navbar, Nav } from "react-bootstrap";
// import { ReactComponent as Logo } from "../assets/icons/Logo_colour.svg";
import logo from "../assets/icons/LogoHoriz.svg";
import logoName from "../assets/icons/Vector.svg";
import avatar from "../assets/avatar.png";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
      <div className="sidebarLogo">
        <Row className="logoVertical">
          <Col className="logo_colour">
            <img src={logo} alt={"logo"} />
          </Col>
        </Row>
      </div>
      <div className="Sidebar">
        
      {/* <Tab.Container id="left-tabs-example">
     
            <div className="SidebarList">
              <Nav variant="pills">
                {SidebarData.map((val, key) => {
                  return (
                    <Nav.Item>
                      <Nav.Link eventKey={key}>
                        {val.icon}
                        <span className="span">{val.title}</span>
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </div>
            </div>
      </Tab.Container> */}

        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                id={window.location.pathname == val.path ? "active" : ""}
                onClick={() => {
                  window.location.pathname = val.path;
                }}
              >
                <div
                  id={
                    window.location.pathname == val.path ? "iconActive" : "icon"
                  }
                >
                  {val.icon}
                </div>
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
