import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../Components/Filters";
import { Container, Row, Col } from "react-bootstrap";
import avatar from "../assets/avatar.png";
import Cards from "../Components/Cards";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as IconHeader } from "../assets/icons/nikeIcon.svg";

function Proposal() {
  return (
    <>
      <style type="text/css">
        {`

            .rowStyle {
               margin: 30px 0px 0px 30px;
              display: flex;
              
            }

            .pr {
              font-size: 24px;
              font-weight: 700;
              margin-bottom: 0px;
            }

            .inputCol {
                width: 250px
            }

            .form {
              width:250px;
              margin:auto
            }

                .input-icons {
                    width: 100%;
                    margin-bottom: 10px;
                }
                  
                .input-icons #i {
                    position: absolute;
                }

                .icon {
                   
                    margin-top:10px;
                    color: black;
                    min-width: 40px;
                    text-align: center;
                }
                  
                .input-field {
                    width: 100%;
                    padding: 10px 10px 10px 38px;
                   
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 16px;
                    border-radius: 13px;
                    border: 0px;
                }

              

            .colFilter {
                padding: 30px 0px 25px;
                border-bottom: 0.5px solid #D9C4B7;
                marfin-right: 30px
            }


            @media screen and (min-width: 1200px) {
              .rowStyle {
                margin: 30px 16px 0px 30px;
                padding-bottom: 18px;
                justify-content: start;
                
               } 
            }

            @media screen and (max-width: 767px) {
                .rowStyle {
                    margin: 20px 16px 0px 16px;
                    padding-bottom: 18px;
                    justify-content: center;
                    
                }
                
            }

            @media screen and (max-width: 576px) {
              .inputCol {
                 width: 100%;
                 margin-top: 16px;
              }

             .colFilter {
                padding: 0px 0px 16px;
                border-bottom: 0.5px solid #D9C4B7;
            }
              .form {
                width:100%;
                margin:auto
              }
            

            .rowStyle {
              margin: 16px 16px 0px;
              padding-bottom: 18px;
              justify-content: center;

            }

            .pr {
              margin: 25px 0px;
              margin-left: auto;
              font-size: 20px;
              text-align: center;
            }
          }
          

          `}
      </style>

      <Container fluid className="proposal p-0">
        <Row className="rowStyle p-0">
          <Col xxl={8} xl={7} lg={6} md={7} sm={6} className="p-0 ">
            <p className="pr"> Предложения </p>
          </Col>
          <Col
            xl={4}
            lg={3}
            md={4}
            xs={{ span: 12, order: 3 }}
            sm={{ order: 1 }}
            className="p-0 inputCol"
          >
            <form className="form">
              <div className="input-icons">
                <SearchIcon id="i" className="icon" />
                <input className="input-field" type="search" placeholder="Поиск" />
              </div>
            </form>
          </Col>
          <Col
            lg={1}
            xs={{ span: 12, order: 2 }}
            sm={{ order: 2 }}
            style={{ paddingLeft: "16px" }}
          >
            <img className="avatar" src={avatar} alt={"avatar"}></img>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }}
            sm={{ order: 3 }}
            className="colFilter"
          >
            <Filter />
          </Col>
        </Row>
        <Row xs={1} md={1} className="rowStyle">
          <Cards />
        </Row>
      </Container>
    </>
  );
}

export default Proposal;
