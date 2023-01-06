import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import IntroSection from "../styles/scss/module/IntroSection.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <div>
        <section className="IntroSection">
          <div className={IntroSection.intro_box}>
            <img
              src="/intro_img.png"
              alt=""
              className={IntroSection.pc_intro_img}
            />
            <img
              src="/intro_img.png"
              alt=""
              className={IntroSection.sp_intro_img}
            />
            <p className={IntroSection.achivement}>
              ※ DMM WEBCAMPで所定の学習および転職活動を
              <br className={IntroSection.sp_br} />
              履行された方の実績（2022年7月時点）
            </p>
          </div>
        </section>
      </div>
    </LayoutNew>
  );
}
