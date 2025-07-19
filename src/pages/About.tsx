import React from "react";

const About: React.FC = () => {
  return (
    <>
      {/* トップ画像 - 画面いっぱい */}
      <div className="relative w-full h-96">
        <img
          src="image_ex1.jpg"
          alt="BFB FIT トップ画像"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">BFB FIT</h1>
        </div>
      </div>

      {/* メインコンテンツ - 幅制限あり */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* プロフィールタイトル */}
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold text-orange-600">プロフィール</h2>
        </div>

      {/* 自己紹介セクション */}
      <div className="flex items-center mb-12 bg-white rounded-xl p-6">
        <div className="w-64 h-80 rounded-full overflow-hidden mr-24 flex-shrink-0">
          <img
            src="/image_achat.jpg"
            alt="アハトのプロフィール"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-2">こんにちは、アハトです！</h2>
          <p className="text-gray-800">
            日本の大学卒業後、オーストラリアに移住。語学学校を経てTAFEでCert3・4（フィットネス）を修了し、
            現在はパーソナルトレーナーとして活動しています。低価格で始めやすく、どんな方も歓迎！
            楽しく続けられるトレーニングを提供します。
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
      </div>

      {/* 活動実績セクション */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-orange-600 mb-6 text-center">活動紹介</h3>
        <div className="flex items-center bg-white rounded-xl p-6">
          <div className="w-96 h-96 overflow-hidden mr-36 flex-shrink-0">
            <img
              src="image_ex1.jpg"
              alt="トレーニング実績"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-800">
              こんなトレーニングをしました！よく下文章〜
              スポーツコーチングや睡眠コーチングなど、多岐にわたるスキルを活かして
              お客様一人ひとりに最適なプログラムを提供しています。
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              ああああああああああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああああああああああ
            </p>
          </div>
        </div>
      </div>

      {/* 次のトレーニングセクション */}
      <div className="mb-12">
        <div className="flex items-center bg-white p-6">
                      <div className="flex-1 mr-36">
                          <p className="text-gray-800">
                次はこんなトレーニングもしています！〜
                出張対応可能、オンラインセッション対応で、
                お客様のライフスタイルに合わせた柔軟なサービスを提供しています。
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              ああああああああああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああああああああああああああ
              あああああああああああああああああああああああああああああああああああああ
              ああああああああああああああああああああああああああああああああああ
            </p>
          </div>
          <div className="w-96 h-96 overflow-hidden flex-shrink-0">
            <img
              src="gym_training2.png"
              alt="次のトレーニング"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* アピールポイント */}
      <div className="mb-8 bg-orange-100 rounded-xl p-6">
        <h4 className="text-lg font-bold text-orange-700 mb-4">アピールポイント</h4>
        <div className="space-y-2">
          <p className="text-gray-800">格です！</p>
          <p className="text-gray-800">な方大歓迎！</p>
        </div>
      </div>

      {/* SNSリンク */}
      <div className="flex justify-center space-x-6">
        <a href="#" className="bg-green-50 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
          ノート
        </a>
        <a href="#" className="bg-pink-50 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition-colors">
          インスタ
        </a>
      </div>
      </div>
    </>
  );
};

export default About; 