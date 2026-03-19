import Icon from "@/components/ui/icon";

export default function ContactSection() {
  return (
    <>
      {/* CONTACT */}
      <section className="section-contact" id="contact">
        <div className="contact-glow-1" />
        <div className="contact-glow-2" />
        <div className="container-inner" style={{ textAlign: "center" }}>
          <div className="section-label light" style={{ display: "inline-block" }}>Контакты</div>
          <h2 className="section-title font-oswald contact-title">
            Хотите такие же<br />результаты?
          </h2>
          <p className="contact-desc">
            Оставьте заявку — разберём вашу клинику, найдём точки потерь<br />и покажем, сколько можно заработать на автоматизации
          </p>
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Ваше имя" className="form-input" />
              <input type="tel" placeholder="Телефон" className="form-input" />
            </div>
            <input type="text" placeholder="Название клиники" className="form-input" />
            <button type="submit" className="form-btn font-oswald">
              Получить разбор клиники бесплатно
              <Icon name="ArrowRight" size={20} />
            </button>
          </form>
          <p className="contact-note">Без спама. Ответим в течение 2 часов в рабочее время.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="case-footer">
        <div className="container-inner footer-inner">
          <span>© 2024 · Автоматизация стоматологических клиник</span>
          <span className="footer-link">Политика конфиденциальности</span>
        </div>
      </footer>
    </>
  );
}
