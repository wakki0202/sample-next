import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import Curriculum from "../styles/scss/module/curriculum.module.scss";

export default function Home() {
  return (
    <div>
      <section className={ Curriculum.CurriculumSection }>
        <div>
          <picture>
            <img src="/Frame 9867.png" alt="" className={ Curriculum.TitleImg } />
          </picture>

          <p className={ Curriculum.TitleText }>プログラミングを基礎から学べるコースです。オリジナルWebサービスを作成します。<br/>就活に活用できるポートフォリオの作成も可能です。</p>
        </div>

        <div className={ Curriculum.Content1 }>
          <picture>
              <img src="/Frame 9748.png" alt="" className={ Curriculum.ContentImg1 } />
              <img src="/Frame 9748 (1).png" alt="" className={ Curriculum.SPContentImg1 } />
          </picture>
          <p>※1 DMM WEB CAMPエンジニア転職受講者の中で契約時の職業がITエンジニア職以外と回答された方の割合（無職/離職中を除く・2022年2月時点）</p>
          <p>※2 本申し込み後に行われる定期メンタリング実施後アンケートによる満足率（N=780）（2022/01/24〜2022/04/19）</p> 
        </div>
        <div className={ Curriculum.Content2 }>
          <picture>
            <img src="/Frame 9792 (1).png" alt="" className={Curriculum.ContentImg2} />
            <img src="/Frame 9792 (2).png" alt="" className={ Curriculum.SPContentImg2 } />
          </picture>
        </div>
        <div className={ Curriculum.Content3 }>
          <picture> 
            <img src="/Frame 9838.png" alt="" className={Curriculum.ContentImg3} />
            <img src="/Frame 9880.png" alt="" className={ Curriculum.SPContentImg3 } />
          </picture>
        </div>
      </section>
    </div>
  );
}
