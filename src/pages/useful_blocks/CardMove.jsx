import { useState } from 'react';
import './cardMove.css';

export default function CardMove({ image1, text1, text2, text3, text4, text5, text6 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { image: image1, text: text1 },
        { image: image1, text: text2 },
        { image: image1, text: text3 },
        { image: image1, text: text4 },
        { image: image1, text: text5 },
        { image: image1, text: text6 },
    ];

    const scrollLeft = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const scrollRight = () => {
        if (currentIndex < cards.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const visibleCards = cards;

    return (
        <div className="MoveContainer">
            
            
            <button className="arrow left" onClick={scrollLeft}>
                ⇜
            </button>

            <div className="MoveContainer_cards_wrapper">
                <div
                    className="MoveContainer_cards"
                    style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
                >
                    {visibleCards.map((card, index) => (
                        <div key={index} className="MoveCard">
                            <img src={card.image} alt="Card Image" />
                            <p>{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button className="arrow right" onClick={scrollRight}>
                ⇝
            </button>
        </div>
    );
}
