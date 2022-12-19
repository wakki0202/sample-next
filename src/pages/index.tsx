import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import MV from "../styles/scss/module/mv.module.scss"

export default function Home() {
  return (
    <div>
      <section className={MV.MVSection}>
        <picture>
          <img src="/Frame 9742.png" alt="" />
        </picture>
        
        <div className={MV.cta_btn}>
            <a href="/free-trial/" className={MV.box} >
            <div>
              <picture>
                <img src="/Group 8261.png" alt="" className={MV.balloon} />
              </picture>
            </div>


              <div className={MV.container}>
                
                <div>
                  <picture>
                    <img src="/Frame 9788.png" alt="" className={MV.BalloonImg} />
                  </picture>
                  </div>
                <div>
                  <picture>
                    <img src="/無料相談に申し込む.png" alt="" className={MV.TextImg} />
                  </picture>
                </div>
              
              </div>

              
            </a>
          </div>
      </section>
    </div>
  );
}
