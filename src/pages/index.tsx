import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import JobSupport from "../styles/scss/module/job_support.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <section className={JobSupport.job_support_section}>
        <div id="チェック背景" className={JobSupport.grid_bg}>
          <picture id="タイトル画像" className={JobSupport.title_img}>
            <img src="/job_support_title.png" alt="" />
          </picture>

          <div id="3段" className={JobSupport.job_support_contents}>
            <div id="flex" className={JobSupport.content1}>
              <div className={JobSupport.content1_detail}>
                <h3>
                  1000名以上を未経験からエンジニアに転職成功させたノウハウを凝縮
                </h3>
                <div className={JobSupport.content1_detail_text}>
                  <p>
                    IT業界・エンジニア業界の内定を獲得するためには、業界・職種を深く理解し、自己分析の内容と紐づけをする必要があります。就活対策講義では、業界・職種の理解、自己分析の方法、エントリーシートの書き方、企業分析方法、面接対策研修など、就活に活きる豊富な知識をインプットすることができます。
                  </p>
                  <p className={JobSupport.content_detail_note}>
                    ※ DMM WEBCAMP
                    エンジニア転職受講者の中で契約時の職業がITエンジニア職以外と回答された方の割合
                    （無職/離職中を除く・2022年2月時点）
                  </p>
                </div>
              </div>
              <div className={JobSupport.content_img}>
                <img src="/job_support1.png" alt="" />
              </div>
            </div>

            <div id="flex" className={JobSupport.content2}>
              <div className={JobSupport.content_img}>
                <img src="/job_support2.png" alt="" />
              </div>
              <div className={JobSupport.content2_detail}>
                <h3>
                  45,000件以上の書類提出実績<span>※1</span>
                  ！あなたの魅力を引き出します！
                </h3>
                <div className={JobSupport.content2_detail_text}>
                  <p>
                    1人1人のエントリーシートに対し、就活に精通したアドバイザーが添削を行います。個別フィードバックをもらえるため、質の高いエントリーシートを作成することができます（OpenES
                    <span>※2</span>の添削を実施いたします）。
                  </p>
                  <p className={JobSupport.content_detail_note}>
                    ※1 DMM WEBCAMP
                    エンジニア転職でのエントリーシート提出実績(2022年7月時点)
                  </p>
                  <p className={JobSupport.content_detail_note}>
                    ※2
                    リクナビが提供しているサービスで、1つのエントリーシートをオンラインで登録することで複数の企業に提出することができます。
                  </p>
                </div>
              </div>
            </div>

            <div id="flex" className={JobSupport.content3}>
              <div className={JobSupport.content3_detail}>
                <h3>DMMだからこその豊富な求人をご紹介</h3>
                <div className={JobSupport.content3_detail_text}>
                  <p>
                    DMM
                    WEBCAMPは、エンジニア職種で1,000名以上の転職成功実績がございます。専門性に特化した、豊富な求人があるからこそ、受講生様の希望に合った求人をご紹介できます（エンジニア職種以外のご紹介も可能です）。
                  </p>
                </div>
              </div>

              <div className={JobSupport.content_img}>
                <img src="/job_support3.png" alt="" />
              </div>
            </div>
          </div>

          <div
            id="エンジニア職種のインターン先紹介もあります！"
            className={JobSupport.intern_for_engineer}
          >
            <div className={JobSupport.balloon_img}>
              <img src="/job_support_balloon.png" alt="" />
            </div>
            <div>
              <h3>エンジニア職種のインターン先紹介もあります！</h3>
            </div>
          </div>

          <div id="注意" className={JobSupport.job_support_note}>
            <p className={JobSupport.job_support_note_title}>注意</p>

            <div className={JobSupport.job_support_note_detail}>
              <p>
                ・インターンや求人のご紹介には弊社指定の条件がございます。詳細は無料相談にてご相談ください。
              </p>
              <p>
                ・就活対策コースは、プログラミングを学んでITエンジニア職種の内定獲得を目指す対策コースです。就活の内定獲得やインターンへの参加を保証するものではありませんので、予めご了承ください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </LayoutNew>
  );
}
