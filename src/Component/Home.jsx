import { Image } from "react-bootstrap";
import Footer from "./Footer";
import { useEffect } from "react";
import "./Home.css";

export default function Home({ setSearchQuery, setShowSearchBar }) {
  useEffect(() => {
    setShowSearchBar(false);
    return () => {
      setShowSearchBar(true);
    };
  }, []);

  return (
    <div className="end-container">
      <div className="end-body">
        {/* alternate image color available red or whit background located in public folder*/}
        <Image
          className="enlarged-image-welcome"
          src="/welcome_white_icon.png"
          rounded
          alt="welcome-image"
        />
      </div>
      <Footer setSearchQuery={setSearchQuery} />
    </div>
  );
}
