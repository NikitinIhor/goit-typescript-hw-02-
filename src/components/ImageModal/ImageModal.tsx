import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

import { ImageData } from "../../gallerySearchApi";

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  modalImage: ImageData;
}

export default function ImageModal<ImageModalProps>({
  isOpen,
  onRequestClose,
  modalImage,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Photo Modal"
      className={css.modal}
      overlayClassName={css.overlay}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={500}
    >
      {modalImage && (
        <>
          <img
            src={modalImage.urls.regular}
            alt={modalImage.description}
            className={css.modalImage}
          />
          <div className={css.info}>
            <p className={css.name}>{modalImage.user.first_name}</p>
            <p className={css.bio}>{modalImage.user.bio}</p>
          </div>
        </>
      )}
    </Modal>
  );
}
