import React from "react";
import { Card } from "react-bootstrap";

export default function TeamInfo() {
  return (
    <div className="team-info-container flex justify-between space-x-6">
      <Card className="card mx-2 p-4">Nicole Slater</Card>
      <Card className="card mx-2 p-4">Dwayne Jones</Card>
      <Card className="card mx-2 p-4">Jefferson Chua</Card>
    </div>
  );
}
