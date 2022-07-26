import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={css.galleryItem}>
      <img src={src} alt={alt} />
    </li>
  );
};
