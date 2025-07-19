import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

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
      <div className="flex flex-col lg:flex-row items-center mb-12 bg-white rounded-xl p-6">
        <div className="w-48 h-60 lg:w-64 lg:h-80 rounded-full overflow-hidden mb-6 lg:mb-0 lg:mr-24 flex-shrink-0">
          <img
            src="/image_achat.jpg"
            alt="プロフィール画像"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-xl lg:text-2xl font-bold text-orange-600 mb-2">例：こんにちは、Achatです！</h2>
          <p className="text-gray-800 text-sm lg:text-base">
            【自己紹介文】
            例：
            日本の大学卒業後、オーストラリアに移住。語学学校を経てTAFEでCert3・4（フィットネス）を修了し、
            現在はパーソナルトレーナーとして活動しています。低価格で始めやすく、どんな方も歓迎！
            楽しく続けられるトレーニングを提供します。
          </p>
        </div>
      </div>

      {/* 活動実績セクション */}
      <div className="mb-12">
        <h3 className="text-xl font-bold text-orange-600 mb-6 text-center">トレーニングの紹介</h3>
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl p-6">
          <div className="w-full lg:w-96 h-64 lg:h-96 overflow-hidden mb-6 lg:mb-0 lg:mr-36 flex-shrink-0">
            <img
              src="image_ex1.jpg"
              alt="トレーニング実績"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-gray-800 text-sm lg:text-base">
              【写真＋説明文1】
              例：
              スポーツコーチングや睡眠コーチングなど、多岐にわたるスキルを活かして、
お客様一人ひとりに最適なプログラムを提供しています。

運動初心者からアスリート志望の方まで、それぞれの目標やライフスタイルに寄り添ったサポートを行い、無理なく続けられる習慣づくりを大切にしています。

また、睡眠や食事、メンタルケアといった生活全体のバランスを重視し、体の内側から整えることを意識したプログラム設計を心がけています。

出張トレーニングやオンラインでの指導にも対応しており、お忙しい方や遠方の方でも安心してご利用いただけます。

「変わりたいけど、何から始めればいいかわからない」——そんな方こそ、ぜひ一度ご相談ください。
一緒に理想の自分を目指して、第一歩を踏み出しましょう。
            </p>
          </div>
        </div>
      </div>

      {/* 次のトレーニングセクション */}
      <div className="mb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center bg-white p-6">
          <div className="flex-1 mt-6 lg:mt-0 lg:mr-36">
            <p className="text-gray-800 text-sm lg:text-base text-center lg:text-left">
              【写真＋説明文2】
              例：
              他にもこんなトレーニングもしています！
出張対応可能、オンラインセッション対応で、
お客様のライフスタイルに合わせた柔軟なサービスを提供しています。

筋力アップを目指すパーソナルトレーニングはもちろん、姿勢改善、柔軟性向上、体幹トレーニング、リラクゼーションストレッチなど、幅広いメニューをご用意しています。

年齢や運動経験に関わらず、安心して取り組めるよう丁寧なカウンセリングを行い、目的や体調に応じたプログラムを一緒に作り上げていきます。

「ジムに通うのはハードルが高い」「自宅で気軽に運動したい」そんな方でも、出張やオンラインを活用することで、ご自宅や空き時間に効率的にトレーニングできます。

日々の小さな積み重ねが、体と心に大きな変化をもたらします。
あなたの目標達成を全力でサポートしますので、ぜひお気軽にご相談ください！
            </p>
          </div>
          <div className="w-full lg:w-96 h-64 lg:h-96 overflow-hidden flex-shrink-0">
            <img
              src="gym_training2.png"
              alt="次のトレーニング"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* アピールポイント */}
      <div className="mb-8 bg-orange-100 rounded-xl p-4 lg:p-6">
        <h4 className="text-base lg:text-lg font-bold text-orange-700 mb-4">【ここにアピールポイントなどを書く】例：BFB FITを利用するメリット</h4>
        <div className="space-y-2">
          <p className="text-gray-800 text-sm lg:text-base">例：</p>
          <p className="text-gray-800 text-sm lg:text-base">✅ 初心者歓迎<br />
