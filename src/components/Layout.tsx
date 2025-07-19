import React from "react";
import { Link } from "react-router-dom";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヘッダー */}
      <header className="shadow py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-2xl font-bold text-orange-600">BFB FIT</Link>
          <nav className="space-x-4">
            <Link to="/about" className="hover:underline text-orange-700 hover:text-orange-500">ホーム</Link>
          </nav>
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