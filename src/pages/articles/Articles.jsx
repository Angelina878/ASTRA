import './Articles.css';
import { useState } from 'react';

export default function Articles({ user }) {
  // Состояние для текущей выбранной статьи
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Состояние для хранения рейтингов
  const [ratings, setRatings] = useState({});

  // Массив с данными о статьях
  const articles = [
    {
      title: "Солнечные паруса: Новый взгляд на межпланетные исследования с использованием солнечного давления",
      author: "д-р Максим Руденко, АСТРА",
      abstract: "Рассматривается использование солнечных парусов как основного метода двигательной силы для межпланетных аппаратов...",
    },
    {
      title: "Микрогравитация и её влияние на генно-модифицированные растения: Эксперименты на орбитальной станции 'Гелиос'",
      author: "д-р Александр Петров, АСТРА",
      abstract: "Статья посвящена исследованиям, проведённым в рамках программы 'Биосфера' на орбитальной станции 'Гелиос'...",
    },
    {
      title: "Космические базы на Луне: Проблемы и решения в проектировании устойчивых жизнеобеспечивающих систем",
      author: "д-р Сергей Иванов, АСТРА",
      abstract: "В статье рассмотрены технические и экологические проблемы создания постоянных баз на Луне для долгосрочного проживания людей...",
    },
    // Другие статьи...
  ];

  // Функция для отображения контента статьи
  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  // Функция для изменения рейтинга статьи
  const handleRatingChange = (articleTitle, rating) => {
    if (user) {  // Проверка на наличие пользователя
      setRatings((prevRatings) => ({
        ...prevRatings,
        [articleTitle]: rating
      }));
    } else {
      alert("Пожалуйста, войдите в систему, чтобы поставить оценку.");
    }
  };

  // Компонент для отображения звездного рейтинга
  const StarRating = ({ articleTitle, currentRating }) => {
    const stars = [1, 2, 3, 4, 5]; // Массив из 5 звезд
    return (
      <div className="star-rating">
        {stars.map((star) => (
          <span
            key={star}
            className={`star ${star <= currentRating ? 'filled' : ''}`}
            onClick={() => handleRatingChange(articleTitle, star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="articles-container">
      {/* Левая часть: список статей */}
      <div className="articles-list">
        {articles.map((article, index) => (
          <div
            key={index}
            className="article-link"
            onClick={() => handleArticleClick(article)}
          >
            {article.title}
          </div>
        ))}
      </div>

      {/* Правая часть: Контент выбранной статьи */}
      <div className="article-content">
        {selectedArticle ? (
          <>
            <h2>{selectedArticle.title}</h2>
            <p><strong>Автор:</strong> {selectedArticle.author}</p>
            <p><strong>Аннотация:</strong> {selectedArticle.abstract}</p>

          </>
        ) : (
          <p id="articles">Выберите статью из списка, чтобы увидеть подробности.</p>
        )}
      </div>
    </div>
  );
}
