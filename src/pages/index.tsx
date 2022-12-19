import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import RecommendSection from 'src/styles/scss/module/RecommendSection.module.scss'

export default function Home() {
  return (
    <div>

      <section className={RecommendSection.RecommendSection}>
        <div className={RecommendSection.RecommendWrap}>
          <div className={RecommendSection.PCStyle}>
            <picture>
              <img src="/recommend_text_title_1440px.png" alt="" className={RecommendSection.RecommendTitleImg} />
            </picture>

            <div className={RecommendSection.RecommendImgList}>
              <picture>
                <img src="/Frame 10297.png" alt="" className={
                  RecommendSection.RecommendImg
                } />
              </picture>
              
              {/* <picture>
                <img src="/Frame 10294.png" alt=""  className={RecommendSection.RecommendImg1} />
              </picture>

              <picture>
                <img src="/Frame 10295.png" alt=""  className={RecommendSection.RecommendImg2} />
              </picture>

              <picture>
                <img src="/Frame 10296.png" alt=""  className={RecommendSection.RecommendImg3} />
              </picture> */}

              
            </div>
          </div>

          <div className={RecommendSection.SPStyle}>
            <picture>
              <img src="/recommend_text_title_375px.png" alt="" className={RecommendSection.SPRecommendTitleImg} />
            </picture>
            <div className={RecommendSection.SPRecommendImgList}>
              <picture>
                <img src="/Frame 10294 (1).png" alt="" className={
                  RecommendSection.SPRecommendImg1
                } />
              </picture>
              <picture>
                <img src="/Frame 10295 (1).png" alt="" className={
                  RecommendSection.SPRecommendImg2
                } />
              </picture>
              <picture>
                <img src="/Frame 10296 (1).png" alt="" className={
                  RecommendSection.SPRecommendImg3
                } />
              </picture>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
