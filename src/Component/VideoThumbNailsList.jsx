import { Link, useLocation } from "react-router-dom";
import ThumbNail from "./Thumbnail";
import "./VideoThumbNailsList.css";

export default function VideoThumbNailsList({ items  }) {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";
  
  return (
    <div className="thumbnail-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {searchTerm && <h2>Search Results for: {searchTerm}</h2>}
      {items.map((item, index) => (
        <div key={index}>
          <Link to={`/video/${item.id.videoId}`}>
          <ThumbNail item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
}
