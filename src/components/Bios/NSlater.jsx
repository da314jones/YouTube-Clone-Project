import React from "react";
import { Modal, Button, Image } from "react-bootstrap";
import "../TeamInfo.css";

export default function NSlater({ show, onHide, showDJonesModal, showJChuaModal }) {
  return (
    <Modal
      show={show}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
    >
      <Modal.Header className="flex justify-between">
        <Modal.Title id="contained-modal-title-vcenter" className="flex-1">
          Nicole Slater
        </Modal.Title>
        <Button
          className="custom-close-button bg-gray-500 py-2 px-6 text-white font-bold rounded"
          onClick={onHide}
        >
          Close
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Image
          src="https://avatars.githubusercontent.com/u/131828968?s=48&v=4"
          className="circle-image"
          roundedCircle
        />
        <h4>FullStack Engineer</h4>
        <p>SomeThings about you and you experience; goals, traits etc...</p>
        <div className="mt-4">
          <Button
            className="one bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow"
            href=""
            variant="primary"
          >
            LinkedIn
          </Button>
          <Button
            className="two bg-blue-500 mx-4 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded shadow"
            href=""
            variant="primary"
          >
            GitHub
          </Button>
          <Button
            className="three bg-blue-500 mx-4 hover:bg-green-700 text-white font-bold py-2 px-10 rounded shadow"
            href=""
            variant="primary"
          >
            email
          </Button>
          <div className="flex justify-end">
          <a className="mr-4 text-gray-500 py-1" href="#djones-card" onClick={showDJonesModal}>
            see Dwaynes' info
          </a>
          <a href="#jchua-card" className="text-gray-500 py-1" onClick={showJChuaModal}>
            see Jeffersons' info
          </a>
        </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