✅ 無理なく続けられるメニューをご提案<br />
✅ 減量・筋力アップ・姿勢改善もサポート<br />
✅ 栄養コーチング対応可能！ブリスベンで手に入る食材を使った、PFCバランスの整った食事メニューもご紹介！<br />
🏃‍♀️公園セッションも受付中！（初回無料／20ドル〜）<br />
シティ近郊の公園で行うセッションは、お友達との参加もOK！<br />
開放的な空間で楽しく体を動かしましょう！<br />
📍 場所：Southbank Fitness Center（屋内）＋ Brisbane市内の公園（屋外）<br />
💰 料金：初回2回無料！その後は1セッション $30〜（公園セッションは $20〜）</p>
        </div>
      </div>

      

      {/* Q&Aセクション */}
      <div className="mt-16">
        <h3 className="text-xl lg:text-2xl font-bold text-orange-600 mb-8 text-center">【ここにTipsを書く】例：よくある質問</h3>
        <div className="bg-white rounded-xl p-4 lg:p-8 shadow-lg">
          <div className="space-y-4 lg:space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-base lg:text-lg font-bold text-gray-800 mb-2">Q. 運動初心者でも大丈夫ですか？</h4>
              <p className="text-gray-600 text-sm lg:text-base">A. もちろん大歓迎です！丁寧にサポートします。経験レベルに合わせて、無理のないプログラムを組んでいきます。</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-base lg:text-lg font-bold text-gray-800 mb-2">Q. 食事で意識することは？</h4>
              <p className="text-gray-600 text-sm lg:text-base">A. バランスの良い食事が大切です。タンパク質、炭水化物、脂質を適切に摂取し、水分補給も忘れずに。</p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-base lg:text-lg font-bold text-gray-800 mb-2">Q. 家でできる簡単なトレーニングは？</h4>
              <p className="text-gray-600 text-sm lg:text-base">A. スクワット、プッシュアップ、プランクなど、器具なしでも効果的なトレーニングがあります。詳しくはお気軽にご相談ください。</p>
            </div>
            <div>
              <h4 className="text-base lg:text-lg font-bold text-gray-800 mb-2">Q. 運動継続のコツは？</h4>
              <p className="text-gray-600 text-sm lg:text-base">A. 無理のない目標設定と、楽しみながら続けられるプログラムがポイントです。アハトがモチベーション維持をサポートします。</p>
            </div>
          </div>
        </div>
      </div>

      {/* Noteリンク */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-2">もっと詳しい情報は</p>
        <a href="#" className="text-orange-600 hover:text-orange-700 underline font-semibold">
          Noteをcheck! →
        </a>
      </div>

      {/* お問い合わせセクション */}
      <div className="mt-16">
        <h3 className="text-xl lg:text-2xl font-bold text-orange-600 mb-8 text-center">お問い合わせ</h3>
        <div className="bg-white rounded-xl p-4 lg:p-8">
          <p className="text-gray-600 mb-6 text-center text-sm lg:text-base">ご依頼やご質問は、下記フォームまたはInstagramのDMからお気軽にどうぞ！</p>
          <form className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block mb-1 font-semibold text-gray-700 text-sm lg:text-base">氏名</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" placeholder="お名前" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700 text-sm lg:text-base">メールアドレス</label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" placeholder="example@mail.com" />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-gray-700 text-sm lg:text-base">ご依頼・ご相談内容</label>
              <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-orange-500" rows={4} placeholder="ご相談内容を入力してください" />
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">送信</button>
          </form>
          <div className="mt-6 text-center">
            <a href="#" className="text-orange-600 hover:text-orange-700 underline text-sm lg:text-base">InstagramでDMする</a>
          </div>
        </div>
      </div>

     {/* SNSリンク */}
    <div className="flex justify-center space-x-6 mt-16">
        <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
          <FaFacebook size={32} />
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