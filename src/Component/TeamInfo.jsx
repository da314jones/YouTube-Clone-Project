import React, { useState } from "react";
import NSlater from "./Bios/NSlater";
import DJones from "./Bios/DJones";
import JChua from "./Bios/JChua";
import { Card } from "react-bootstrap";
import "./TeamInfo.css";

export default function TeamInfo() {
  const [modalShow, setModalShow] = useState({
    DJones: false,
    NSlater: false,
    JChua: false,
  });

  const showNSlaterModal = () => {
    setModalShow({ DJones: false, NSlater: true, JChua: false });
  };

  const showDJonesModal = () => {
    setModalShow({ DJones: true, NSlater: false, JChua: false });
  };

  const showJChuaModal = () => {
    setModalShow({ DJones: false, NSlater: false, JChua: true });
  };

  const closeModal = () => {
    setModalShow({ DJones: false, NSlater: false, JChua: false });
  };

  return (
    <>
      <div className="team-info-container flex">
        <Card className="card nslater-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <h1
                className="text-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
                onClick={() => setModalShow({ ...modalShow, NSlater: true })}
              >
                Nicole Slater{" "}
              </h1>
            </Card.Title>
            <br />
            <Card.Text className="nslater-card-text">
            As a Full-Stack Web Developer, I'm dedicated to shaping exceptional digital journeys. Thank you and please enjoy!              <br />
              <br />
              Click my name to learn more about my journey, skills, and
              contributions.
            </Card.Text>
          </Card.Body>
        </Card>
        <NSlater
          show={modalShow.NSlater}
          onHide={() => setModalShow({ ...modalShow, NSlater: false })}
          showDJonesModal={showDJonesModal}
          showJChuaModal={showJChuaModal}
        />
        <Card className="card djones-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <h1
                className="text-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
                onClick={() => setModalShow({ ...modalShow, DJones: true })}
              >
                Dwayne Jones
              </h1>
            </Card.Title>
            <br />
            <Card.Text className="djones-card-text">
              Crafting digital experiences with my talented team. Dive into our
              latest collaborative effort. <br /> Thank you for stopping by!
              <br />
              <br /> Click my name to learn more about my journey, skills, and
              contributions.
            </Card.Text>
          </Card.Body>
        </Card>
        <DJones
          show={modalShow.DJones}
          onHide={() => setModalShow({ ...modalShow, DJones: false })}
          showNSlaterModal={showNSlaterModal}
          showJChuaModal={showJChuaModal}
        />
        <Card className="card jchua-card" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>
              <h1
                className="text-3xl hover:bg-blue-500 hover:text-white hover:shadow-lg cursor-pointer"
                onClick={() => setModalShow({ ...modalShow, JChua: true })}
              >
                Jefferson Chua{" "}
              </h1>
            </Card.Title>
            <br />
            <Card.Text className="jchua-card-text">
            Featuring what we have learned so far and we faced the challenge head on. Come check us out.              <br />
              <br />
              Click my name to learn more about my journey, skills, and
              contributions.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <JChua
        show={modalShow.JChua}
        onHide={() => setModalShow({ ...modalShow, JChua: false })}
        showNSlaterModal={showNSlaterModal}
        showDJonesModal={showDJonesModal}
      />
    </>
  );
}
