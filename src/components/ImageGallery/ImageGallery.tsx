import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

import { ImageData } from "../../gallerySearchApi";

interface ImageGalleryProps {
  images: ImageData[];
  openModal: (image: ImageData) => void;
}

export default function ImageGallery({ images, openModal }: ImageGalleryProps) {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard data={image} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}
