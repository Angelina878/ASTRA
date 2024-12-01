import './history.css';

export default function History() {
  return (
    <div className="history">
      <h1 className="history-title">История компании АСТРА</h1>
      
      <section className="history-content">
        <p>
          Компания АСТРА была основана в 2023 году группой амбициозных ученых, инженеров и предпринимателей, стремящихся изменить будущее человечества в космосе. Идея создания компании возникла в результате закрытого научного форума, посвященного вопросам освоения космоса, который прошел в Москве в конце 2022 года. В нем участвовали ведущие специалисты из различных областей — от астрофизики до нанотехнологий, а также представители нескольких мировых государств, заинтересованных в будущем космических исследований. Вдохновленные научными достижениями и растущими возможностями для освоения дальнего космоса, эти люди решили объединить усилия и создать компанию, которая будет работать на стыке науки, технологий и предпринимательства.
        </p>

        <h2 className="history-subtitle">Основатели компании:</h2>
        
        <ul className="founders-list">
          <li><strong>Дмитрий Волков</strong> — бывший инженер НАСА и ведущий разработчик космических технологий.</li>
          <li><strong>Елена Лебедева</strong> — биолог и генный инженер, привнесла идеи создания устойчивых экосистем для космических станций.</li>
          <li><strong>Алексей Руденко</strong> — эксперт в области робототехники и автономных систем, возглавил проект по разработке роботизированных исследовательских аппаратов.</li>
        </ul>
        
        <h2 className="history-subtitle">Этапы развития:</h2>

        <div className="timeline">
          <div className="timeline-item">
            <h3>2023: Основание АСТРА</h3>
            <p>Компания была основана с целью стать мировым лидером в области космических технологий...</p>
          </div>
          <div className="timeline-item">
            <h3>2025: Запуск первой орбитальной лаборатории</h3>
            <p>АСТРА запускает свою первую орбитальную лабораторию "Гелиос"...</p>
          </div>
          <div className="timeline-item">
            <h3>2027: Разработка нейропилотной системы</h3>
            <p>Компания презентует нейропилотную систему для космических кораблей...</p>
          </div>
          {/* Добавьте остальные этапы по аналогии */}
        </div>
        
        <h2 className="history-subtitle">Будущее АСТРА:</h2>
        <p>
          К 2040 году АСТРА планирует стать основным игроком на мировом рынке космических технологий...
        </p>
      </section>
    </div>
  );
}
