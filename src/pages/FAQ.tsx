import React from "react";

const FAQ: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">フィットネスQ&A</h1>
      <ul className="space-y-4">
        <li>
          <strong>Q. 運動初心者でも大丈夫ですか？</strong>
          <p>A. もちろん大歓迎です！アハトが丁寧にサポートします。</p>
        </li>
        {/* 他のQ&Aも後ほど追加 */}
      </ul>
    </div>
  );
};

export default FAQ; 