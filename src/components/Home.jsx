import { useLocation } from "react-router-dom";
import IframePlayer from "./IframePlayer";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Home({ setSearchQuery }) {
  const location = useLocation();

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <img src="public/welcome_icon.png" alt="welcome-image" />
      <footer>
        <SearchBar setSearchQuery={setSearchQuery} />
      </footer>
    </div>
  );
}
