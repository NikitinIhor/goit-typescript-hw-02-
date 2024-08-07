import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

import { ImageData } from "../../gallerySearchApi";

interface ImageGalleryProps {
  images: ImageData[];
  openModal: () => void;
}

export default function ImageGallery<ImageGalleryProps>({ images, openModal }) {
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
