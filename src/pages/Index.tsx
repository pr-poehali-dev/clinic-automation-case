import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t: number | null = null;
    const run = (ts: number) => {
      if (!t) t = ts;
      const p = Math.min((ts - t) / duration, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(e * target));
      if (p < 1) requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }, [target, duration, start]);
  return count;
}

function AnimNum({ value, suffix }: { value: number; suffix: string }) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, 1600, inView);
  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      {count.toLocaleString("ru-RU")}{suffix}
    </span>
  );
}

const FinanceTable = ({
  title,
  badge,
  badgeColor,
  revenue,
  rows,
  totalExpenses,
  profit,
  margin,
  note,
}: {
  title: string;
  badge: string;
  badgeColor: string;
  revenue: string;
  rows: [string, string][];
  totalExpenses: string;
  profit: string;
  margin: string;
  note?: string;
}) => {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      className="fin-table-wrap"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.7s ease",
      }}
    >
      <div className="fin-table-header">
        <span className={`fin-badge ${badgeColor}`}>{badge}</span>
        <h3>{title}</h3>
        <div className="fin-revenue">Выручка: <strong>{revenue}</strong></div>
      </div>
      <table className="fin-table">
        <tbody>
          {rows.map(([label, val], i) => (
            <tr key={i}>
              <td>{label}</td>
              <td>{val}</td>
            </tr>
          ))}
          <tr className="fin-total">
            <td>Итого расходы</td>
            <td>{totalExpenses}</td>
          </tr>
        </tbody>
      </table>
      <div className="fin-profit">
        <div>
          <span>Чистая прибыль</span>
          <strong>{profit}</strong>
        </div>
        <div>
          <span>Маржа</span>
          <strong>{margin}</strong>
        </div>
      </div>
      {note && <div className="fin-note">{note}</div>}
    </div>
  );
};

