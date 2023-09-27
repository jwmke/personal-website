import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJSImage";

const ImageMosaic = ({ images, handleClick }: any) => {
    return ( <div>
        <PhotoAlbum
            onClick={handleClick}
            photos={images}
            renderPhoto={NextJsImage}
            rowConstraints={{maxPhotos: 3}}
            layout="rows"
            sizes={{ size: "calc(100vw - 240px)" }}
        />
    </div>
    )
};

export default ImageMosaic;