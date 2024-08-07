import { ImageData } from "../../gallerySearchApi";

interface ImageCardProps {
  data: ImageData;
  openModal: () => void;
}

export default function ImageCard<ImageCardProps>({ data, openModal }) {
  return (
    <div onClick={() => openModal(data)}>
      <img
        src={data.urls.small}
        alt={data.alt_description}
        width={300}
        height={200}
      />
    </div>
  );
}
