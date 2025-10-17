"use client";

import { ReactNode, useState } from "react";

export const Sidebar = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState("all");
  return (
    <div className="flex">
      <aside>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Toutes</option>
          <option value="electronics">Électronique</option>
          <option value="jewelery">Bijoux</option>
          <option value="men's clothing">Vêtements H</option>
          <option value="women's clothing">Vêtements F</option>
        </select>
      </aside>
      <main>{children}</main>
    </div>
  );
};
