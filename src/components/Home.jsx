import { useLocation } from "react-router-dom";
import IframePlayer from "./IframePlayer";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Home({}) {
  const location = useLocation();

  return (
    <div>
      <header>
        <IframePlayer />
        {location.pathname === '/' && (
          <footer>
            <SearchBar />
          </footer>
        )}
      </header>
    </div>
  );
};
