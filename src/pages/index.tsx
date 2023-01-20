import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import OverviewSection from "../styles/scss/module/OverviewSection.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <div>
        <section className={OverviewSection.overview_section}>
          <div className={OverviewSection.container}>
            <div>
              <img
                src="overview_text_title_pcver.png"
                alt=""
                className={OverviewSection.overview_title_img}
              />
              <img
                src="overview_text_title_spver.png"
                alt="就活対策のために設計された専用コース"
                className={OverviewSection.sp_overview_title_img}
              />
            </div>

            <div className={OverviewSection.overview_img_list}>
              <div className={OverviewSection.list}>
                <img
                  src="overview_image_01.png"
                  alt="大学1~4年までどの学年でも受講中"
                />

                <div className={OverviewSection.text1}>
                  <span>※</span>
                  <p className={OverviewSection.overview_text1}>
                    2022年1月～6月におけるDMM WEBCAMP受講中の大学生の内訳
                  </p>
                </div>
              </div>

              <div className={OverviewSection.list}>
                <img
                  src="overview_image_02.png"
                  alt="就職対策講義エントリーシート添削求人紹介サポート"
                />
                <div className={OverviewSection.text2}>
                  <span>※</span>
                  <p>
                    ご紹介には弊社指定の条件がございます。詳細は無料相談にてご相談ください。
                  </p>
                </div>
              </div>

              <div className={OverviewSection.list}>
                <img
                  src="overview_image_03.png"
                  alt="学割適用と安心の料金制度"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutNew>
  );
}
