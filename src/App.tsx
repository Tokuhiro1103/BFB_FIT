import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";

const App: React.FC = () => {
  const [lang, setLang] = useState<"ja" | "en">("ja");
  return (
    <Router basename="/BFB_FIT">
      <Layout lang={lang} onLangChange={setLang}>
        <Routes>
          <Route path="/" element={<About lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
