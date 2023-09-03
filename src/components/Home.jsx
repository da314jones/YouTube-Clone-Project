import { useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";
import Footer from "./Footer";
import { useEffect } from "react";
import './Home.css'

export default function Home({ setSearchQuery, setShowSearchBar }) {

  useEffect(() => {
    setShowSearchBar(false);
    return() => {
      setShowSearchBar(true);
    }
  }, [])

  return (
    <div className="home-container">
      <div className="body">
        {/* alternate image color available red or whit background located in public folder*/}
      <Image className="enlarged-image" src="/welcome_white_icon.png"  rounded alt="welcome-image" />
      </div>
      <Footer setSearchQuery={setSearchQuery} />
    </div>
  );
}
