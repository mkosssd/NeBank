// import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-red-300">
        SIDEBAR
        {children}
    </main>
  );
}
