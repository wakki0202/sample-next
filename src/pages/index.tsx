import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import LearningSupport from "../styles/module/learning_support.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <section>
        <div id="じょうげよはくpadding80" className={LearningSupport.inner}>
          <h2 id="title" className={LearningSupport.title}>
            <img src="/learning_support_title.png" alt="" />
          </h2>

          <div
            id="3つのサポート"
            className={LearningSupport.support_contents_wrap}
          >
            <h3 className={LearningSupport.support_contents_title}>
              DMM WEBCAMPの
              <br className={LearningSupport.sp_ver} />
              3つの学習サポート
            </h3>
            <p className={LearningSupport.support_contents_subtitle}>
              知識ゼロからのエンジニア転職実績ある学習環境で万全のサポートを実施！
            </p>
            <div id="flex" className={LearningSupport.support_contents_list}>
              <div id="content1" className={LearningSupport.support_content}>
                <div id="box1" className={LearningSupport.support_content_box}>
                  <p className={LearningSupport.support_content_title}>
                    1.マンツーマンのメンタリング
                  </p>
                  <img src="/learning_support1.png" alt="" />
                </div>
                <p
                  id="box1-text"
                  className={LearningSupport.support_content_description}
                >
                  学習サポートとして1回25分、週に2回の定期メンタリングを実施いたします。疑問点の解消や学習方法のレクチャーはもちろん、1週間の振り返りなど、一人ひとりに合わせたサポートを行っています。
                </p>
              </div>

              <div id="content2" className={LearningSupport.support_content}>
                <div id="box2" className={LearningSupport.support_content_box}>
                  <p className={LearningSupport.support_content_title}>
                    2.いつでも質問可能なチャットサポート
                  </p>
                  <img src="/learning_support2.png" alt="" />
                </div>
                <p
                  id="box2-text"
                  className={LearningSupport.support_content_description}
                >
                  日々の学習支援として24時間対応のチャットサポートをご用意しています。学習する上での疑問点を随時質問できる他、学習中に出される課題に対するレビューも無制限で受けることが可能です。
                </p>
              </div>

              <div id="content3" className={LearningSupport.support_content}>
                <div id="box3" className={LearningSupport.support_content_box}>
                  <p className={LearningSupport.support_content_title}>
                    3.学習の進捗を見える化
                  </p>
                  <img src="/learning_support3.png" alt="" />
                </div>
                <p
                  id="box3-text"
                  className={LearningSupport.support_content_description}
                >
                  学習を習慣化させるために、専用のシステムを導入し、自身の学習進捗状況を常に見える化。短期的な目標の達成はもちろん、長期的な目標まで到達できるよう、それぞれの自律的な学びを支えます。
                </p>
              </div>
            </div>
          </div>

          <div id="手厚くサポート" className={LearningSupport.merits_wrap}>
            <h3 className={LearningSupport.merits_title}>
              DMM認定の現役エンジニア講師
              <br className={LearningSupport.sp_ver} />
              が日々の学習を手厚くサポート
            </h3>
            <p className={LearningSupport.merits_subtitle}>
              DMM WEBCAMPでは「メンター」と呼ばれる
              <br className={LearningSupport.sp_ver} />
              現役エンジニア講師が、一人ひとりの学びに
              <br className={LearningSupport.sp_ver} />
              合わせたマンツーマン体制で
              <br className={LearningSupport.pc_ver} />
              速戦力までの道のりを
              <br className={LearningSupport.sp_ver} />
              サポートしていきます。
              <br className={LearningSupport.sp_ver} />
              さらに、講師の選考には通過率わずか10%という
              <br className={LearningSupport.sp_ver} />
              厳しい基準を設けており、
              <br className={LearningSupport.pc_ver} />
              確かなスキルと
              <br className={LearningSupport.sp_ver} />
              講師としての素質を併せ持った
              <br className={LearningSupport.sp_ver} />
              質の高いメンターのみが在籍しています。
            </p>
            <div id="flex" className={LearningSupport.merits_list}>
              <div id="content1" className={LearningSupport.merit1}>
                <img src="/learning_support_merit1.png" alt="" />
                <p className={LearningSupport.merit1_text}>
                  ※チャットサポートはカリキュラムに精通した担当者が対応します。
                </p>
              </div>

              <div id="content2" className={LearningSupport.merit2}>
                <img src="/learning_support_merit2.png" alt="" />
              </div>

              <div id="content3" className={LearningSupport.merit3}>
                <img src="/learning_support_merit3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutNew>
  );
}
