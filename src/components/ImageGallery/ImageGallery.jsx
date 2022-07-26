import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImagrGalleryItem';
export const ImageGallery = ({ itemCollection }) => {
  return (
    <ul className={css.gallery}>
      {itemCollection.map(({ id, webformatURL, tags }) => {
        return <ImageGalleryItem key={id} src={webformatURL} alt={tags} />;
      })}
    </ul>
  );
};
