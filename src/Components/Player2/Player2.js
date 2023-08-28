import React from "react";
import Card from "react-bootstrap/Card";

const Player2 = ({ name, team, nationality, jerseyNumber, age, images }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", padding: "10px" }}>
      <Card.Img variant="top" src={images} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}
          <br />
          Nationality: {nationality}
          <br />
          Jersey Number: {jerseyNumber}
          <br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player2;