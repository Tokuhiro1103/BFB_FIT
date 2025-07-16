import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">お問い合わせ</h1>
      <p className="mb-4">ご質問やご相談は、下記フォームまたはInstagramのDMからお気軽にどうぞ！</p>
      <form className="space-y-4 max-w-md">
        <div>
          <label className="block mb-1 font-semibold">氏名</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="お名前" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">メールアドレス</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="example@mail.com" />
        </div>
        <div>
          <label className="block mb-1 font-semibold">ご相談内容</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="ご相談内容を入力してください" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">送信</button>
      </form>
      <div className="mt-6">
        <a href="#" className="text-blue-600 underline">InstagramでDMする</a>
      </div>
    </div>
  );
};

export default Contact; 