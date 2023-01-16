import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import Company from "../styles/scss/module/company.module.scss";

export default function Home() {
  return (
    <LayoutNew
      header={<></>}
      footer={<footer className={styles.footer}></footer>}
    >
      <section className={Company.company_section}>
        <div id="title" className={Company.title_img}>
          <img src="/company_title_img.png" alt="" />
        </div>

        <div className={Company.company_section_content}>
          <div id="flex" className={Company.comment_wrap}>
            <div id="relative" className={Company.recruiter_introduction}>
              <div
                id="absolute サイバーエージェント新卒採用メンバー"
                className={Company.recruiter_introduction_badge}
              >
                <img src="/company_name.png" alt="" />
              </div>
              <div id="flex" className={Company.recruiter_introduction_detail}>
                <div className={Company.recruiter_introduction_detail_img}>
                  <img src="/company_recruiter.png" alt="" />
                </div>

                <div className={Company.recruiter_introduction_detail_text}>
                  <p>
                    株式会社サイバーエージェントグループ
                    <br className={Company.pc_ver} />
                    （アプリボット所属）
                  </p>
                  <p>グローバルパートナー事業部</p>
                  <p>事業部長</p>
                  <p className={Company.recruiter_name}>
                    平山拓己<span>氏</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={Company.recruiter_comment_highlight}>
              <img src="/company_comment.png" alt="" />
            </div>
          </div>

          <div id="コメント" className={Company.recruiter_comment_overview}>
            <div className={Company.recruiter_comment_highlight_sp}>
              <img src="/company_comment.png" alt="" />
            </div>
            <p>
              エンジニア職種にとどまらず、全てのビジネスマンにWebの知識は必須になっています。就活生のエントリーシートに、プログラミングを用いた個人の成果物があった場合、必ず目を通しますね。どの職種でもアドバンテージになると思います。TOEICだと数字でしか判断ができないのですが、個人ごとのWebの成果物の場合「なぜそのアプリケーションを作成したのか？」まで見ることができるため、ビジネス観点まで考察することができます。また、Webの知識を得た上でビジネスマンになることは、ポジティブでしかないと思います。
            </p>
          </div>
        </div>
        <div id="relative" className={Company.company_survey_result}>
          <div id="absolute balloon" className={Company.balloon_img}>
            <img src="/company_balloon.png" alt="" className={Company.pc_ver} />
            <img
              src="/company_balloon_sp.png"
              alt=""
              className={Company.sp_ver}
            />
          </div>
          <h3>
            就活で個人のWebの
            <br className={Company.sp_ver} />
            成果物がある場合、
            <br className={Company.sp_ver} />
            企業の97％が参考になると回答
          </h3>
        </div>
      </section>
    </LayoutNew>
  );
}
