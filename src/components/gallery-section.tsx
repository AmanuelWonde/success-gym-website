import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import photos from "../contents/gallery";
import { useState } from "react";
const GallerySection = () => {
  const [fullHeight, setFullHeight] = useState(false);
  return (
    <section
      className={` bg-blackSecondary space-y-4 p-4 md:p-16  `}
      id="gallery"
    >
      <h1 className="text-center text-5xl font-bold pb-6 text-white">
        GALLERY
      </h1>
      <div className={`${!fullHeight && "max-h-[300px]"} overflow-y-hidden`}>
        <RowsPhotoAlbum photos={photos} />
      </div>
      {fullHeight ? (
        <p
          onClick={() => setFullHeight(!fullHeight)}
          className=" text-primary cursor-pointer text-lg font-semibold text-center"
        >
          View less images
        </p>
      ) : (
        <p
          onClick={() => setFullHeight(!fullHeight)}
          className=" text-primary py-8 cursor-pointer text-lg font-semibold text-center"
        >
          View all images
        </p>
      )}
    </section>
  );
};

export default GallerySection;
