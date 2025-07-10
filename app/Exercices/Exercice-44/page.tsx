"use client";
import { Suspense, useState } from "react";
import { lazy } from "react";

const Modal = lazy(() => import("./Modal"));

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1>Lazy loading + Suspense avec React / Next.js</h1>
      <button onClick={() => setShowModal(true)}>Afficher modal</button>
      {showModal && (
        <Suspense fallback={<div>Chargement...</div>}>
          <Modal />
        </Suspense>
      )}
    </div>
  );
}
