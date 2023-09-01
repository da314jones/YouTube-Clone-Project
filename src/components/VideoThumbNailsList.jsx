import ThumbNail from "./Thumbnail";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function VideoThumbNailsList({ items, setSearchQuery }) {

  return (
    <div className="thumbnail-list">
      <header>
        <NavBar />
        <SearchBar setSearchQuery={setSearchQuery} />
      </header>
      {items.map((item, index) => (
        <ThumbNail key={item.id} item={item} />
      ))}
    </div>
  );
}
