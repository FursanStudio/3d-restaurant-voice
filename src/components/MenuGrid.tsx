"use client";

import MenuCard from "./MenuCard";

type MenuItem = {
  name: string;
  cat: string;
  price: string;
  desc: string;
  img: string;
  badge?: string | null;
  spicy?: boolean;
};

export default function MenuGrid({
  items,
  activeCategory,
}: {
  items: MenuItem[];
  activeCategory: string;
}) {
  // 🔍 Filter logic (exact JS behavior)
  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.cat === activeCategory);

  return (
    <div className="menu-grid">
      {filteredItems.map((item, index) => (
        <MenuCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}