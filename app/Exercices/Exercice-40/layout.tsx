export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Layout Global</h1>
      {children}
    </div>
  );
}

export const metadata = {
  metadataBase: new URL("http://localhost:3000/Exercices/Exercice-40"),
  title: {
    default: "Ma super App",
    template: "%s | Ma Super App",
  },
  openGraph: {
    images: ["/og-image.png"], // devient automatiquement une URL absolue
  },
};
