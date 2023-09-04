import ThumbNail from "./Thumbnail";
import "./VideoThumbNailsList.css";

export default function VideoThumbNailsList({ items, setSearchQuery }) {
  return (
    <div className="thumbnail-list ">
      {items.map((item, index) => (
        <div key={index} onClick={() => selectedVideo(item.id.videoId)}>
          <ThumbNail item={item} />
        </div>
      ))}
    </div>
  );
}
