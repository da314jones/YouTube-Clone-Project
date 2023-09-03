import React from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import './ThumbNail.css'

export default function ThumbNail({ item }) {
  return (
    <Container className="thumbnail-item">
      <Row>
        <Col xs={6} md={4}>
          <Link to={`/videos/${item.id.videoId}`} >
            <Image
            className="thumbnail-image"
              src={item.snippet.thumbnails.default.url}
              rounded
              alt={item.snippet.title}
            />
          </Link>
        </Col>
        <Col xs={6} md={8}>
          <p>{item.snippet.title}</p>
          <p>{item.snippet.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
