import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: void;
}

export default function LoadMoreBtn<LoadMoreBtnProps>({ onLoadMore }) {
  return (
    <button onClick={() => onLoadMore()} className={css.btn}>
      Load more...
    </button>
  );
}
