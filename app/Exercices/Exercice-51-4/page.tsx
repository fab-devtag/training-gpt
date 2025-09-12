import { Metadata } from "next";

export default function Home() {
  return (
    <div>
      <h1>Evaluation - SEO / métadonnées dans Next.js</h1>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Blog React/Next.js",
  description: "Apprends React et Next.js pas à pas",
  openGraph: {
    title: "Titre OpenGraph",
    description: "Description OpenGraph",
    url: "http://localhost:3000/Exercices/Exercice-51-4",
    images: ["http://localhost:3000/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
};
