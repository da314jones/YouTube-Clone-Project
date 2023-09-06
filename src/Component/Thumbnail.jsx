import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import "./ThumbNail.css";

export default function ThumbNail({ item }) {
  return (
    <Container className="thumbnail-item">
      <Row>
        <Col xs={6} md={4}>
            <Image
              className="thumbnail-image"
              src={item.snippet.thumbnails.default.url}
              rounded
              alt={item.snippet.title}
            />
        </Col>
        <Col xs={6} md={8}>
          <p className="thumbnail-p">{item.snippet.title}</p>
        </Col>
      </Row>
    </Container>
  );
}
