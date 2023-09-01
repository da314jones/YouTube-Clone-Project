import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Home({ setSearchQuery }) {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <img src="/welcome_icon.png" alt="welcome-image" />
      <footer>
        <SearchBar setSearchQuery={setSearchQuery} />
      </footer>
    </div>
  );
}
