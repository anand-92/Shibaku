interface Card {
  title: string;
  description: string;
}

interface CardCarouselProps {
  cards: Card[];
}

declare const CardCarousel: React.FC<CardCarouselProps>;

export default CardCarousel;
