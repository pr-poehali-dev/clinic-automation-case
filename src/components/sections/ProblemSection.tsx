import { FadeUp } from "./shared";

export default function ProblemSection() {
  return (
    <>
      <section className="section-problem">
        <div className="container-inner">
          <FadeUp>
            <div className="section-label">Исходная проблема</div>
            <h2 className="section-title font-oswald">
              Реклама приводила пациентов.<br />Экономика не сходилась.
            </h2>
            <p className="section-desc" style={{ maxWidth: 680 }}>
              В стоматологии имплантация — одна из самых маржинальных услуг.<br />
              Но в реальности она часто становится убыточной, если привлекать пациентов напрямую через рекламу.<br /><br />
              Мы столкнулись с этим на практике.
            </p>
          </FadeUp>

          <div className="problems-grid">
            <FadeUp delay={0}>
              <div className="problem-item" style={{ opacity: 1, transform: "none" }}>
                <div className="problem-icon">📉</div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8 }}>Высокая цена клика в Директе</strong>
                  <p>В сегменте имплантации стоимость одного клика в Яндекс Директе крайне высокая. CPP пациента на имплантацию: от 43 000 до 60 000 ₽.<em style={{ color: "#fca5a5", fontSize: 13, display: "block", marginTop: 6 }}>Реклама приводила пациента — но клиника уходила в минус.</em></p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="problem-item" style={{ opacity: 1, transform: "none" }}>
                <div className="problem-icon">🦷</div>
                <div>
                  <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: 8 }}>Пациент не готов покупать сразу</strong>
                  <p>Пациент не просыпается с желанием поставить имплант. Он приходит сначала с проблемой — боль, удаление зуба. Решение об имплантации — отложенное, но предсказуемое.<em style={{ color: "var(--emerald)", fontSize: 13, display: "block", marginTop: 6 }}>Прямая реклама имплантации — не лучший вход в воронку.</em></p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-insight">
        <div className="container-inner">
          <FadeUp>
            <div className="insight-card">
              <div className="insight-icon">💡</div>
              <h3 className="font-oswald">Ключевое решение</h3>
              <p>
                Мы задали себе простой вопрос: а обязательно ли продавать имплантацию «в лоб»?<br /><br />
                И пришли к выводу: нет. Нужно зайти в путь пациента раньше — <strong>через удаление зуба</strong>.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-solution">
        <div className="container-inner">
          <FadeUp>
            <div className="section-label accent">Новый источник трафика</div>
            <h2 className="section-title font-oswald">
              Воронка через удаление зубов
            </h2>
          </FadeUp>
          <div className="solutions-grid">
            <FadeUp delay={0}>
              <div className="solution-card" style={{ opacity: 1, transform: "none" }}>
                <div className="solution-num">🗺️</div>
                <h3>Яндекс Карты</h3>
                <p>Основной поток пациентов на удаление мы получали через Яндекс Карты. Стоимость пациента: <strong style={{ color: "var(--emerald-light)" }}>600–900 ₽</strong> — кратно дешевле, чем реклама имплантации напрямую.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="solution-card" style={{ opacity: 1, transform: "none" }}>
                <div className="solution-num">🔁</div>
                <h3>Автоматические коммуникации</h3>
                <p>После удаления пациент не продавался сразу. Мы начали сопровождать его через информационные триггеры, которые автоматически отправлялись через систему коммуникаций.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
