import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import intro_section from "../styles/scss/module/intro_section.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <div>
        <section className="intro_section">
          <div className={intro_section.intro_box}>
            <img
              src="/intro_img.png"
              alt=""
              className={intro_section.intro_img}
            />
            <img
              src="/intro_img_sp.png"
              alt=""
              className={intro_section.intro_img_sp}
            />
            <p className={intro_section.achivement}>
              ※ DMM WEBCAMPで所定の学習および転職活動を
              <br className={intro_section.sp_br} />
              履行された方の実績（2022年7月時点）
            </p>
          </div>
        </section>
      </div>
    </LayoutNew>
  );
}
