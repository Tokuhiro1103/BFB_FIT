import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

interface AboutProps {
  lang: "ja" | "en";
}

const text = {
  ja: {
    profileTitle: "プロフィール",
    greeting: "こんにちは、Achatです！",
    intro: `日本の大学卒業後、オーストラリアに移住。\n語学学校を経てTAFEでCertificate III・IV（フィットネス）を修了し、\n現在はパーソナルトレーナーとして活動しています。低価格で始めやすく、どんな方も歓迎！\n確かな知識と経験をもとにあなたの目標達成を全力でサポートします！`,
    trainingTitle: "トレーニングの紹介",
    trainingDesc1: `スポーツコーチングや睡眠コーチングなど、多岐にわたるスキルを活かして、\n一人ひとりの目標やライフスタイルに合わせた最適なプログラムを提供しています。\n\n提供するトレーニングは、筋力アップや姿勢改善、柔軟性の向上、体幹トレーニング、
                    リラクゼーションストレッチなど幅広く対応。\n\n睡眠や食事、メンタルケアといった生活全体のバランスを重視し、体の内側から整えることを意識したプログラム設計を心がけています。\n\nまた、運動が初めての方から経験者まで、それぞれのペースに寄り添い、無理なく継続できるサポートを心がけています。\n\n「変わりたいけど、何から始めればいいかわからない」——そんな方こそ、ぜひ一度ご相談ください。\n一緒に理想の自分を目指して、第一歩を踏み出しましょう。`,
    trainingDesc2: `出張やオンラインセッションにも対応しており、どんなライフスタイルの方でも気軽にトレーニングを受けられます。\n\n筋力アップを目指すパーソナルトレーニングはもちろん、姿勢改善、柔軟性向上、体幹トレーニング、リラクゼーションストレッチなど、幅広いメニューをご用意しています。\n\n年齢や運動経験に関わらず、安心して取り組めるよう丁寧なカウンセリングを行い、目的や体調に応じたプログラムを一緒に作り上げていきます。\n\nジムに通うのはハードルが高い、自宅で気軽に運動したい、そんな方でも出張やオンラインを活用することでご自宅や空き時間に効率的にトレーニングできます。\n\n日々の小さな積み重ねが体と心に大きな変化をもたらします。\nあなたの目標達成を全力でサポートしますので、ぜひお気軽にご相談ください！`,
    meritTitle: "ライフスタイルに寄り添う、柔軟で安心のサポート体制",
    meritDesc: `✅ 初心者歓迎\n✅ 無理なく続けられるメニューをご提案\n✅ 減量・筋力アップ・姿勢改善もサポート\n✅ 栄養コーチング対応可能！ブリスベンで手に入る食材を使った、PFCバランスの整った食事メニューもご紹介！\n🏃‍♀️公園セッションも受付中！（初回無料／20ドル〜）\nシティ近郊の公園で行うセッションは、お友達との参加もOK！\n開放的な空間で楽しく体を動かしましょう！\n📍 場所：Southbank Fitness Center（屋内）＋ Brisbane市内の公園（屋外）\n💰 料金：初回2回無料！その後は1セッション $30〜（公園セッションは $20〜）`,
    faqTitle: "よくある質問",
    faq: [
      { q: "Q. 運動初心者でも大丈夫ですか？", a: "A. もちろん大歓迎です！丁寧にサポートします。経験レベルに合わせて、無理のないプログラムを組んでいきます。" },
      { q: "Q. 食事で意識することは？", a: "A. バランスの良い食事が大切です。タンパク質、炭水化物、脂質を適切に摂取し、水分補給も忘れずに。" },
      { q: "Q. 家でできる簡単なトレーニングは？", a: "A. スクワット、プッシュアップ、プランクなど、器具なしでも効果的なトレーニングがあります。詳しくはお気軽にご相談ください。" },
      { q: "Q. 運動継続のコツは？", a: "A. 無理のない目標設定と、楽しみながら続けられるプログラムがポイントです。モチベーション維持も私がサポートします。" }
    ],
    noteMore: "もっと詳しい情報は",
    noteLink: "Noteをcheck! →",
    contactTitle: "お問い合わせ",
    contactDesc: "ご依頼やご質問は、下記フォームまたはInstagramのDMからお気軽にメッセージください",
    contactName: "氏名",
    contactMail: "メールアドレス",
    contactContent: "ご依頼・ご相談内容",
    contactBtn: "送信",
    contactDM: "InstagramでDMする"
  },
  en: {
    profileTitle: "Profile",
    greeting: "Ex: Hello, I'm Achat!",
    intro: `【Self Introduction】\nEx:\nAfter graduating from a Japanese university, I moved to Australia. After attending a language school, I completed Cert3 & 4 (Fitness) at TAFE.\nCurrently, I work as a personal trainer. My services are affordable and open to everyone!\nLet's enjoy fitness together!`,
    trainingTitle: "Training Introduction",
    trainingDesc1: `【Photo + Description 1】\nEx:\nUtilizing a wide range of skills such as sports coaching and sleep coaching,\nI provide optimal programs tailored to each client.\n\nFrom beginners to aspiring athletes, I support each person's goals and lifestyle, helping them build sustainable habits.\n\nI also focus on overall lifestyle balance, including sleep, diet, and mental care, designing programs that improve the body from the inside out.\n\nI offer on-site and online training, so even busy or distant clients can use my services with confidence.\n\nIf you want to change but don't know where to start, please feel free to consult me.\nLet's take the first step toward your ideal self together!`,
    trainingDesc2: `【Photo + Description 2】\nEx:\nI also offer various other training!\nOn-site and online sessions are available, providing flexible services to fit your lifestyle.\n\nIn addition to personal training for muscle gain, I offer posture improvement, flexibility, core training, and relaxation stretching.\n\nRegardless of age or experience, I provide careful counseling and create programs tailored to your goals and condition.\n\nIf going to the gym feels like a hurdle or you want to exercise at home, you can train efficiently at home or during your free time using on-site or online sessions.\n\nSmall daily efforts can bring big changes to your body and mind.\nI will fully support you in achieving your goals, so please feel free to contact me!`,
    meritTitle: "[Appeal Points] Example: Benefits of Using BFB FIT",
    meritDesc: `Example:\n✅ Beginners welcome\n✅ Propose menus that can be continued without strain\n✅ Support for weight loss, muscle gain, and posture improvement\n✅ Nutrition coaching available! We also introduce well-balanced meal menus using ingredients available in Brisbane.\n🏃‍♀️ Park sessions available! (First session free / from $20)\nSessions in parks near the city are also OK with friends!\nLet's have fun exercising in an open space!\n📍 Location: Southbank Fitness Center (indoor) + parks in Brisbane (outdoor)\n💰 Price: First 2 sessions free! After that, $30~/session (park sessions from $20~)`,
    faqTitle: "[Tips] Example: Frequently Asked Questions",
    faq: [
      { q: "Q. Is it okay for beginners?", a: "A. Absolutely! I will support you carefully. I will create a program that matches your experience level." },
      { q: "Q. What should I keep in mind about diet?", a: "A. A well-balanced diet is important. Be sure to get enough protein, carbs, and fat, and don't forget to stay hydrated." },
      { q: "Q. What are some easy exercises I can do at home?", a: "A. Squats, push-ups, and planks are effective even without equipment. Feel free to ask for more details!" },
      { q: "Q. How can I keep up my motivation?", a: "A. Setting realistic goals and having a fun, sustainable program is key. I will help you stay motivated!" }
    ],
    noteMore: "For more details",
    noteLink: "Check my Note! →",
    contactTitle: "Contact",
    contactDesc: "For requests or questions, feel free to use the form below or DM me on Instagram!",
    contactName: "Name",
    contactMail: "Email",
    contactContent: "Request / Inquiry",
    contactBtn: "Send",
    contactDM: "DM me on Instagram"
  }
};

