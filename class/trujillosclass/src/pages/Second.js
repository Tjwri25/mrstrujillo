import React from "react";
import "../index.css";
import Navlinks from "../components/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

function Second() {
return(
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
        <Card className="classNews">
            <Card.Body>
            <h1>Hello Parents!</h1>
            <h2>I hope your child had a lot of good things to say about their first week of school!  I am so excited about our school year! </h2>
            <div><br></br></div>
            <h3>This page is specific to the red group which is primarily 2nd grade with a few first graders mixed in.</h3>
        <div><br></br></div>

<div><br></br></div>
            <div></div>
            <h3>Classroom Curriculum, Focus of Study for the Red Group</h3>
            


<ul>

<li style={{fontWeight: "bold"}}>Phonics Skill:</li><li>short a vowel sound review</li>

<li style={{fontWeight: "bold"}}>Comprehension:</li><li>  we will have several assignments through the week that focus on comprehension strategies, one specific area of study for the next 3 weeks in realistic fiction.  Your child will bring home a book bag each night with something to read to someone at home, please sign their pink slip and return.  We will try to do the assignment that goes with each book here at school but there may be times it needs to be finished at home-  I am trying to make them a little more independent this year, here at school, to get things done and have less homework. </li>

<li style={{fontWeight: "bold"}}>Spelling:</li><li>  No Spelling this week, they will be taking a very large spelling pretest all week so I can see where to start each one in this year's spelling program.  Once it does start they will have a weekly spelling packet that will go home on Mondays to complete and return on Fridays, tests will be on Fridays.</li>

<li style={{fontWeight: "bold"}}>Writing Skill:</li><li>  This group has writing with Mrs. Anton this year </li>

<li style={{fontWeight: "bold"}}>Math:</li><li>   Math review, addition strategies</li>

<li style={{fontWeight: "bold"}}>Social Studies: </li><li> class/school rules, being a good friend and a good school citizen</li>
</ul>
            </Card.Body>
        </Card>
        </body>
</>
);
}

export default Second