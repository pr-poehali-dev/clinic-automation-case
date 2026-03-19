import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { setTimeout(() => setHeroVisible(true), 120); }, []);

  const anim = (delay: number) => ({
    opacity: heroVisible ? 1 : 0,
    transform: heroVisible ? "translateY(0)" : "translateY(30px)",
    transition: `all 0.8s ease ${delay}ms`,
  });

  return (
    <>
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
    </>
  );
}
