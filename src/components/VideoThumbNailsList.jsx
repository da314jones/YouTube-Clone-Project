import ThumbNail from "./Thumbnail";
import "./VideoThumbNailsList.css";

export default function VideoThumbNailsList({ items  }) {
  return (
    <div className="thumbnail-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div key={index} onClick={() => selectedVideo(item.id.videoId)}>
          <ThumbNail item={item} />
        </div>
      ))}
    </div>
  );
}
