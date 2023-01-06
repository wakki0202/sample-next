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
                alt=""
                className={OverviewSection.sp_overview_title_img}
              />
            </div>

            <div className={OverviewSection.overview_img_list}>
              <div>
                <img src="overview_image_01.png" alt="" />
                <p className={OverviewSection.overview_text1}>
                  ※2022年1月～6月におけるDMM WEBCAMP受講中の大学生の内訳
                </p>
              </div>

              <div>
                <img src="overview_image_02.png" alt="" />
                <p>
                  ※ご紹介には弊社指定の条件がございます。詳細は無料相談にてご相談ください。
                </p>
              </div>

              <div>
                <img src="overview_image_03.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutNew>
  );
}
