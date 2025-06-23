"use client";

import { useParams } from "next/navigation";

export default function ReportModal() {
  const { id } = useParams();

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "20%",
        width: "60%",
        padding: "2rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <h1>Modal Rapport {id}</h1>
      <p>Ceci est un modal pour le rapport {id}.</p>
    </div>
  );
}