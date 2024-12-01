import { useState } from 'react';
import './invention.css';

function Neiropilot() {
  return (
    <div className="inf neiropilot">
      <p>
        <h4>Нейропилот</h4>
        – Уникальная система управления космическими кораблями, позволяющая пилотировать их с помощью мыслей. Специальный интерфейс считывает нейронные импульсы и мгновенно передаёт команды кораблю, что делает управление быстрее и точнее, чем при использовании традиционных систем.
      </p>
      <div className="img_inf neiro_img"></div>
    </div>
  );
}

function Zenit() {
  return (
    <div className="inf zenit">
      <p>
        <h4>Квантовый двигатель "Зенит"</h4>
        – Революционная разработка, основанная на энергии квантовой запутанности. Двигатель позволяет кораблям перемещаться со скоростью, превышающей световую, сокращая время полётов между планетами и звёздными системами.
      </p>
      <div className="img_inf zenit_img"></div>
    </div>
  );
}

function EcoSfera() {
  return (
    <div className="inf ecosfera">
      <p>
        <h4>Биомикрофлора "ЭкоСфера"</h4>
        – Уникальный набор биологических организмов, способных преобразовывать углекислый газ в кислород и создавать замкнутую экосистему в герметичных помещениях.
      </p>
      <div className="img_inf eco_img"></div>
    </div>
  );
}

export default function Invention() {
  // Изначально показываем "Нейропилот"
  const [currentContent, setCurrentContent] = useState('neiropilot');

  // Обработчик кликов
  const handleLinkClick = (content) => {
    setCurrentContent(content);
  };

  // Функция для рендеринга контента в зависимости от состояния
  const renderContent = () => {
    switch (currentContent) {
      case 'neiropilot':
        return <Neiropilot />;
      case 'zenit':
        return <Zenit />;
      case 'ecosfera':
        return <EcoSfera />;
      default:
        return null;  // Когда состояние null, ничего не отображаем
    }
  };

  return (
    <div className="invention">
      <div className="content">
        <a href="#" onClick={() => handleLinkClick('neiropilot')}>Нейропилот →</a>
        <a href="#" onClick={() => handleLinkClick('zenit')}>Квантовый двигатель "Зенит" →</a>
        <a href="#" onClick={() => handleLinkClick('ecosfera')}>Биомикрофлора "ЭкоСфера" →</a>
      </div>
      <div className="information">
        {renderContent()} {/* Показываем контент, если он выбран */}
      </div>
    </div>
  );
}
