import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  lang: "ja" | "en";
  onLangChange: (lang: "ja" | "en") => void;
}

const Layout: React.FC<LayoutProps> = ({ children, lang, onLangChange }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* ヘッダー */}
      <header className="shadow py-4 bg-black">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-bold text-white">BFB FIT</Link>
          <div className="flex items-center space-x-6">
            <nav className="space-x-4">
              <Link to="/about" className="hover:underline text-white hover:text-red-400">
                {lang === "ja" ? "ホーム" : "Home"}
              </Link>
            </nav>
            <button
              className="ml-4 px-3 py-1 rounded border border-white text-white hover:bg-white hover:text-black transition-colors"
              onClick={() => onLangChange(lang === "ja" ? "en" : "ja")}
            >
              {lang === "ja" ? "English" : "日本語"}
            </button>
          </div>
        </div>
      </header>
      {/* メイン */}
      <main className="flex-1 bg-black">{children}</main>
      {/* フッター */}
      <footer className="bg-black py-4 mt-8 border-t border-gray-800">
        <div className="container mx-auto text-center text-white text-sm">
          &copy; {new Date().getFullYear()} BFB FIT | Brothers from Brisbane
        </div>
      </footer>
    </div>
  );
};

export default Layout; 