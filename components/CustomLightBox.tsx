import Lightbox from "react-spring-lightbox";

const CustomLightBox = ({
    images,
    currentImageIndex,
    setCurrentIndex,
    isOpen,
    onClose
  }: any) => {

    const gotoPrevious = () =>
      currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);
  
    const gotoNext = () =>
      currentImageIndex + 1 < images.length &&
      setCurrentIndex(currentImageIndex + 1);
  
    return (
      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        style={{ background: "rgba(0, 0, 0, .7)" }}
        onClose={onClose}
        singleClickToZoom
      />
    )
};

export default CustomLightBox;