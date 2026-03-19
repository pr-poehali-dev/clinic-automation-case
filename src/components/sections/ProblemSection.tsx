import { FadeUp } from "./shared";

export default function ProblemSection() {
  return (
    <>
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
    </>
  );
}
