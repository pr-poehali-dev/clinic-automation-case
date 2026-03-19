import Icon from "@/components/ui/icon";
import { FadeUp, FinanceTable } from "./shared";

export default function FinanceSection() {
  return (
    <>
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
    </>
  );
}
