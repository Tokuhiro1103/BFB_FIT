import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaStickyNote } from "react-icons/fa";

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
          <p className="text-gray-800">1回40ドルと低価格です</p>
          <p className="text-gray-800">どんな方でも大歓迎！</p>
        </div>
      </div>

       

      {/* Q&Aセクション */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-orange-600 mb-8 text-center">よくある質問</h3>
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Q. 運動初心者でも大丈夫ですか？</h4>
              <p className="text-gray-600">A. もちろん大歓迎です！アハトが丁寧にサポートします。経験レベルに合わせて、無理のないプログラムを組んでいきます。</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Q. 食事で意識することは？</h4>
              <p className="text-gray-600">A. バランスの良い食事が大切です。タンパク質、炭水化物、脂質を適切に摂取し、水分補給も忘れずに。</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-bold text-gray-800 mb-2">Q. 家でできる簡単なトレーニングは？</h4>
              <p className="text-gray-600">A. スクワット、プッシュアップ、プランクなど、器具なしでも効果的なトレーニングがあります。詳しくはお気軽にご相談ください。</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Q. 運動継続のコツは？</h4>
              <p className="text-gray-600">A. 無理のない目標設定と、楽しみながら続けられるプログラムがポイントです。アハトがモチベーション維持をサポートします。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Noteリンク */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-2">もっと詳しい情報は</p>
        <a href="#" className="text-orange-600 hover:text-orange-700 underline font-semibold">
          Noteに詳しく書いてます →
        </a>
      </div>

      {/* お問い合わせセクション */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-orange-600 mb-8 text-center">お問い合わせ</h3>
        <div className="bg-white rounded-xl p-8">
          <p className="text-gray-600 mb-6 text-center">ご依頼やご質問は、下記フォームまたはInstagramのDMからお気軽にどうぞ！</p>
          <form className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">氏名</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" placeholder="お名前" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">メールアドレス</label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" placeholder="example@mail.com" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700">ご依頼・ご相談内容</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" rows={4} placeholder="ご相談内容を入力してください" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">送信</button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-orange-600 hover:text-orange-700 underline">InstagramでDMする</a>
          </div>
        </div>
      </div>

     {/* SNSリンク */}
     <div className="flex justify-center space-x-6 mt-16">
        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors">
          <FaStickyNote size={32} />
        </a>
        <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
          <FaInstagram size={32} />
        </a>
      </div>

    </div>
    </>
  );
};

export default About; 