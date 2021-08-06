import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiltersData } from "./FiltersData";
import { Link } from "react-router-dom";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

function Filter() {
  return (
    <>
      <style type="text/css">
        {`
            .nav-pills .nav-link.active, .nav-pills .show>.nav-link {
            color: #272931;
                    background-color: #ffffff;
                    border-radius: 10px;
            }

            .nav-link {
            
                color: #272931;
            }

            @media screen and (max-width: 767px) {
            .nav {
              white-space: nowrap;
              overflow-y: scroll;
              // display:flex; 
              flex-wrap: nowrap
            }

            .nav::-webkit-scrollbar {
              display: none;
          }

          }

            .span {
                margin-left:8px;
            }


    `}
      </style>

      <Tab.Container id="left-tabs-example">
            <div className="navDiv">
              <Nav variant="pills">
                {FiltersData.map((val, key) => {
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
      </Tab.Container>
    </>
  );
}

export default Filter;