export default function Index() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 120); }, []);
  const { ref: reviewRef, inView: reviewInView } = useInView(0.2);

  const anim = (delay: number) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s ease ${delay}ms`,
  });

  return (
    <div className="case-page font-golos">

      {/* NAV */}
      <nav className="case-nav">
        <div className="nav-inner">
          <span className="nav-tag">
            <span className="nav-dot" />
            Кейс · Стоматология
          </span>
          <a href="#contact" className="nav-cta">Хочу так же →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid" />
        </div>
        <div className="hero-inner">
          <div className="hero-badge" style={anim(100)}>
            <span className="badge-dot" />
            Стоматологическая клиника · 4 кресла
          </div>
          <h1 className="hero-title font-oswald" style={anim(250)}>
            Убрали координаторов<br />и РОПа, повысили<br />
            <span className="title-accent">конверсию и прибыль</span>
          </h1>
          <p className="hero-sub" style={anim(400)}>
            За счёт ИИ-ассистента и системной автоматизации ключевых точек прибыли — без роста управленческого слоя
          </p>
          <div className="hero-stats" style={anim(550)}>
            <div className="hero-stat">
              <strong>+117%</strong>
              <span>рост чистой прибыли</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>17%</strong>
              <span>маржа (было 3,8%)</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>+550 000 ₽</strong>
              <span>прибыли в месяц</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <Icon name="ChevronDown" size={22} />
        </div>
      </section>

      {/* PARADOX */}
      <section className="section-problem">
        <div className="container-inner">
          <FadeUp>
            <div className="section-label">Предпосылки</div>
            <h2 className="section-title font-oswald">
              Парадокс стоматологии
            </h2>
            <p className="section-desc" style={{ maxWidth: 680 }}>
              Клиника может быть полной пациентов, врачи — загружены, а прибыль — минимальная или вовсе отсутствует.<br /><br />
              Мы долго жили внутри этого парадокса.
            </p>
          </FadeUp>

          <div className="problems-grid">
            <FadeUp delay={0}>
              <div className="problem-item" style={{ opacity: 1, transform: "none" }}>
                <div className="problem-icon">🦷</div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8 }}>Зубная формула</strong>
                  <p>Заполнялась частично или формально. Данные терялись. Дальнейшие рекомендации не формировались.<br /><em style={{ color: "var(--emerald)", fontSize: 13 }}>А ведь прибыль клиники начинается именно с неё.</em></p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="problem-item" style={{ opacity: 1, transform: "none" }}>
                <div className="problem-icon">📋</div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8 }}>История болезни</strong>
                  <p>Из 10 пациентов на осмотре: 8 нуждаются в терапии, 6 — в ортопеде/ортодонте, 4 — в хирурге-имплантологе. При плохо заполненной истории — клиника теряет деньги и создаёт юридические риски.</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={200}>
              <div className="problem-item" style={{ opacity: 1, transform: "none" }}>
                <div className="problem-icon">📄</div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8 }}>План лечения</strong>
                  <p>Каждый врач составлял по-своему. Не было стандарта. Пациенту сложно было понять объём и ценность лечения. Упаковка плана часто отсутствовала.<br /><em style={{ color: "var(--emerald)", fontSize: 13 }}>Итог — низкая конверсия в повторный приём.</em></p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={300}>
              <div className="problem-item" style={{ opacity: 1, transform: "none" }}>
                <div className="problem-icon">👥</div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8 }}>Координаторы — первое «решение»</strong>
                  <p>Выручка выросла на 20–25%. Но вскрылась реальность: зарплаты координаторов + рост затрат на врачей + РОП для контроля над координаторами. <em style={{ color: "#fca5a5", fontSize: 13 }}>Зарабатывали все, кроме клиники.</em></p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* INSIGHT */}
      <section className="section-insight">
        <div className="container-inner">
          <FadeUp>
            <div className="insight-card">
              <div className="insight-icon">💡</div>
              <h3 className="font-oswald">Ключевой инсайт</h3>
              <p>
                Мы лечили последствия, а не причину.<br />
                Проблема была не в людях — а в <strong>отсутствии механизма</strong>, который стандартизирует процессы, снижает зависимость от человеческого фактора и работает одинаково у всех врачей.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section-solution">
        <div className="container-inner">
          <FadeUp>
            <div className="section-label accent">Решение</div>
            <h2 className="section-title font-oswald">
              Системная автоматизация<br />ключевых точек прибыли
            </h2>
          </FadeUp>
          <div className="solutions-grid">
            <FadeUp delay={0}>
              <div className="solution-card" style={{ opacity: 1, transform: "none" }}>
                <div className="solution-num">🤖</div>
                <h3>ИИ-ассистент Федя</h3>
                <p>Помогает корректно заполнять зубную формулу, структурировать историю болезни, автоматически формировать рекомендации к смежным специалистам и собирать стандартизированный план лечения.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="solution-card" style={{ opacity: 1, transform: "none" }}>
                <div className="solution-num">🔗</div>
                <h3>Интеграция с Future Care 360</h3>
                <p>Упаковывает план лечения для пациента, сопровождает коммуникациями, конвертирует рекомендации в повторные приёмы — без участия координаторов.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* RESULTS TEXT */}
      <section className="section-results-text">
        <div className="container-inner">
          <FadeUp>
            <div className="section-label">Результаты</div>
            <h2 className="section-title font-oswald">
              Что изменилось<br />на практике
            </h2>
          </FadeUp>
          <div className="results-list">
            {[
              ["✅", "Отказались от координаторов"],
              ["✅", "Отказались от РОПа"],
              ["✅", "Процессы стали едиными и управляемыми"],
              ["✅", "Снизилась зависимость от конкретных сотрудников"],
              ["✅", "Выросла конверсия в повторные приёмы"],
              ["✅", "Прибыль начала оставаться в клинике, а не растворяться в управленческих надстройках"],
            ].map(([icon, text], i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="result-row" style={{ opacity: 1, transform: "none" }}>
                  <span className="result-icon">{icon}</span>
                  <span>{text}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCE TABLES */}
      <section className="section-finance">
        <div className="metrics-glow" />
        <div className="container-inner">
          <FadeUp>
            <div className="section-label light">Цифры</div>
            <h2 className="section-title font-oswald metrics-title">
              Экономическая модель<br />клиники 4 кресла
            </h2>
          </FadeUp>
          <div className="fin-tables-grid">
            <FinanceTable
              title="До автоматизации"
              badge="Базовая модель"
              badgeColor="badge-neutral"
              revenue="3 200 000 ₽"
              rows={[
                ["Врачи 25%", "800 000 ₽"],
                ["Лаборатория 15%", "480 000 ₽"],
                ["Расходники 15%", "480 000 ₽"],
                ["Младший медперсонал", "325 000 ₽"],
                ["Администраторы", "150 000 ₽"],
                ["Бухгалтер", "40 000 ₽"],
                ["Управляющий", "100 000 ₽"],
                ["Главный врач", "100 000 ₽"],
                ["Аренда", "200 000 ₽"],
                ["Иные расходы", "200 000 ₽"],
              ]}
              totalExpenses="2 875 000 ₽"
              profit="325 000 ₽"
              margin="10%"
            />
            <FinanceTable
              title="С координаторами + РОП"
              badge="Выручка выросла"
              badgeColor="badge-warning"
              revenue="4 100 000 ₽"
              rows={[
                ["Врачи 25%", "1 025 000 ₽"],
                ["Лаборатория 15%", "615 000 ₽"],
                ["Расходники 15%", "615 000 ₽"],
                ["Младший медперсонал", "350 000 ₽"],
                ["Администраторы", "150 000 ₽"],
                ["Координаторы", "350 000 ₽"],
                ["РОП", "200 000 ₽"],
                ["Бухгалтер", "40 000 ₽"],
                ["Управляющий", "100 000 ₽"],
                ["Главный врач", "100 000 ₽"],
                ["Аренда", "200 000 ₽"],
                ["Иные расходы", "200 000 ₽"],
              ]}
              totalExpenses="3 945 000 ₽"
              profit="155 000 ₽"
              margin="3,8%"
              note="📉 Выручка выросла — прибыль почти исчезла"
            />
            <FinanceTable
              title="После автоматизации"
              badge="Оптимальная модель"
              badgeColor="badge-success"
              revenue="4 100 000 ₽"
              rows={[
                ["Врачи 25%", "1 025 000 ₽"],
                ["Лаборатория 15%", "615 000 ₽"],
                ["Расходники 15%", "615 000 ₽"],
                ["Младший медперсонал", "350 000 ₽"],
                ["Администраторы", "150 000 ₽"],
                ["Бухгалтер", "40 000 ₽"],
                ["Управляющий", "100 000 ₽"],
                ["Главный врач", "100 000 ₽"],
                ["Аренда", "200 000 ₽"],
                ["Иные расходы", "200 000 ₽"],
              ]}
              totalExpenses="3 395 000 ₽"
              profit="705 000 ₽"
              margin="17%"
              note="📈 Та же выручка — маржа выросла в 4,5 раза"
            />
          </div>

          {/* COMPARISON */}
          <FadeUp delay={200}>
            <div className="compare-summary">
              <h3 className="font-oswald">Сравнение моделей</h3>
              <div className="compare-summary-grid">
                <div className="cs-row cs-head">
                  <span>Модель</span>
                  <span>Прибыль</span>
                  <span>Маржа</span>
                </div>
                <div className="cs-row">
                  <span>До автоматизации</span>
                  <span>325 000 ₽</span>
                  <span>10%</span>
                </div>
                <div className="cs-row cs-bad">
                  <span>С координаторами</span>
                  <span>155 000 ₽ ↓</span>
                  <span>3,8%</span>
                </div>
                <div className="cs-row cs-good">
                  <span>Автоматизация</span>
                  <span>705 000 ₽ ↑</span>
                  <span>17%</span>
                </div>
              </div>
              <div className="cs-highlight">
                <Icon name="TrendingUp" size={24} />
                <div>
                  <strong>+550 000 ₽ в месяц</strong>
                  <span>Автоматизация vs координаторы · <em>6 600 000 ₽ в год</em></span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* WHY IT WORKED */}
      <section className="section-why">
        <div className="container-inner">
          <FadeUp>
            <div className="section-label accent">Почему сработало</div>
            <h2 className="section-title font-oswald">
              Убрали причину,<br />а не следствие
            </h2>
          </FadeUp>
          <div className="why-grid">
            {[
              { icon: "🎯", text: "Стандартизировали то, что раньше было «на усмотрение врача»" },
              { icon: "🤖", text: "Убрали человеческий фактор из ключевых точек прибыли" },
              { icon: "💊", text: "Перевели логику «продаж» в медицинскую и процессную плоскость" },
              { icon: "🔁", text: "Связали клинические данные с коммуникациями и повторными визитами" },
            ].map(({ icon, text }, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="why-card" style={{ opacity: 1, transform: "none" }}>
                  <span className="why-icon">{icon}</span>
                  <p>{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="section-conclusion">
        <div className="container-inner">
          <FadeUp>
            <div className="conclusion-card">
              <div className="section-label" style={{ marginBottom: 20 }}>Главный вывод</div>
              <h3 className="font-oswald">
                В стоматологии нельзя бесконечно наращивать людей,<br />чтобы компенсировать плохие процессы
              </h3>
              <div className="conclusion-list">
                <p>Если зубная формула заполняется формально, история болезни не структурирована, план лечения не упакован — координаторы и РОПы <strong>лишь маскируют проблему</strong>, а не решают её.</p>
                <p>ИИ-ассистент и системная автоматизация позволяют повысить конверсию, снизить расходы и сделать бизнес управляемым.</p>
              </div>
              <div className="conclusion-cta">
                И именно в этот момент стоматология перестаёт быть <em>«ручным ремеслом»</em> и становится <strong>системным бизнесом.</strong>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

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
    </div>
  );
}
