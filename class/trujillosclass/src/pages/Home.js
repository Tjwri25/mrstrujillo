import React from "react";
import "../index.css";
import Navlinks from "../components/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

function Home() {
  return (
    <>
      
      <body>
        <Row>
          <Col></Col>
          <Col>
            {" "}
            <img
              src="https://user-images.githubusercontent.com/74884495/129826767-b100b8b1-6495-4fb9-b0c4-4f06896dfac3.png"
              alt=""
              className="img-logo"
            ></img>
          </Col>
          <Col></Col>
        </Row>
        <Navlinks />
        <Row>
           
            <Col>
            <Card className="classNews">
  <Card.Body><h1>Class News</h1>
  <h4>Scholastic book orders went home today (8/17) in book bags if you are interested in purchasing a few books.  You can either go online to Scholastic books and enter my class code: FPL2F    to order and pay right online, or you may send the order form back by Friday with the form marked and money sent in and I can place your order.  Both are very easy to do and will help put more books into our classroom library-  but please do not feel obligated to purchase. </h4></Card.Body>
</Card>
            </Col>
        
        </Row>
        <Row>
            <Col>
            <img
              src="https://user-images.githubusercontent.com/74884495/129832465-01e02637-439e-4a8f-b98e-1938f550b41e.png"
              alt=""
              className="img-dates"
            ></img>
            </Col>
            <Col>
            <img
              src="https://user-images.githubusercontent.com/74884495/129832152-77c685f7-0342-4d22-be49-7be5e90246fa.png"
              alt=""
              className="img-specials"
            ></img>
            </Col>
            <Col>
            <img
              src="https://user-images.githubusercontent.com/74884495/129833689-458de4c6-fcf2-4f6b-a7ff-4039ed43a0ab.png"
              alt=""
              className="img-menu"
            ></img>
            </Col>
        </Row>
      </body>
    </>
  );
}

export default Home;
