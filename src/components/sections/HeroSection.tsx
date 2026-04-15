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
      <nav className="case-nav">
        <div className="nav-inner">
          <span className="nav-tag">
            <span className="nav-dot" />
            Кейс · Стоматология
          </span>
        </div>
      </nav>

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
            Имплантация · Воронка через удаление
          </div>
          <h1 className="hero-title font-oswald" style={anim(250)}>
            Как мы сделали имплантацию<br />рентабельной и получили<br />
            <span className="title-accent">80% конверсии</span>
          </h1>
          <p className="hero-sub" style={anim(400)}>
            При стоимости лида 600–900 ₽ — без прямой рекламы имплантации и без агрессивных продаж
          </p>
          <div className="hero-stats" style={anim(550)}>
            <div className="hero-stat">
              <strong>80%</strong>
              <span>конверсия в имплантацию</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>600–900 ₽</strong>
              <span>стоимость лида</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>8 мес.</strong>
              <span>горизонт воронки</span>
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
