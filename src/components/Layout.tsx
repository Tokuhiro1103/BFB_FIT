import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  lang: "ja" | "en";
  onLangChange: (lang: "ja" | "en") => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, onLangChange }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <header className="shadow py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-bold text-orange-600">BFB FIT</Link>
          <div className="flex items-center space-x-6">
            <nav className="space-x-4">
              <Link to="/about" className="hover:underline text-orange-700 hover:text-orange-500">Home</Link>
            </nav>
            <button
              className="ml-4 px-3 py-1 rounded border border-orange-400 text-orange-600 hover:bg-orange-50 transition-colors"
              onClick={() => onLangChange(lang === "ja" ? "en" : "ja")}
            >
              {lang === "ja" ? "English" : "日本語"}
            </button>
          </div>
        </div>
      </header>
      {/* メイン */}
      <main className="flex-1">{children}</main>
      {/* フッター */}
      <footer className="bg-orange-100 py-4 mt-8 shadow-inner">
        <div className="container mx-auto text-center text-orange-500 text-sm">
          &copy; {new Date().getFullYear()} BFB FIT | Brothers from Brisbane
        </div>
      </footer>
    </div>
  );
};

export default Layout; 