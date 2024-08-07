import { ImageData } from "../../gallerySearchApi";

interface ImageCardProps {
  data: ImageData;
  openModal: (data: ImageData) => void;
}

export default function ImageCard({ data, openModal }: ImageCardProps) {
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
