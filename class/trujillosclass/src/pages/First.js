import React from "react";
import "../index.css";
import Navlinks from "../components/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card'

function First() {
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
            <div>Our days are very long for the kindies, they are exhausted by the afternoon!  Most of our core learning is in the morning for that reason. Today was our first day to try a rotation schedule and it did not go as well as I hoped, but it was the first day (as I had to keep reminding myself)!   I put out a  message over the weekend for volunteers, as I was panicking, and everyone stepped right up, so I now have a parent each morning to help,  THANK YOU!   Book bags went home today. Your child may have a book to read and sight words to practice, or your child may be working on our letters for the week -  Mm and Ss, if they have the letters on a ring I have also sent home the letter assessment that was given to them last week so you have a reference to how they did and why we are starting where we are.   They will have a homework paper that goes with it, please complete part of the page each night and return it completed on Friday in their book bag.  Please practice their letters all week, including the sound the letters make, I will continue to add on to their ring each week.  They will have math homework starting in a few weeks, at this point I am trying to not overwhelm them or you!</div>
        <div><br></br></div>
            <div>

Kindergarteners do not have me for math this year, they actually have Mrs. Williams M, T, W,  Mrs. Reeves on Thursdays and Mrs. Smith on Fridays.  I know that sounds a bit crazy but it is what we have needed to do with a class of 3 grade levels and kindergarten is the best group to utilize that help because they need more one-on-one attention and hands-on work.  I have no doubt they are in great hands with these ladies!  I have the 1st and 2nd graders spit for math during the 11:00-12:00 time. </div>
<div><br></br></div>
            <div></div>
            <h3>Classroom Curriculum</h3>
            

<h4>This curriculum is split up by level with the slash /,  Kindergarten objectives  and  First Grade objectives</h4> 
<ul>

<li style={{fontWeight: "bold"}}>Phonics Skill: </li><li>  identifying letters  Mm and Ss, and the sounds they make      /     short a vowel sound and word patterns</li>

<li style={{fontWeight: "bold"}}>Phonemic Awareness:</li><li>  rhyming</li>

<li style={{fontWeight: "bold"}}>Spelling: </li><li> First grade has spelling words in their book bag, test on Friday</li>

<li style={{fontWeight: "bold"}}>Writing Skill: </li><li> pencil grip, tracing, writing names with only the first letter as a capital     /    handwriting review </li>

<li style={{fontWeight: "bold"}}>Math:</li><li>   sorting, numbers, counting   /     addition number sentences and strategies</li>

<li style={{fontWeight: "bold"}}>Social Studies:</li><li>  class/school rules, being a good friend and a good school citizen</li>
</ul>
            </Card.Body>
        </Card>
        </body>
</>
);
}

export default First