import { useState } from 'react';
import './App.css';
import Header from './pages/main/Header.jsx';
import Section1 from './pages/main/Page1.jsx';
import Invention from './pages/invention/Invention.jsx';
import History from './pages/history/History.jsx';
import Articles from './pages/articles/Articles.jsx';
import Footer from './pages/main/Footer.jsx';

export default function App() {
  const [tab, setTab] = useState('section1'); // Состояние для текущей страницы
  const [user, setUser] = useState(null); // Храним пользователя, если вошел

  // Функция для входа (если нужно, можно использовать, но она больше не требуется для регистрации)
  const handleLogin = (name) => {
    setUser(name); // Сохраняем имя пользователя
    setTab('account'); // Переключаем вкладку на "Аккаунт"
  };

  // Функция для выхода
  const handleLogout = () => {
    setUser(null); // Очищаем данные пользователя
    setTab('section1'); // Переключаем вкладку на главную
  };

  return (
    <div className="app">
      <Header active={tab} onChange={setTab} />
      <main>
        {tab === 'section1' && <Section1 />}
        {tab === 'invention' && <Invention />}
        {tab === 'history' && <History />}
        {tab === 'articles' && <Articles user={user} />}
        {/* Убираем ссылки на регистрацию и аккаунт */}
      </main>
      <Footer onChange={setTab} />

    </div>
  );
}
