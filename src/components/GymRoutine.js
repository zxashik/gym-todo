import React from "react";
import { Button, Card, Container } from "react-bootstrap";

function GymRoutine() {
  return (
    <>
      <Container>
        <div className="header text-center p-5 my-5 bg-secondary rounded-3">
          <h1>My Gym Routine</h1>
          <button className="btn btn-success rounded-3">
            Add Your Routine
          </button>
        </div>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/200" />
          <Card.Body>
            <Card.Title>exercise Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default GymRoutine;
