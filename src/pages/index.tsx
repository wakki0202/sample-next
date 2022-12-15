import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import CampaignSection from 'src/styles/scss/module/CampaignSection.module.scss'

export default function Home() {
  return (
    <div>
      <section className={CampaignSection.CampaignSection}>
        <picture>
          <img src="Frame 9868.png" alt="" className={CampaignSection.CampaignTitleImg} />
        </picture>
        
      </section>
    </div>
  );
}
