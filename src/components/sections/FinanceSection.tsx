import { FadeUp } from "./shared";
import Icon from "@/components/ui/icon";

const triggers = [
  {
    num: "01",
    days: "Через 7 дней после удаления",
    goal: "Забота + формирование ожидания",
    text: `Здравствуйте, Виталий Николаевич!\nНадеемся, что вы чувствуете себя хорошо после удаления зуба.\n\nЧерез 2 месяца мы пригласим вас на бесплатный осмотр состояния костной ткани — это поможет убедиться, что заживление идёт правильно.`,
    link: "futuresmile-clinic.ru/pamyatka-udalenie-zubov",
    sign: "С заботой о вас, Future Smile",
  },
  {
    num: "02",
    days: "Приглашение на контрольный осмотр",
    goal: "Бесплатный визит + диагностика",
    text: `Здравствуйте, Зинаида Ивановна!\nПриглашаем вас на контрольный осмотр после удаления зуба.\n\nЭто нужно, чтобы:\n— оценить восстановление костной ткани\n— избежать возможных осложнений\n— спланировать, при необходимости, имплантацию`,
    link: "futuresmile-clinic.ru/negativ-otsutstvie-zubov",
    sign: "С уважением, Future Smile",
  },
  {
    num: "03",
    days: "Если пациент не отреагировал",
    goal: "Имплантация как логичный шаг",
    text: `Уважаемый Айк Завенович!\n\nПосле удаления прошло достаточно времени — сейчас оптимальный момент восстановить зуб, чтобы избежать смещения соседних, атрофии кости и перегрузки на другие зубы.\n\nПредлагаем имплантацию под ключ — с гарантией и возможностью рассрочки.\nРаботаем с системами: Straumann, Medentika, Dentium.\n\nБесплатная консультация + КТ-диагностика.\nСкидка 5% + 🎁 1000 бонусов (15 дней).`,
    link: "futuresmile-clinic.ru/implant",
    sign: "Future Smile 🍏",
  },
  {
    num: "04",
    days: "Через 4 месяца после удаления",
    goal: "Усиление urgency",
    text: `С момента удаления прошло уже 4 месяца — мы помним о вас и хотим напомнить, что восстановление зуба лучше не откладывать.\n\nЗа это время костная ткань могла начать уменьшаться — это естественный процесс. Чем дольше ждать, тем сложнее и дороже может стать восстановление.\n\nВ знак заботы — дополнительная скидка 5% (15 дней).`,
    link: "futuresmile-clinic.ru/chto-proishodit-s-kostnoi-tkanyu",
    sign: "Ваша команда Future Smile 🍏",
  },
];

export default function FinanceSection() {
  return (
    <>
      <section className="section-finance">
        <div className="metrics-glow" />
        <div className="container-inner">
          <FadeUp>
            <div className="section-label light">Воронка</div>
            <h2 className="section-title font-oswald metrics-title">
              Как была выстроена<br />цепочка триггеров
            </h2>
            <p className="section-desc">
              После удаления зуба пациент не продавался сразу — его сопровождали автоматически
            </p>
          </FadeUp>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {triggers.map((t, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div style={{
                  background: "#ffffff",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "28px 32px",
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 24,
                  alignItems: "start",
                  boxShadow: "var(--shadow-sm)",
                }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{
                      fontFamily: "Oswald, sans-serif",
                      fontSize: 40,
                      fontWeight: 700,
                      color: "var(--brand-pale)",
                      lineHeight: 1,
                      WebkitTextStroke: "2px var(--brand-light)",
                    }}>
                      {t.num}
                    </div>
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                      <span style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--brand-dark)",
                        background: "var(--brand-pale)",
                        border: "1px solid rgba(14,165,233,0.25)",
                        borderRadius: 4,
                        padding: "3px 10px",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase" as const,
                      }}>
                        {t.days}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                        Цель: {t.goal}
                      </span>
                    </div>
                    <div style={{
                      background: "var(--bg-subtle)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "16px 20px",
                      fontSize: 14,
                      color: "var(--text-secondary)",
                      lineHeight: 1.75,
                      whiteSpace: "pre-line" as const,
                      marginBottom: 10,
                    }}>
                      {t.text}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--brand)" }}>
                      <Icon name="Link" size={13} />
                      <span>{t.link}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>
                      {t.sign}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-why">
        <div className="container-inner">
          <FadeUp>
            <div className="section-label">Результат</div>
            <h2 className="section-title font-oswald">
              За 8 месяцев после<br />удаления зуба
            </h2>
          </FadeUp>

          <div className="why-grid" style={{ marginBottom: 60 }}>
            {[
              { icon: "📊", text: "80% конверсии в имплантацию" },
              { icon: "💰", text: "Стоимость лида: 600–900 ₽" },
              { icon: "🚫", text: "Без прямой рекламы имплантации" },
              { icon: "🤝", text: "Без давления и агрессивных продаж" },
            ].map(({ icon, text }, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="why-card" style={{ opacity: 1, transform: "none" }}>
                  <span className="why-icon">{icon}</span>
                  <p>{text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={200}>
            <div className="section-label accent">Почему это сработало</div>
            <div className="why-grid" style={{ marginTop: 24 }}>
              {[
                { icon: "1️⃣", text: "Зашли в путь пациента раньше, чем он готов покупать" },
                { icon: "2️⃣", text: "Не продавали — объясняли и сопровождали" },
                { icon: "3️⃣", text: "Использовали время как инструмент, а не как врага" },
                { icon: "4️⃣", text: "Все коммуникации работали автоматически" },
              ].map(({ icon, text }, i) => (
                <FadeUp key={i} delay={i * 100}>
                  <div className="why-card" style={{ opacity: 1, transform: "none" }}>
                    <span className="why-icon">{icon}</span>
                    <p>{text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="section-conclusion">
        <div className="container-inner">
          <FadeUp>
            <div className="conclusion-card">
              <div className="section-label" style={{ marginBottom: 20 }}>Вывод</div>
              <h3 className="font-oswald">
                Имплантацию не нужно продавать<br />через дорогую рекламу
              </h3>
              <div className="conclusion-list">
                <p>Её нужно <strong>выращивать</strong> — через правильную воронку и автоматические коммуникации.</p>
                <p>Пациент сам придёт к решению, если его правильно сопровождать на каждом этапе после удаления.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
