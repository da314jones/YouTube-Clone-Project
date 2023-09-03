import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

export default function Djones({ show }) {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Dwayne Jones
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src="https://avatars.githubusercontent.com/u/122707430?v=4"
          className="circle-image"
          roundedCircle
        />
        <h4>FullStack Emgineer</h4>
        <p>
          You have been looking at one of our first major team projects. When
          you are done here please take a look at our personal sites and look at
          some more of our work.
        </p>
        <Button
          className="bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow btn-lg"
          href="https://www.linkedin.com/in/dwayne-a-j-2772a6274"
          variant="primary"
        ></Button>
        \{" "}
        <Button
          className="bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
          href="https://github.com/da314jones"
          variant="primary"
        ></Button>
        <Button
          className="bg-blue-500 mx-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow"
          href="mailto:dwaynejones@pursuit.org"
          variant="primary"
        ></Button>
      </Modal.Body>
    </Modal>
  );
}
