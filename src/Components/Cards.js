import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListItemCardData } from "./ListItemCardData";
import { CardData } from "./CardData";
import { ReactComponent as GiftIcon } from "../assets/icons/gift.svg";
import { ReactComponent as NextIcon } from "../assets/icons/next.svg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

// function Cards() {}

class Cards extends Component {
  render() {
    return (
      <>
        <style type="text/css">
          {`
     .col {
      width: auto;
      }

     .colCard {
       padding: 0px 43px 25px 0px;
      }

    .card {
      border-radius: 4px 20px 20px 20px;
      border: 0px;
      box-shadow: 0px 10px 20px rgba(233, 216, 207, 0.3);
      width: 343px;
      height: 548px;

    }
    .card>.list-group:last-child {
       border-radius: 20px
    }

    .card-header  {
        color: #272931;
         background-color: #ffffff;
         height: 60px;
         border: 0px;
         justify-content: center;
         align-items: center;
         padding-top:14px;
         padding-bottom: 10px;
      }

      .card-header:first-child {
        border-radius:  20px;
      }


      .iconHeader {
        border-radius: 11px;
      }

      .header {
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .titleHeader {
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        flex: 30%;
        margin-left: 11px;
        display: grid;
        justify-content: start;
      }


      .status{
        background: rgba(0, 198, 103, 0.08);
        border-radius: 8px;
        font-weight: 600;
        font-size: 13px;
        width: 90px;
        height: 30px;
        justify-content: center;
        align-items: center;
        color: #00C667;
        display: grid;
      }

      .card-img, .card-img-bottom, .card-img-top  {
        width: 315px;
        height: 160px;
        margin-left: 14px;
        
      }

      .card-img, .card-img-top {
        background: #C4C4C4;
        border-radius: 4px 20px 20px 20px;
        border: 0px;
      }


      .card-body{
        padding: 0px 14px 14px 20px;
        position: relative;
      }

      .card-title {
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin-bottom: 10px;
        margin-top: 20px;
      }

      .card-text{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        height: 32px;
        margin-bottom: 14px
      }

      .giftIcon {
        display: grid;
        width: 17px;
        height:18px;
        flex: 10%;
        margin-top: 5px;
        margin-right: 7px;
      }

      .giftTitle {
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        color: #FC5A8B;
        margin-right: 13px;
        display: flex;
        flex: 95%;
      }

      .list-group-flush>.list-group-item {
        padding: 8px 0px;
        height: 50px;
        justify-content: start;
        align-items: center;
        display: flex;

      }

      .listTitle {
        flex:5%;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
      }

      .listItem1{
        background: #F93C47;
        border-radius: 50px;
        width: 30px;
        height:30px;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        justify-content: center;
        align-items: center;
        display: grid;
        margin-right:12px
        
      }

      .listItem2{
        background: #F7F7FA;
        border: 2.5px solid #FFFFFF;
        border-radius: 50px;
        width: 35px;
        height:35px;
        color: #9A99B8;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;

        justify-content: center;
        align-items: center;
        display: grid;
        margin-right:11px;
        position: absolute;
        right: 5px;
        z-index: 5;
      }

      .img1{
        position: absolute;
        right: 40px;
        z-index: 4;
      }

      .img2{
        position: absolute;
        right: 65px;
        z-index: 3;
      }
      .img3{
        position: absolute;
        right: 90px;
        z-index: 2;

      }

      .listItem3{
        background: rgba(254, 136, 98, 0.08);
        border-radius: 8px;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 15px;
        color: #FE8862;
        padding: 8px 14px 7px 15px;
      }

      .listItem4 {
        background: #00C667;
        border-radius: 8px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #FFFFFF;
        padding: 7px 14px;
      }

      @media screen and (max-width: 1084px) {
        .colCard {
          padding: 0px 10px 25px 0px;
        }
      }

      @media screen and (max-width: 576px) {
        .colCard {
          padding: 0px 0px 25px 0px;
        }
      }

      .image {
        display: block;
        position: relative;
        z-index: 2;
      }

      .shadow {
        
        top: 60px;/* amount shadow should extend below main image */
        filter:  blur(14px) ;
        height: 30%;
        left: 45px;
        position: absolute;
        transform: scale(0.95);
        margin: 0;
        width: 250px;
        z-index: 1;
      }

    `}
        </style>
        {/* <Row xs={1} md={2}> */}
        {CardData.map((item, key) => {
          return (
            <Col className="colCard">
              <Card key={key}>
                <Card.Header className="bg">
                  <div className="header">
                    {item.iconHeader}
                    <span className="titleHeader">{item.titleHeader}</span>
                    <span className="status">{item.status}</span>
                  </div>
                </Card.Header>
                <Card.Img className="image" variant="top" src={item.image} />
                <Card.Img className="shadow" src={item.shadow} />

                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <GiftIcon className="giftIcon" />
                    <span className="giftTitle">{item.giftTitle}</span>
                  </Card.Text>

                  {ListItemCardData.map((val, key) => {
                    return (
                      <ListGroup key={key} className="list-group-flush">
                        <ListGroupItem className="border-top">
                          <span className="listTitle">{val.item1}</span>
                          <span className="listItem1">{item.item1}</span>
                          <NextIcon />
                        </ListGroupItem>
                        <ListGroupItem>
                          <span className="listTitle">{val.item2}</span>
                          {/* {item.avatars.map (image => )} */}
                          <img className="img1" src={img1} alt={"img1"}></img>
                          <img className="img2" src={img2} alt={"img2"}></img>
                          <img className="img3" src={img3} alt={"img3"}></img>
                          <span className="listItem2">{item.item2}</span>

                          <NextIcon />
                        </ListGroupItem>
                        <ListGroupItem>
                          <span className="listTitle">{val.item3}</span>
                          <span className="listItem3">{item.item3}</span>
                        </ListGroupItem>
                        <ListGroupItem>
                          <span className="listTitle">{val.item4}</span>
                          <span className="listItem4">{item.item4}</span>
                        </ListGroupItem>
                      </ListGroup>
                    );
                  })}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        {/* </Row> */}
      </>
    );
  }
}

export default Cards;
