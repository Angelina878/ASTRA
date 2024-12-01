// src/Cards.jsx
import './cards.css'
export default function Cards({ image, text }) {
    return (
        <div className="container_cards">
            <div className="card">
                <img src={image} alt="Card Image" />
                <p>{text}</p>
            </div>
        </div>
    );
}
