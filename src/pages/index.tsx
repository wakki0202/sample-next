import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import IntroSection from '../styles/scss/module/IntroSection.module.scss'

export default function Home() {
  return (
    <div>
      <section className="IntroSection">
        <div className={IntroSection.IntroBox}>
        <picture>
          <img src="IntroGroup.png" alt="" className={IntroSection.IntroImg} />
        </picture>
          <p className={IntroSection.Achivement}>※ DMM WEBCAMPで所定の学習および転職活動を履行された方の実績（2022年7月時点）</p>
        </div>
      </section>
      
    </div>
  );
}
