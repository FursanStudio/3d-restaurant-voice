"use client";

import { useRef } from "react";

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  img: string;
  badge?: string | null;
  spicy?: boolean;
};

export default function MenuCard({
  item,
  index,
}: {
  item: MenuItem;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // 🔥 3D TILT (exact JS → React)
  const handleMouseMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;

    el.style.transform = `
      translateZ(30px)
      rotateX(${-y * 12}deg)
      rotateY(${x * 12}deg)
      scale(1.03)
    `;

    el.style.boxShadow = `${-x * 20}px ${-y * 20}px 60px rgba(0,0,0,0.2)`;
  };

  const resetTilt = () => {
    const el = cardRef.current;
    if (!el) return;

    el.style.transform =
      "translateZ(0) rotateX(0) rotateY(0) scale(1)";
    el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
  };

  return (
    <div
      ref={cardRef}
      className="menu-card"
      style={{ animationDelay: `${index * 80}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {/* IMAGE */}
      <div className="card-img-wrap">
        <img src={item.img} alt={item.name} />

        {item.badge && (
          <div className="card-badge">{item.badge}</div>
        )}
      </div>

      {/* BODY */}
      <div className="card-body">
        <div className="card-header">
          <h3 className="card-name">{item.name}</h3>

          {item.spicy && (
            <svg
              className="card-flame"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
          )}
        </div>

        <p className="card-desc">{item.desc}</p>

        <div className="card-footer">
          <span className="card-price">${item.price}</span>

          <button className="btn-order">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}