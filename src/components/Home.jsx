import { useLocation } from "react-router-dom";
import IframePlayer from "./IframePlayer";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Home({items}) {
  console.log(items)
  const location = useLocation();

  return (
    <div>
      <header>
        {/* <IframePlayer /> */}
        <img src="public/welcome_icon.png" alt="welcome-image" />
        </header>
        {location.pathname === '/' && (
          <footer>
            <SearchBar />
          </footer>
        )}
      
    </div>
  );
};
