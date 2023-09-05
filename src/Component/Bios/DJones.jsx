import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../TeamInfo.css";

export default function DJones({ show, onHide, showNSlaterModal, showJChuaModal }) {

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
    >
      <Modal.Header className="flex justify-between font-bold">
        <Modal.Title id="contained-modal-title-vcenter" className="flex-1">
          Dwayne Jones
        </Modal.Title>
        <Button
          className="custom-close-button bg-gray-500 py-2 px-4 text-white font-bold rounded"
          onClick={onHide}
        >
          Close
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Image
          src="https://avatars.githubusercontent.com/u/122707430?v=4"
          className="circle-image"
          roundedCircle
        />
        <h4 className="font-bold">FullStack Engineer</h4>
        <div className="modal-text">
          <p className="">
            "From disciplined military roots to the dynamic world of web
            development, I'm weaving a story of passion, precision, and tech
            prowess."
            <br />
            <br />
            Military-trained discipline; committed to precision. Proven
            leadership as a Foreman and Contractor Owner. Mastery in front-end:
            HTML, CSS, JavaScript, React. Deep expertise in back-end development
            with Node.js. Database management and performance optimization
            skills. Proficient in Git for efficient code management. Agile
            development practitioner. Committed to web security best practices.
            Team player with excellent communication skills.
            <br />
            {/* "About Our Group Project"

                Content:
                "Working closely with a talented team, we've combined our diverse skills and experiences to create this application. <br />
                 From brainstorming to execution, our collaborative effort ensures that each feature is finely tuned and user-friendly. <br />
                  Check out our team's profiles to explore more of our individual contributions and expertise." */}
          </p>
        </div>
        <div className="mt-4">
          <Button
            className="one bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow"
            href="https://www.linkedin.com/in/dwayne-a-j-2772a6274"
            variant="primary"
          >
            LinkedIn
          </Button>
          <Button
            className="two bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded shadow"
            href="https://github.com/da314jones"
            variant="primary"
          >
            GitHub
          </Button>
          <Button
            className="three bg-blue-500 mx-4 hover:bg-green-700 text-white font-bold py-2 px-8 rounded shadow"
            href="mailto:dwaynejones@pursuit.org"
            variant="primary"
          >
            email
          </Button>
        </div>
        <div className="flex justify-end">
          <a className="mr-4 text-gray-500 py-1" href="#nslater-card" onClick={showNSlaterModal}>
            see Nicoles' info
          </a>
          <a href="#jchua-card" className="text-gray-500 py-1" onClick={showJChuaModal}>
            see Jeffersons' info
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
}
