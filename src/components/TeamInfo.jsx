import React, { useState } from "react";
import Djones from "./Djones";
import "./TeamInfo.css";
import { Card } from "react-bootstrap";

export default function TeamInfo() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="team-info-container flex justify-between space-x-6">
        <Card className="card flex-auto mx-2 p-4 djones-card style={{ width: '18rem' }}">
          <Card.Body style={{ width: "18rem" }}>
            <Card.Title>
              <h1
                className="text-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
                onClick={() => setModalShow(true)}
              >
                Dwayne Jones
              </h1>
            </Card.Title>
            <br />
            <Card.Text>
              You have been looking at one of our first major team projects.
              When you are done here please take a look at our personal sites
              and look at some more of our work. <br />
              Thanks for stopping by.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <Djones show={modalShow} onHide={() => setModalShow} />
    </>
  );
}
