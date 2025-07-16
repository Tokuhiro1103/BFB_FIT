import React from "react";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* トップ画像 */}
      <div className="w-full h-64 mb-8 rounded-xl overflow-hidden shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
          alt="フィットネスイメージ"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4 text-orange-600">アハトの自己紹介</h1>
      <p className="mb-2 text-orange-900">ここにアハトさんの経歴やビジョン、アピールポイントなどを記載します。</p>
      {/* 詳細は後ほど追加 */}
    </div>
  );
};

export default About; 