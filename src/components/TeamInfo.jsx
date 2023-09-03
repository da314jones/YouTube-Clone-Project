import React, { useState } from "react";
import NSlater from "./Bios/NSlater";
import DJones from "./Bios/DJones";
import JChua from "./Bios/JChua";
import { Card } from "react-bootstrap";
import './TeamInfo.css'


export default function TeamInfo() {
  const [modalShow, setModalShow] = useState({DJones: false, NSlater: false, JChua: false});

  return (
    <>
      <div className="team-info-container flex">
        <Card className="card nslater-card" style={{ width: '18rem' }}>
          <Card.Body >
            <Card.Title>
              <h1
                className="text-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
                onClick={() => setModalShow({...modalShow, NSlater: true})}
              >
Nicole Slater       </h1>
            </Card.Title>
            <br />
            <Card.Text>
             Quick Greeting and alil about our site from you
            </Card.Text>
          </Card.Body>
        </Card>
      <NSlater show={modalShow.NSlater} onHide={() => setModalShow({...modalShow, NSlater: false})} />
        <Card className="card djones-card" style={{ width: '18rem' }}>
          <Card.Body >
            <Card.Title>
              <h1
                className="text-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
                onClick={() => setModalShow({...modalShow, DJones: true})}
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
      <DJones show={modalShow.DJones} onHide={() => setModalShow({...modalShow, DJones: false})} />
        <Card className="card jchua-card" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              <h1
                className="text-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
                onClick={() => setModalShow({...modalShow, JChua: true})}
              >
Jefferson Chua              </h1>
            </Card.Title>
            <br />
            <Card.Text>
             Quick Greeting and alil about our site from you
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <JChua show={modalShow.JChua} onHide={() => setModalShow({...modalShow, JChua: false})} />
    </>
  );
}
