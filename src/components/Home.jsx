import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Home({ setSearchQuery }) {

  return (
    <>
      <header className="">
        <NavBar />
      </header>
      <img src="/welcome_icon.png" alt="welcome-image" />
      <footer className="">
        <SearchBar setSearchQuery={setSearchQuery} />
      </footer>
    </>
  );
}
