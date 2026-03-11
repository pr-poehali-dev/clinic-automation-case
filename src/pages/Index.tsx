import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration, start]);
  return count;
}

function useInView(threshold = 0.2) {
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

function MetricCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, inView } = useInView(0.3);
  const count = useCountUp(value, 1800, inView);
  const displayValue = value >= 1000000
    ? (count / 1000000).toFixed(1).replace('.', ',') + " млн"
    : count.toLocaleString("ru-RU");
  return (
    <div
      ref={ref}
      className="metric-card"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)', transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.2) ${delay}ms` }}
    >
      <div className="metric-value">{displayValue}{value < 1000000 ? suffix : ""}</div>
      <div className="metric-label">{label}</div>
    </div>
  );
}

function ProblemItem({ icon, text, delay }: { icon: string; text: string; delay: number }) {
  const { ref, inView } = useInView(0.2);
  return (
    <div
      ref={ref}
      className="problem-item"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-30px)', transition: `all 0.6s ease ${delay}ms` }}
    >
      <div className="problem-icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
}

function SolutionCard({ num, title, desc, delay }: { num: string; title: string; desc: string; delay: number }) {
  const { ref, inView } = useInView(0.2);
  return (
    <div
      ref={ref}
      className="solution-card"
      style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(40px)', transition: `all 0.7s ease ${delay}ms` }}
    >
      <div className="solution-num">{num}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Index() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 100); }, []);

  const { ref: reviewRef, inView: reviewInView } = useInView(0.2);

  return (
    <div className="case-page font-golos">

      {/* NAV */}
      <nav className="case-nav">
        <div className="nav-inner">
          <span className="nav-tag">
            <span className="nav-dot" />
            Кейс · Медицина
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
          <div className="hero-badge" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
            <span className="badge-dot" />
            Многопрофильная клиника · Москва · 2024
          </div>
          <h1 className="hero-title font-oswald" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(40px)', transition: 'all 0.8s ease 0.3s' }}>
            Убрали координаторов<br />и РОПа — прибыль<br />
            <span className="title-accent">выросла на 47%</span>
          </h1>
          <p className="hero-sub" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease 0.5s' }}>
            Как автоматизация ключевых процессов позволила клинике избавиться от лишних звеньев управления и кратно увеличить чистую прибыль
          </p>
          <div className="hero-stats" style={{ opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.8s ease 0.7s' }}>
            <div className="hero-stat">
              <strong>+47%</strong>
              <span>рост прибыли</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>−3,2 млн ₽</strong>
              <span>экономия в год</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>8 мес.</strong>
              <span>окупаемость</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <Icon name="ChevronDown" size={22} />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-problem">
        <div className="container-inner">
          <div className="section-label">Проблема</div>
          <h2 className="section-title font-oswald">
            Клиника теряла деньги<br />на людях, не на пациентах
          </h2>
          <p className="section-desc">
            До автоматизации клиника держала раздутый штат управленцев, которые создавали видимость работы вместо реального результата.
          </p>
          <div className="problems-grid">
            <ProblemItem icon="💸" text="3 координатора и РОП ежемесячно обходились в 540 000 ₽ — при этом конверсия в запись не росла уже 2 года" delay={0} />
            <ProblemItem icon="📋" text="Ручное расписание: 40% рабочего времени администраторов уходило на звонки, перезаписи и напоминания" delay={100} />
            <ProblemItem icon="📊" text="Отчётность собиралась 3–4 дня. Решения принимались по устаревшим данным" delay={200} />
            <ProblemItem icon="🔄" text="Заявки из онлайна терялись — не было единой системы обработки, конверсия составляла 34%" delay={300} />
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="section-solution">
        <div className="container-inner">
          <div className="section-label accent">Решение</div>
          <h2 className="section-title font-oswald">
            4 шага к полной<br />автоматизации
          </h2>
          <div className="solutions-grid">
            <SolutionCard num="01" title="Умная запись на приём" desc="Внедрили чат-бот и онлайн-запись с автоматическими напоминаниями. Пациент записывается за 2 минуты, система сама заполняет расписание врача." delay={0} />
            <SolutionCard num="02" title="CRM-воронка вместо РОПа" desc="Настроили автоматическую обработку заявок: приоритизация, распределение, скрипты для администраторов. РОП стал не нужен." delay={100} />
            <SolutionCard num="03" title="Дашборд в реальном времени" desc="Руководитель видит все ключевые метрики в одном экране: выручка, загрузка врачей, конверсии — данные обновляются каждые 15 минут." delay={200} />
            <SolutionCard num="04" title="Авто-напоминания и возврат" desc="Система сама напоминает о визитах, собирает NPS, возвращает пациентов на повторный приём. Без участия координаторов." delay={300} />
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="section-metrics">
        <div className="metrics-glow" />
        <div className="container-inner">
          <div className="section-label light">Метрики</div>
          <h2 className="section-title font-oswald metrics-title">
            Цифры говорят<br />сами за себя
          </h2>
          <div className="metrics-grid">
            <MetricCard value={47} suffix="%" label="рост чистой прибыли" delay={0} />
            <MetricCard value={3200000} suffix=" ₽" label="экономия на персонале в год" delay={150} />
            <MetricCard value={340} suffix="%" label="ROI автоматизации" delay={300} />
            <MetricCard value={8} suffix=" мес" label="срок окупаемости" delay={450} />
            <MetricCard value={78} suffix="%" label="конверсия в запись (было 34%)" delay={600} />
            <MetricCard value={92} suffix="%" label="пациентов возвращаются повторно" delay={750} />
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="section-results">
        <div className="container-inner">
          <div className="section-label">Результаты</div>
          <h2 className="section-title font-oswald">До и после: реальные изменения</h2>
          <div className="compare-table">
            <div className="compare-col compare-before">
              <div className="compare-head before-head">
                <Icon name="X" size={14} />
                До автоматизации
              </div>
              <div className="compare-item">540 000 ₽/мес на координаторов и РОПа</div>
              <div className="compare-item">Конверсия в запись — 34%</div>
              <div className="compare-item">Отчёт готовится 3–4 дня</div>
              <div className="compare-item">40% времени персонала — ручная работа</div>
              <div className="compare-item">Потеря 20–30% онлайн-заявок</div>
              <div className="compare-item">Возврат пациентов — случайный</div>
            </div>
            <div className="compare-col compare-after">
              <div className="compare-head after-head">
                <Icon name="Check" size={14} />
                После автоматизации
              </div>
              <div className="compare-item">Те же задачи выполняет система за 0 ₽/мес</div>
              <div className="compare-item">Конверсия в запись — 78% (+129%)</div>
              <div className="compare-item">Данные онлайн, обновление каждые 15 минут</div>
              <div className="compare-item">Персонал фокусируется только на пациентах</div>
              <div className="compare-item">0 потерянных заявок, всё в CRM</div>
              <div className="compare-item">Автоматический возврат — 92% пациентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="section-review">
        <div className="container-inner">
          <div className="section-label">Отзыв</div>
          <div
            ref={reviewRef}
            className="review-card"
            style={{ opacity: reviewInView ? 1 : 0, transform: reviewInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)', transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1)' }}
          >
            <div className="review-quote">"</div>
            <blockquote>
              Честно говоря, я не верил, что это возможно. Мы 7 лет держали РОПа и трёх координаторов — казалось, без них всё рухнет. Через 3 месяца после внедрения я понял: они создавали работу для самих себя. Сейчас клиника работает ровнее, прибыль выросла, а я наконец вижу реальные цифры каждый день. Жалею только об одном — что не сделал это раньше.
            </blockquote>
            <div className="review-author">
              <div className="review-avatar">АК</div>
              <div className="review-author-info">
                <strong>Андрей Климов</strong>
                <span>Владелец многопрофильной клиники, г. Москва</span>
              </div>
            </div>
            <div className="review-stars">★★★★★</div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section-contact" id="contact">
        <div className="contact-glow-1" />
        <div className="contact-glow-2" />
        <div className="container-inner">
          <div className="section-label light">Контакты</div>
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
          <span>© 2024 · Автоматизация медицинских клиник</span>
          <span className="footer-link">Политика конфиденциальности</span>
        </div>
      </footer>
    </div>
  );
}
