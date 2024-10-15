import { useState } from "react";
import { CarouselContainer, CarouselImage } from "./styles";
import { PaginationButtons } from "../PaginationButtons";

interface CarouselProps {
  pictures: {
    filePath: string;
    publicId: string;
  }[];
}

function Carousel({ pictures }: CarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  return (
    <CarouselContainer>
      <CarouselImage
        src={`${process.env.REACT_APP_CLOUDINARY_URL}${pictures[currentIndex].publicId}`}
        alt={`Imagem ${currentIndex + 1}`}
      />
      {total > 1 && (
        <PaginationButtons
          current={currentIndex + 1}
          total={total}
          backFunction={() => setCurrentIndex(currentIndex - 1)}
          forwardFunction={() => setCurrentIndex(currentIndex + 1)}
        />
      )}
    </CarouselContainer>
  );
}

export default Carousel;
