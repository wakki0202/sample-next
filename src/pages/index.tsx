import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import Question from "../styles/scss/module/question.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <div>
        <section className={Question.wrapper}>
          <h2 className={Question.title}>
            <img src="/question_title.png" alt="" />
          </h2>

          <p className={Question.subtitle}>
            コース受講の内容やサービスに
            <br className={Question.tablet_ver} />
            関するよくある質問です。
          </p>

          <div className={Question.q_and_a_contents}>
            <div id="左列" className={Question.left_contents}>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>未経験でも受講できますか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>
                    はい、全く問題ございません。DMM
                    WEBCMAPは未経験者の学習に特化したカリキュラム・サポートを用意しております。
                  </p>
                </div>
              </div>
              <div id="box" className={Question.tablet_ver}>
                <div id="box" className={Question.q_and_a_box}>
                  <div id="flex" className={Question.q_line}>
                    <img src="/word_q.png" alt="" />
                    <p>未成年でも受講できますか？</p>
                  </div>
                  <div id="flex" className={Question.a_line}>
                    <img src="/word_a.png" alt="" />
                    <p>
                      はい、全く問題ございません。別途保護者様の同意が必要となります。
                    </p>
                  </div>
                </div>
              </div>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>受講者氏名とカード名義が違っても申し込みできますか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>
                    はい、全く問題ございません。
                    ただし、お客様情報には、必ず受講者本人の氏名を入力をご入力ください。
                  </p>
                </div>
              </div>
              <div id="box" className={Question.tablet_ver}>
                <div id="box" className={Question.q_and_a_box}>
                  <div id="flex" className={Question.q_line}>
                    <img src="/word_q.png" alt="" />
                    <p>エントリーシートの添削回数に上限はありますか？</p>
                  </div>
                  <div id="flex" className={Question.a_line}>
                    <img src="/word_a.png" alt="" />
                    <p>受講期間中でしたら添削回数に制限はございません。</p>
                  </div>
                </div>
              </div>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>エンジニア職種以外にどんな職種を紹介してもらえますか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>
                    基本的にはエンジニア職種のご紹介となりますが、総合職やその他職種の取り扱いもございます。
                    タイミングによってご紹介できる求人が変わりますので、詳しくは無料相談にてご確認ください。
                  </p>
                </div>
              </div>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>ポートフォリオに載せられる成果物はどんなものですか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>
                    受講中に習ったことを活かしてWebアプリを制作いただきます。オリジナルで制作するので、一人ひとり成果物は変わりますが、例えば、マイページ入力や投稿した記事にコメントやいいねができるSNSサービスを開発できるようになります。
                  </p>
                </div>
              </div>
              <div id="box" className={Question.tablet_ver}>
                <div id="box" className={Question.q_and_a_box}>
                  <div id="flex" className={Question.q_line}>
                    <img src="/word_q.png" alt="" />
                    <p>PCのスペックに指定はありますか？</p>
                  </div>
                  <div id="flex" className={Question.a_line}>
                    <img src="/word_a.png" alt="" />
                    <p>
                      下記のスペックを推奨しております。
                      <br />
                      <br /> ■ Mac <br />
                      最新のmacOSが動作するmacPC <br />
                      Intel Core i5以上（デュアルコア 2Ghz 以上）
                      <br /> メモリ8GB以上 <br />
                      SSD128GB以上
                      <br /> ＊最新版のMacBook Air, MacBook Proを推奨
                      <br />
                      ＊中古品や譲渡品などは、発売年によってはスペックを満たしていない場合があります。
                      <br />
                      <br />
                      ■Windows
                      <br /> Windows 10以降（64bit）
                      <br /> デュアルコア 2Ghz 以上のCPU
                      <br /> メモリ8GB以上
                      <br /> SSDもしくはHDD128GB以上（eMMCは不可）
                      <br />
                      <br />
                      PC購入にあたっての個別相談は出来かねますのでご了承ください。
                    </p>
                  </div>
                </div>
              </div>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>スマートフォン・タブレットのみで受講はできますか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>
                    カリキュラム内容への取り組み・課題制作等、受講にあたってはPCが必要となりますので、ご準備をお願いいたします。
                  </p>
                </div>
              </div>
            </div>
            <div id="右列" className={Question.right_contents}>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>未成年でも受講できますか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>
                    はい、全く問題ございません。別途保護者様の同意が必要となります。
                  </p>
                </div>
              </div>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>エントリーシートの添削回数に上限はありますか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>受講期間中でしたら添削回数に制限はございません。</p>
                </div>
              </div>
              <div id="box" className={Question.q_and_a_box}>
                <div id="flex" className={Question.q_line}>
                  <img src="/word_q.png" alt="" />
                  <p>PCのスペックに指定はありますか？</p>
                </div>
                <div id="flex" className={Question.a_line}>
                  <img src="/word_a.png" alt="" />
                  <p>
                    下記のスペックを推奨しております。
                    <br />
                    <br /> ■ Mac <br />
                    最新のmacOSが動作するmacPC <br />
                    Intel Core i5以上（デュアルコア 2Ghz 以上）
                    <br /> メモリ8GB以上 <br />
                    SSD128GB以上
                    <br /> ＊最新版のMacBook Air, MacBook Proを推奨
                    <br />
                    ＊中古品や譲渡品などは、発売年によってはスペックを満たしていない場合があります。
                    <br />
                    <br />
                    ■Windows
                    <br /> Windows 10以降（64bit）
                    <br /> デュアルコア 2Ghz 以上のCPU
                    <br /> メモリ8GB以上
                    <br /> SSDもしくはHDD128GB以上（eMMCは不可）
                    <br />
                    <br />
                    PC購入にあたっての個別相談は出来かねますのでご了承ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutNew>
  );
}
