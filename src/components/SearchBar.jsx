import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./Search.css";

export default function SearchBar({ setSearchQuery }) {
  const [localQuery, setLocalQuery] = useState("");
  const [buttonLabel, setButtonLabel] = useState("SEARCH FOR VIDEO");
  const navigate = useNavigate();

  const handleSearch = () => {
    setSearchQuery(localQuery);
    navigate("/thumbnails");
    setButtonLabel(`Search Results for: ${localQuery}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container flex bg-custom-gray">
      <div className="center-label inline">
        <Button
          className="justify-center items-center  hover:bg-blu-500 hover:text-indigo-500 focus:outline-none focus:border-purple-900 focus:ring  "
          size="lg"
          id="button-addon2"
          onClick={handleSearch}
          type="button"
        >
          {buttonLabel}{" "}
        </Button>
      </div>
      <InputGroup className="form-control-lg ml-auto">
        <Form.Control
          className="search_input text-black-600"
          type="text"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search"
          aria-label="SEARCH "
          aria-describedby="button-addon2"
        />
      </InputGroup>
    </div>
  );
}