const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <>
      {/* トップ画像 - 画面いっぱい */}
      <div className="relative w-full h-96">
        <img
          src="gym_image4.jpg"
          alt="BFB FIT トップ画像"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg">BFB FIT</h1>
        </div>
      </div>

      {/* メインコンテンツ - 幅制限あり */}
      <div className="max-w-6xl mx-auto px-4 py-8 bg-black">
        {/* プロフィールタイトル */}
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold text-white">{text[lang].profileTitle}</h2>
        </div>

      {/* 自己紹介セクション */}
      <div className="flex flex-col lg:flex-row items-center mb-12 bg-gray-900 p-6">
        <div className="w-48 h-60 lg:w-64 lg:h-80 rounded-full overflow-hidden mb-6 lg:mb-0 lg:mr-24 flex-shrink-0">
          <img
            src="/image_achat2.jpeg"
            alt="プロフィール画像"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">{text[lang].greeting}</h2>
          <p className="text-white text-sm lg:text-base" style={{ whiteSpace: 'pre-line' }}>
            {text[lang].intro}
          </p>
        </div>
      </div>

      {/* 活動実績セクション */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-6 text-center">{text[lang].trainingTitle}</h3>
        <div className="flex flex-col lg:flex-row items-center bg-gray-900 p-6">
          <div className="w-full lg:w-96 h-64 lg:h-96 overflow-hidden mb-6 lg:mb-0 lg:mr-36 flex-shrink-0">
            <img
              src="image_ex2.jpg"
              alt="トレーニング実績"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-white text-sm lg:text-base" style={{ whiteSpace: 'pre-line' }}>
              {text[lang].trainingDesc1}
            </p>
          </div>
        </div>
      </div>

      {/* 次のトレーニングセクション */}
      <div className="mb-12">
        <div className="flex flex-col-reverse lg:flex-row items-center bg-gray-900 p-6">
          <div className="flex-1 mt-6 lg:mt-0 lg:mr-36">
            <p className="text-white text-sm lg:text-base text-center lg:text-left" style={{ whiteSpace: 'pre-line' }}>
              {text[lang].trainingDesc2}
            </p>
          </div>
          <div className="w-full lg:w-96 h-64 lg:h-96 overflow-hidden flex-shrink-0">
            <img
              src="image_ex3.jpg"
              alt="次のトレーニング"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* アピールポイント */}
      <div className="mb-8 bg-gray-800 p-4 lg:p-6">
        <h4 className="text-base lg:text-xl font-bold text-white mb-4">{text[lang].meritTitle}</h4>
        <div className="space-y-2">
          <p className="text-white text-sm lg:text-base" style={{ whiteSpace: 'pre-line' }}>{text[lang].meritDesc}</p>
        </div>
      </div>

      {/* Q&Aセクション */}
      <div className="mt-16">
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-8 text-center">{text[lang].faqTitle}</h3>
        <div className="bg-gray-900 rounded-xl p-4 lg:p-8 shadow-lg">
          <div className="space-y-4 lg:space-y-6">
                          {text[lang].faq.map((item, idx) => (
                <div key={idx} className="border-b border-gray-700 pb-4">
                  <h4 className="text-base lg:text-lg font-bold text-white mb-2">{item.q}</h4>
                  <p className="text-gray-300 text-sm lg:text-base">{item.a}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Noteリンク */}
      <div className="mt-8 text-center">
        <p className="  text-gray-300 mb-2">{text[lang].noteMore}</p>
        <a href="https://note.com/achatfitness001" className="text-2xl text-red-400 hover:text-red-300 underline font-semibold">
          {text[lang].noteLink}
        </a>
      </div>

      {/* お問い合わせセクション */}
      <div className="mt-16">
        <h3 className="text-xl lg:text-3xl font-bold text-white mb-8 text-center">{text[lang].contactTitle}</h3>
        <div className="bg-gray-900 rounded-xl p-4 lg:p-8">
          <p className="text-gray-300 mb-6 text-center text-sm lg:text-base">{text[lang].contactDesc}</p>
          <form className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block mb-1 font-semibold text-white text-sm lg:text-base">{text[lang].contactName}</label>
              <input type="text" className="w-full border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500 bg-gray-800 text-white" placeholder={text[lang].contactName} />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-white text-sm lg:text-base">{text[lang].contactMail}</label>
              <input type="email" className="w-full border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500 bg-gray-800 text-white" placeholder={text[lang].contactMail} />
            </div>
            <div>
              <label className="block mb-1 font-semibold text-white text-sm lg:text-base">{text[lang].contactContent}</label>
              <textarea className="w-full border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-red-500 bg-gray-800 text-white" rows={4} placeholder={text[lang].contactContent} />
            </div>
            <button type="submit" className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">{text[lang].contactBtn}</button>
          </form>
          <div className="mt-6 text-center">
            <a href="https://www.instagram.com/achatfitness/" className="text-red-400 hover:text-red-300 underline text-sm lg:text-base">{text[lang].contactDM}</a>
          </div>
        </div>
      </div>

     {/* SNSリンク */}
    <div className="flex justify-center space-x-6 mt-16">
        <a href="https://www.facebook.com/yu.yeachat.you.gui/" className="text-white hover:text-blue-700 transition-colors">
          <FaFacebook size={32} />
        </a>
        <a href="https://www.instagram.com/achatfitness/" className="text-white hover:text-pink-600 transition-colors">
          <FaInstagram size={32} />
        </a>
      </div>

    </div>
    </>
  );
};

export default About; 