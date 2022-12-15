import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import OverviewSection from '../styles/scss/module/OverviewSection.module.scss'

export default function Home() {
  return (
    <div>
      <section className={OverviewSection.OverviewSection}>
        <div className={OverviewSection.Container}>

          <picture className="">
            <img src="exclusive_text_title_1440px.png" alt="" className={OverviewSection.OverviewTitleImg} />
          </picture>

          <div className={OverviewSection.ExclusiveImgList} >
            <div>
              <picture>
                <img src="exclusive_image_01.png" alt="" />
                </picture>
                <p className={OverviewSection.ExclusiveText1}>※2022年1月～6月におけるDMM WEBCAMP受講中の大学生の内訳</p>
            </div>

            <div>
              <picture>
                <img src="exclusive_image_02.png" alt="" />
                </picture>
                <p>※ご紹介には弊社指定の条件がございます。詳細は無料相談にてご相談ください。</p>
            </div>
              
            <div>
              <picture>
                <img src="Frame 10113.png" alt="" />
              </picture>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
