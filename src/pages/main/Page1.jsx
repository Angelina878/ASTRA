import './page1.css';
import Cards from '../main/Cards.jsx';
import CardMove from '../useful_blocks/CardMove.jsx';
import Footer from '../main/Footer.jsx';

function Block({text_big, image, text_small}) {
  return(
    <div className="block-container">
      <div className="big_text">
        <h1>{text_big}</h1>
      </div>
      <div className="image_and_text_container">
        <img src={image} alt="" />
        <p>{text_small}</p>
      </div>
    </div>
  )
}

export default function Section1() {
  // Функция для копирования текста в буфер обмена
  const handleCopy = () => {
    const textToCopy = 'astra@gmail.com';
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('Текст скопирован');
    }).catch(err => {
      console.error('Ошибка при копировании:', err);
    });
  };

  return (
    <div className="section1">
        <div className="welcome">
          <div className="circle"></div>
          <div className="circle"></div>

          <h2>Welcome to ASTRA!</h2>
          <div className="circle"></div>

          <div className="circle"></div>
        </div>
        <div className="container_card_long">
          <div className="card-long">
            <p>
            Агентство Стратегических Технологий и Развития Астрономии (АСТРА) занимается исследованием космоса, разработкой передовых технологий для межпланетных миссий и поддержкой международных проектов по освоению дальнего космоса. Основные направления включают пилотируемые и беспилотные миссии, космическую инженерию и исследование экзопланет. 
            </p>
          </div>
        </div>
        <h2  className="our">Наши изобретения</h2>
        <div className="container_cards">
            <Cards image="../src/images/neiropilot.webp" text="Нейропилот" />
            <Cards image="../src/images/zenit.webp" text='Квантовый двигатель "Зенит"' />
            <Cards image="../src/images/ecosfera.webp" text='Биомикрофлора "ЭкоСфера"' />
        </div>
        <div className="container_block">
          <Block text_big="Защита Земли от астероидов" image="../src/images/welcome.jpg" text_small='– В рамках программы "Щит" АСТРА успешно протестировала систему отклонения потенциально опасных астероидов, направив беспилотный корабль на столкновение с крупным объектом. '/>
        </div>
        {/* next block */}
        <h2>Деятельность компании</h2>
        <CardMove image1="../src/images/welcome.jpg" text1="Межпланетные миссии" text2="Программа колонизации Луны"
        text3="Экзопланетные исследования" text4="Технологии гиперскоростных перелётов" text5="Защита Земли от астероидов" text6="Космическая медицина и биология"/>
        <div className="enter">
          <div className="text_enter">
            <h2>
            Если вам необходимо с нами связаться вы можете написать нам на почту.
            </h2>
          </div>
          <div className="button_container">
            <button className='btn enter' onClick={handleCopy}>astra@gmail.com</button>
          </div>
        </div>
    </div>
  );
}
