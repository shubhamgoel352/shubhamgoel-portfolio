import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full p-4 flex justify-between text-white bg-black z-50">
        <h1 className="text-lg font-bold">Shubham Goel</h1>
      </header>

      {/* Main Content (with padding to avoid header overlap) */}
      <main className="flex-grow pt-16 max-w-5xl mx-auto px-4">{children}</main>

      {/* Footer */}
      <footer className="p-4 text-center text-gray-400">© 2024 Shubham Goel</footer>
    </div>
  );
}