import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import "../TeamInfo.css";

export default function DJones({ show, onHide }) {

  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
    >
      <Modal.Header className="flex justify-between" >
        <Modal.Title id="contained-modal-title-vcenter" className="flex-1">
          Dwayne Jones
        </Modal.Title>
        <Button className="custom-close-button bg-gray-500 py-2 px-6 text-white font-bold rounded" onClick={onHide}>
          Close
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Image
          src="https://avatars.githubusercontent.com/u/122707430?v=4"
          className="circle-image"
          roundedCircle
        />
        <h4>FullStack Engineer</h4>
        <p>
          {/* Exemplary military discipline and unwavering commitment to following
          precise orders and instructions Astute leader with a proven track
          record of success as a Foreman and Construction Contractor Owner,
          guiding teams to achieve outstanding results Proficient in the art of
          crafting captivating and responsive web designs, employing HTML, CSS,
          JavaScript, and cutting-edge frameworks like React, Profound expertise
          in back-end development, harnessing the power of modern frameworks and
          languages such as Node.js, bring dynamic functionality to life Mastery
          in the realm of database management, adept at designing schemas,
          executing intricate queries, and optimizing performance with databases
          like Adept in the art of version control with an intimate
          understanding of Git, ensuring seamless collaboration and efficient
          code management Agile practitioner, well versed in agile development
          methodologies to enhance productivity, efficiency, and project
          delivery Diligent guardian of web security, implementing robust
          measures and adhering to best practices to safeguard digital assets
          Innate problem solver, equipped with analytical prowess to swiftly
          identify and resolve complex technical challenges Exceptional
          communication and collaboration skills, fostering a harmonious
          environment within cross-functional teams for seamless workflow and
          project success */}
        </p>
        <div className="mt-4">
        <Button
          className="one bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow"
          href="https://www.linkedin.com/in/dwayne-a-j-2772a6274"
          variant="primary"
        >LinkedIn</Button>
        <Button
          className="two bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded shadow"
          href="https://github.com/da314jones"
          variant="primary"
        >GitHub</Button>
        <Button
          className="three bg-blue-500 mx-4 hover:bg-green-700 text-white font-bold py-2 px-10 rounded shadow"
          href="mailto:dwaynejones@pursuit.org"
          variant="primary"
        >email</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
