import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import Faq from "src/styles/scss/module/faq.module.scss";

export default function Home() {
  return (
    <div className={Faq.wrap}>
      <h2 className={Faq.title}>よくある質問</h2>
      <p className={Faq.subtitle}>
        コース受講の内容やサービスに関する
        <br />
        よくある質問です。
      </p>
      <div id="1000px" className={Faq.contents}>
        <div id="flex" className={Faq.first_line}>
          <div id="left" className={Faq.content}>
            <div id="flex" className={Faq.question}>
              <span className={Faq.q}>Q</span>
              <p>未経験でも受講できますか？</p>
            </div>
            <div id="flex" className={Faq.answer}>
              <span className={Faq.a}>A</span>
              <p>
                はい、全く問題ございません。DMM
                WEBCMAPは未経験者の学習に特化したカリキュラム・サポートを用意しております。
              </p>
            </div>
          </div>
          <div id="right" className={Faq.content}>
            <div id="flex" className={Faq.question}>
              <span className={Faq.q}>Q</span>
              <p>どのコースを受けるべきかわかりません</p>
            </div>
            <div id="flex" className={Faq.answer}>
              <span className={Faq.a}>A</span>
              <p>
                「無料相談」でご相談いただくことをお勧めします。ご自身でご受講を通してできるようになりたいこと・学びたいことを無料相談にてお尋ねください。最適なコースをご提案させていただきます。無料相談はこちらよりお申し込みください。
              </p>
            </div>
          </div>
        </div>
        <div id="flex" className={Faq.second_line}>
          <div id="left" className={Faq.content}>
            <div id="flex" className={Faq.question}>
              <span className={Faq.q}>Q</span>
              <p>複数コースを同時に受講することはできますか？</p>
            </div>
            <div id="flex" className={Faq.answer}>
              <span className={Faq.a}>A</span>
              <p>
                同時にご受講いただけるコースは1コースのみとなっております。コース修了後、別コースのお申し込みをお願いいたします。複数のコースを受講いただいた方向けに、次回割引クーポンのご用意もございます。詳細はこちらご確認ください。
              </p>
            </div>
          </div>
          <div id="right" className={Faq.content}>
            <div id="flex" className={Faq.question}>
              <span className={Faq.q}>Q</span>
              <p>各コースの受講料を知りたいです</p>
            </div>
            <div id="flex" className={Faq.answer}>
              <span className={Faq.a}>A</span>
              <p>各コースのページにてご確認ください。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
