
import "./globals.css";
import "./responsive.css";

export const metadata = {
  title: "Sybarites World Cattery · British Shorthair & Longhair Golden · Costa Brava, Spain",
  description: "Sybarites World Cattery — семейный питомник британских золотых кошек (British Shorthair & British Longhair Golden) на Коста-Брава, Испания. Ответственное разведение, тесты ДНК, родословные WCF."
};

export default function Layout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400..700;1,400..700&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=swap"
        />
      </head>

      <body className="bg-emerald-deep text-dark-on-surface font-body antialiased selection:bg-gold selection:text-emerald-deep min-h-screen">
        {children}
      </body>
    </html>
  );
}
