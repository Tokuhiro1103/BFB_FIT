import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";

const App: React.FC = () => {
  const [lang, setLang] = useState<"ja" | "en">("ja");
  return (
    <Router>
      <Layout lang={lang} onLangChange={setLang}>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
