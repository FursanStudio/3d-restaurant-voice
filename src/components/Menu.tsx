"use client";

import { useState } from "react";
import MenuGrid from "../components/MenuGrid";

import { useFadeIn } from "@/app/hooks/useFadeIn";

type MenuItem = {
  name: string;
  cat: string;
  price: string;
  desc: string;
  img: string;
  badge?: string | null;
  spicy?: boolean;
};

export default function Menu() {
  // 🔥 STATE (replaces JS variable)
  const [activeCategory, setActiveCategory] = useState("All");

  const { ref, isVisible } = useFadeIn();

  // 🔥 DATA (from your original JS)
  const menuItems: MenuItem[] = [
    {
      name: "Suqaar",
      cat: "Signature Dishes",
      price: "16.99",
      badge: "Popular",
      spicy: true,
      img: "/images/img-suqaar.jpg",
      desc: "Tender cubed meat cooked with vegetables, garlic, and traditional spices",
    },
    {
      name: "Bariis Iskukaris",
      cat: "Signature Dishes",
      price: "15.99",
      badge: "Popular",
      spicy: false,
      img: "/images/img-bariis.jpg",
      desc: "Fragrant basmati rice with spiced lamb, raisins, and caramelized onions",
    },
    {
      name: "Maraq",
      cat: "Signature Dishes",
      price: "12.99",
      badge: null,
      spicy: false,
      img: "/images/img-maraq.jpg",
      desc: "Traditional soup with vegetables and your choice of meat",
    },
    {
      name: "Hilib Shiilan",
      cat: "Grilled Specialties",
      price: "18.99",
      badge: "Popular",
      spicy: true,
      img: "/images/img-hilib.jpg",
      desc: "Grilled meat seasoned with aromatic spices, served with rice or bread",
    },
    {
      name: "Sambuusa",
      cat: "Vegetarian Options",
      price: "8.99",
      badge: "Popular",
      spicy: false,
      img: "/images/img-sambuusa.jpg",
      desc: "Crispy triangular pastries filled with spiced vegetables or lentils",
    },
    {
      name: "Misir Wot",
      cat: "Vegetarian Options",
      price: "13.99",
      badge: null,
      spicy: true,
      img: "/images/img-misir.jpg",
      desc: "Red lentils cooked in berbere sauce with traditional spices",
    },
  ];

  // 🔥 Categories (from HTML buttons)
  const categories = [
    "All",
    "Signature Dishes",
    "Grilled Specialties",
    "Vegetarian Options",
    "Beverages",
  ];

  return (
    <section id="menu" className="section">
      <div className="section-inner">
        
        {/* HEADER */}
        <div className="section-header reveal">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-sub">
            Discover authentic East African flavors crafted with passion
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`cat-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <MenuGrid
          items={menuItems}
          activeCategory={activeCategory}
        />
      </div>
    </section>
  );
}