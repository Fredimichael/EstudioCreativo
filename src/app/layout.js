import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Estudio Creativo - Agencia de Marketing",
  description: "Tu marca merece crecer. Nosotros la impulsamos con estrategias visuales que venden.",
  icons: {
    icon: '/favicon.ico', // Asegúrate de tener un favicon si quieres, o borra esta línea
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}