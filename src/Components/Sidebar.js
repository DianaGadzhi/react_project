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
       
        display: none;
      }


      @media screen and (max-width: 991px) {
        .navbar {
          height: 106px;
          display: flex;
          background-color: transparent;

        }
      }

      .navVerticalPills .linkElement.active, .navVerticalPills .show>.linkElement {
          color: white;
          background-color: #fe8862;
          border-radius: 16px;
          fill: white;

        }

        .linkElement {
          padding: 8px 20px 8px 24px;
            color: #272931;
            width: 200px;
            height: 50px;
            margin: 10px 20px ;
        }

        .spanNav {
          margin-left:8px;
          font-style: normal;
          font-weight: 600;
          font-size: 13px;
          line-height: 15px;
      }


      .avatar {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: block;
      }
      
      .logo_colour {
        height: 46px;
        object-fit: contain;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
      }
      
      .nav_icon {
        display: block;
        flex-grow: 1;
      }
      
      @media only screen and (min-width: 992px) {
        .sidebarLogo {
          height: 120px;
          margin-left: 44px;
          width: auto;
        }

            
        .SidebarList {
          display: block;
          margin-top:40px;

        }
      
        .logoVertical {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-content: flex-end;
          padding-bottom: 16px;
          align-items: flex-end;
        }
      
        .nav_icon {
          display: none;
        }

        navVertical {
          display: flex;
          flex-wrap: nowrap;
          list-style: none;
          flex-direction: column;
          margin: 20px;
        
        }
      
      }
      
      .avatarNav {
        display: none;
      }
      
      @media screen and (max-width: 991px) {
      
        .avatar {
          display: none;
        }
      
        .avatarNav {
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
        }
      
        .sidebarLogo {
          display: none;
        }
      
        .SidebarList {
          display: none;

        }
      
        .logo_colour {
          padding: 5px;
          width: 30px;
          height: 30px;
          margin: 10px;
          line-height: 30px;
          text-align: center;
        }
      
      
      
      }

      
      `}</style>

      {/* Navmar Movil version */}
      <Navbar variant="light">
        <Container>
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
      {/* Navmar Desktop version */}
      <div className="sidebarLogo">
        <Row className="logoVertical">
          <Col className="logo_colour">
            <img src={logo} alt={"logo"} />
          </Col>
        </Row>
      </div>
      <Tab.Container id="left-tabs-example">
        <div className="SidebarList">
          <Nav className="navVertical navVerticalPills" variant="pills">
            {SidebarData.map((val, key) => {
              return (
                <Nav.Item>
                  <Nav.Link
                    className="linkElement"
                    id={
                      window.location.pathname == val.path
                        ? "iconActive"
                        : "icon"
                    }
                    eventKey={key}
                  >
                    {val.icon}
                    <span className="spanNav">{val.title}</span>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </div>
      </Tab.Container>

      {/* <div className="Sidebar">
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
      </div> */}
    </>
  );
}

export default Sidebar;
