import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import CtaSection from '../styles/module/CtaSection.module.scss';

export default function Home() {
  return (
   
      <div>
        <section className={CtaSection.CtaSection}>
          <picture>
          <img src="img/cta_section_heading.png" alt="" className={CtaSection.FreeConsultationImg} />
        </picture>
        

        <div className={CtaSection.CtaBtn}>
          <a className={CtaSection.CtaBtnLink}>
            <picture>
              <img src="img/cta_section_baloon2.png" alt="" className={CtaSection.BaloonImg} />
            </picture>
            <picture>
              <img src="img/cta_section_men.png" alt="" className={CtaSection.MenImg}  />
            </picture>
            
            <div className={CtaSection.CtnBtnContent}>
              <picture>
                <img src="img/mv_btn_txt.png" alt="" className={CtaSection.TxtImg}  />
              </picture>
              <picture>
                <img src="img/Frame 9792.png" alt="" className={CtaSection.ArrowImg}  />
              </picture>
            </div>
          </a>
        </div>
          <p className={CtaSection.FreeConsultationSurvey}>
            ※ 無料相談実施後アンケートによる満足率(N=146)
            <br className={CtaSection.pc_none} />
            【2022年2月2日~2022年4月16日】
        </p>
        
        <div className={CtaSection.CommentArea}>
          <h3 className={CtaSection.CommentAreaTitle}>
            多数の方に無料体験のご満足を
            <br className={CtaSection.pc_none} />
            いただけています！
          </h3>

          <div className={CtaSection.CommentImgList}>
            <picture>
              <img src="img/cta_section_comment_01.png" alt="" className={CtaSection.CommentImg} />
            </picture>

            <picture>
              <img src="img/cta_section_comment_02.png" alt="" className={CtaSection.CommentImg} />
            </picture>

            <picture>
              <img src="img/cta_section_comment_03.png" alt="" className={CtaSection.CommentImg}/>
            </picture>
          </div>
        </div>
        </section>
      </div>
  );
}
