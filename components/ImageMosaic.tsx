import Gallery from "react-photo-gallery";

const ImageMosaic = ({ images, handleClick }) => {
    return ( <div>
        <Gallery
            columns={containerWidth => {
                let columns = 1;
                if (containerWidth >= 500) columns = 2;
                if (containerWidth >= 900) columns = 3;

                return columns;
            }}
            onClick={handleClick}
            photos={images}
            margin={6}
            direction="row"
        />
    </div>
    )
};

export default ImageMosaic;