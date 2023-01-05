import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import MV from "../styles/scss/module/mv.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <div>
        <section className={MV.mv_section}>
          <div className={MV.pc_ver}>
            <img src="/mv_pcver.png" alt="" />

            <div className={MV.cta_btn}>
              <a href="/free-trial/" className={MV.box}>
                <div>
                  <img src="/balloon.png" alt="" className={MV.balloon} />
                </div>

                <div className={MV.container}>
                  <div>
                    <img src="/arrow.png" alt="" className={MV.arrow} />
                  </div>
                  <div>
                    <img src="/btn_text.png" alt="" className={MV.text_img} />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={MV.sp_ver}>
            <img src="/mv_spver.png" alt="" />

            <div className={MV.cta_btn}>
              <a href="/free-trial/" className={MV.box}>
                <div>
                  <img src="/balloon.png" alt="" className={MV.balloon} />
                </div>

                <div className={MV.container}>
                  <div>
                    <img src="/arrow.png" alt="" className={MV.arrow} />
                  </div>
                  <div>
                    <img src="/btn_text.png" alt="" className={MV.text_img} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </LayoutNew>
  );
}
