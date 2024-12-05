import './header.css';

export default function Header({ active, onChange, user }) {
  const links = [
    { label: 'Изобретения', target: 'invention' },
    { label: 'История', target: 'history' },
    { label: 'Статьи', target: 'articles' },
  ];

  return (
    <div className="head">
      <a className="logo" href="#"></a>
      {/* Генерация ссылок */}
      {links.map(({ label, target }) => {
        if (active !== target) {
          return (
            <a key={target} onClick={() => onChange(target)} href="#">
              {label}
            </a>
          );
        }
        return null;
      })}
      {active !== 'section1' && (
        <a onClick={() => onChange('section1')} href="#">Главная</a>
      )}
    </div>
  );
}
