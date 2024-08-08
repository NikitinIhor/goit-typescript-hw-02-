import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { searchImagesAPI } from "../../gallerySearchApi";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "../ImageModal/ImageModal";
import css from "./App.module.css";

import { ImageData } from "../../gallerySearchApi";

export default function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [newPage, setNewPage] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ImageData | null>(null);

  const handleSearch = async (newImages: string): Promise<void> => {
    setImages([]);
    setPage(1);
    setTotalPages(0);
    setNewPage(newImages);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (image: ImageData): void => {
    setModal(true);
    setModalImage(image);
  };

  const closeModal = (): void => {
    setModal(false);
  };

  useEffect(() => {
    if (newPage === "") return;

    async function getImages() {
      try {
        setLoading(true);
        setError(false);

        const data = await searchImagesAPI(newPage, page);

        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });

        setTotalPages(data.total_pages);

        if (data.results.length === 0) {
          toast.error(`no matches found for the word: "${newPage}"`);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [page, newPage]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster
        containerStyle={{
          top: 80,
        }}
      />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ImageGallery images={images} openModal={openModal} />
      {images.length > 0 && page < totalPages && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {page >= totalPages && totalPages !== 0 && (
        <div className={css.info}>Sorry, no more images!</div>
      )}
      <ImageModal
        isOpen={modal}
        onRequestClose={closeModal}
        modalImage={modalImage}
      />
    </>
  );
}
