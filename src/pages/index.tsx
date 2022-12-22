import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import CtaSection from '../styles/module/CtaSection.module.scss';

export default function Home() {
  return (
   <LayoutNew
      header={<></>}
      footer={<></>}
    >
      <div>
        <section className={CtaSection.cta_section}>
          <picture>
          <img src="img/cta_section_heading.png" alt="" className={CtaSection.free_consultation_img} />
        </picture>
        

        <div className={CtaSection.cta_btn}>
          <a className={CtaSection.cta_btn_link}>
            <picture>
              <img src="img/cta_section_balloon.png" alt="" className={CtaSection.balloon_img} />
            </picture>
            <picture>
              <img src="img/cta_section_men.png" alt="" className={CtaSection.men_img}  />
            </picture>
            
            <div className={CtaSection.ctn_btn_content}>
              <picture>
                <img src="img/cta_section_btn_txt.png" alt="" className={CtaSection.text_img}  />
              </picture>
              <picture>
                <img src="img/cta_section_arrow.png" alt="" className={CtaSection.arrow_img}  />
              </picture>
            </div>
          </a>
        </div>
          <p className={CtaSection.free_consultation_survey}>
            ※ 無料相談実施後アンケートによる満足率(N=146)
            <br className={CtaSection.pc_none} />
            【2022年2月2日~2022年4月16日】
        </p>
        
        <div className={CtaSection.comment_area}>
          <h3 className={CtaSection.comment_area_title}>
            多数の方に無料体験のご満足を
            <br className={CtaSection.pc_none} />
            いただけています！
          </h3>

          <div className={CtaSection.comment_img_list}>
            <picture>
              <img src="img/cta_section_comment_01.png" alt="" className={CtaSection.comment_img} />
            </picture>

            <picture>
              <img src="img/cta_section_comment_02.png" alt="" className={CtaSection.comment_img} />
            </picture>

            <picture>
              <img src="img/cta_section_comment_03.png" alt="" className={CtaSection.comment_img}/>
            </picture>
          </div>
        </div>
        </section>
      </div>
    </LayoutNew>
  );
}
