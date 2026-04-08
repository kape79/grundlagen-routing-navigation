import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js", //automatically use default title when nothing is given 
    template: "%s | Hochschule Demo", //consistent prefixes and postfixes (| = alt+7 mac)
  },
  description: "Learning Next.js step by step",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <header style={{ backgroundColor: "#3498db", color: "white", padding: "1rem" }}>
          <h2 style={{ margin: 0 }}>Next.js Tutorial</h2>
        </header>

        <main style={{ padding: "1rem" }}>
          {children}
        </main>

        <footer style={{ backgroundColor: "#2c3e50", color: "white", padding: "1rem" }}>
          <p style={{ margin: 0 }}>© 2026 Web Engineering — HS Flensburg</p>
        </footer>
      </body>
    </html>
  );
}