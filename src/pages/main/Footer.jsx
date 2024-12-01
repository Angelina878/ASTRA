import './footer.css';

export default function Footer({ onChange }) {
  return (
    <div className="footer">
      <div className="logo_div">
        <a className="logo_footer" href="#" onClick={() => onChange('section1')}></a>
        <hr className="hr_footer" />
      </div>
      <div className="links_f">
        <a href="#" onClick={() => onChange('invention')}>Изобретения</a>
        <a href="#" onClick={() => onChange('history')}>Наша история</a>
        <a href="#" onClick={() => onChange('articles')}>Вакансии</a>
      </div>
      <div className="networks">
        <a href="#"><div className="net youtube"></div></a>
        <a href="#"><div className="net instagram"></div></a>
        <a href="#"><div className="net facebook"></div></a>
        <a href="#"><div className="net twitter"></div></a>
      </div>
    </div>
  );
}
