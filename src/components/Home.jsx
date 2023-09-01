import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Home({ setSearchQuery }) {

  return (
    <>
      <header className="w-full">
        <NavBar />
      </header>
      <img src="/welcome_icon.png" alt="welcome-image" />
      <footer className="w-full">
        <SearchBar setSearchQuery={setSearchQuery} />
      </footer>
    </>
  );
}
