import React, { useState } from 'react';
import styled from 'styled-components';

interface Card {
    title: string;
    description: string;
}

interface CardCarouselProps {
    cards: Card[];
}

const CardCarousel: React.FC<CardCarouselProps> = ({ cards }) => {
    const [currentCard, setCurrentCard] = useState(0);

    const handleNextCard = () => {
        setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    };

    return (
        <Container>
            <CardContainer>
                <Title>{cards[currentCard].title}</Title>
                <Description>{cards[currentCard].description}</Description>
            </CardContainer>
            <ArrowButton className="next" onClick={handleNextCard}>
                &#10095;
            </ArrowButton>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
`;

const CardContainer = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 80%;
  height: 80%;
  text-align: center;
`;

const Title = styled.h3`
  margin-top: 0;
  font-size: 180%;
  color: #555;
`;

const Description = styled.p`
  color: #777;
  font-size: 105%;
  line-height: 1.5;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  font-size: 180%;
  outline: none;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }

  &.prev {
    transform: rotate(180deg);
    margin-right: 10px;
  }

  &.next {
    margin-left: 10px;
  }
`;

export default CardCarousel;
