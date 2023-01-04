import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import Curriculum from "../styles/scss/module/curriculum.module.scss";

export default function Home() {
  return (
    <div>
      <section className={ Curriculum.curriculum_section }>
        <div>
          <picture>
            <img src="/curriculum_title.png" alt="" className={ Curriculum.title_img } />
          </picture>

          <p className={ Curriculum.title_text }>プログラミングを基礎から学べるコースです。オリジナルWebサービスを作成します。<br/>就活に活用できるポートフォリオの作成も可能です。</p>
        </div>

        <div className={ Curriculum.curriculum_contents }>
          <div className={ Curriculum.contents_list }>

            <div  className={Curriculum.content_first}>
              <div className={Curriculum.content_items}>
                <picture className={Curriculum.content_badge}>
                  <img src="/curriculum_badge1.png" alt="" />
                </picture>
                <picture className={Curriculum.content_icon1}>
                  <img src="/curriculum_content_icon1.png" alt="" />
                </picture>
              </div>
              <h3><span>知識<ruby>0<rt>ゼロ</rt></ruby></span>からでもOKな<br />カリキュラム</h3>
              <p>未経験の方でも始められるプログラミングの基礎作りのカリキュラムです。 Webの仕組みの説明から始まるのでWebの知識がなくても安心。</p>
            </div>

            <div className={Curriculum.content_second}>
              <div className={Curriculum.content_items}>
                <picture className={Curriculum.content_badge}>
                  <img src="/curriculum_badge2.png" alt="" />
                </picture>
                <picture  className={Curriculum.content_icon2}>
                  <img src="/curriculum_content_icon2.png" alt="" />
                </picture>
              </div>
              <h3><span>週2回</span>メンタリングで<br />モチベーションをサポート</h3>
              <p>一人ひとりにあった学習計画で最後まで二人三脚でサポートしていきます。「学習が進まない」「やる気が出ない」「これが分からない」など 何でもご相談ください！</p>
            </div>

            <div  className={Curriculum.content_third}>
              <div className={Curriculum.content_items}>
                <picture className={Curriculum.content_badge}>
                  <img src="/curriculum_badge3.png" alt="" />
                </picture>
                <picture  className={Curriculum.content_icon3}>
                  <img src="/curriculum_content_icon3.png" alt="" />
                </picture>
              </div>
              <h3><span>現役エンジニア</span>に<br />分かるまで徹底的に質問可能</h3>
              <p>現場で活躍しているエンジニア（メンター）から実践的な生きた知識を吸収することができます。 分からない箇所は納得するまで何回でも質問可能です。</p>
            </div>

          </div>
          <div className={Curriculum.note_area}>
            <p>※1 DMM WEB CAMPエンジニア転職受講者の中で契約時の職業がITエンジニア職以外と回答された方の割合（無職/離職中を除く・2022年2月時点）</p>
            <p>※2 本申し込み後に行われる定期メンタリング実施後アンケートによる満足率（N=780）（2022/01/24〜2022/04/19）</p> 
          </div>
        </div>

        <div className={Curriculum.tool_wrap}>

          <div className={Curriculum.tool_wrap_title}>
            <div className={Curriculum.tool_wrap_title_balloon_img}>
              <picture>
                <img src="/curriculum_tool_title_balloon.png" alt="" />
              </picture>
            </div>
            <h3>実務ですぐ活かせる各種ツールも一緒に学べる</h3>
          </div>

          <p>各コースで学ぶことができる言語やスキルだけでは<br className={Curriculum.sp_ver} />なく、現役エンジニアが実際に利用することが<br className={Curriculum.sp_ver} />ある<br className={Curriculum.pc_ver} />各種ツールの講義も無料でご用意しています。<br className={Curriculum.sp_ver}/>実際に現場に出た時にスムーズに仕事を<br className={Curriculum.sp_ver}/>進めることができます。</p>
          <div className={Curriculum.tool_items}>
            <div>
              <picture>
                <img src="/curriculum_design_tools.png" alt="" />
              </picture>
              <p>デザインツール</p>
            </div>
            <div>
              <picture>
                <img src="/curriculum_develop_tools.png" alt="" />
              </picture>
              <p>開発ツール</p>
            </div>
            <div>
              <picture>
                <img src="/curriculum_web_tools.png" alt="" />
              </picture>
              <p>Webアプリ</p>
            </div>
          </div>

          <p className={Curriculum.attention}>※ 講義は動画のみとなります。</p>
        </div>


        <div className={ Curriculum.curriculum_course}>
          <picture className={Curriculum.pc_ver}>
            <img src="/curriculum_course_pc_img.png" alt="" />
          </picture>
          <picture className={Curriculum.sp_ver}>
            <img src="/curriculum_sp_img.png" alt="" />
          </picture>
        </div>


        <div className={Curriculum.learn_detail_time}>
            <div className={Curriculum.learn_detail_time_title}>
              <picture><img src="/curriculum_clock_icon.png" /></picture>
              <h3>学習内訳時間</h3>
            </div>
            <div className={Curriculum.learn_detail_time_contents}>
              <div className={Curriculum.learn_detail_time_items1}>
                <picture>
                  <img src="/curriculum_desktop_icon.png" alt="" />
                </picture>
                <p className={Curriculum.pc_ver}>カリキュラム学習時間 100時間</p>
              </div>
              <div className={Curriculum.learn_detail_time_items2}>
                <picture>
                  <img src="/curriculum_pen_icon.png" alt="" />
                </picture>
                <p  className={Curriculum.pc_ver}>課題学習時間 41時間</p>
              </div>
              <div className={Curriculum.learn_detail_time_items3}>
                <picture>
                  <img src="/curriculum_portfolio_icon.png" alt="" />
                </picture>
                <p  className={Curriculum.pc_ver}>ポートフォリオ作成<br/>30〜50時間</p>
              </div>
          </div>
          <div className={ Curriculum.sp_ver }>
            <div className={Curriculum.learn_detail_time_items1_sp}>
              <img src="/curriculum_sp_desktop_icon.png" alt="" />
              <p>カリキュラム学習 100時間</p>
            </div>
            <div className={Curriculum.learn_detail_time_items2_sp}>
              <img src="/curriculum_sp_pen_icon.png" alt="" />
              <p>課題学習 41時間</p>
            </div>
            <div className={Curriculum.learn_detail_time_items3_sp}>
              <img src="/curriculum_sp_portfolio_icon.png" alt="" />
              <p>ポートフォリオ作成 30〜50時間</p>
            </div>
          </div>
        </div>

        <div className={Curriculum.three_step}>
          <div  className={ Curriculum.pc_ver }>
            <picture>
              <img src="/curriculum_step1.png" alt="" />
            </picture>

            <picture>
              <img src="/arrow_right.png" alt="" />
            </picture>

            <picture>
              <img src="/curriculum_step2.png" alt="" />
            </picture>

            <picture>
              <img src="/arrow_right.png" alt="" />
            </picture>

            <picture>
              <img src="/curriculum_step3.png" alt="" />
            </picture>
          </div>
          <div className={ Curriculum.sp_ver }>
            <picture>
              <img src="/curriculum_sp_three_step.png" alt="" />
            </picture>
          </div>
        </div>

        <div className={Curriculum.acquired_skills}>
          <h3>身につくスキル</h3>
          <div className={ Curriculum.pc_ver }>
            <div className={Curriculum.acquired_skills_contents}>
              <div className={Curriculum.acquired_skills_content}>
                <div className={Curriculum.acquired_skills_content_img}>
                  <picture>
                    <img src="/curriculum_htmlcss_icon.png" alt="" />
                  </picture>
                </div>
                <p>HTML/CSS</p>
              </div>
            
              <div>
                <div className={Curriculum.acquired_skills_content_img_ruby}>
                  <picture>
                    <img src="/curriculum_ruby_icon.png" alt="" />
                  </picture>
                </div>
                <p>Ruby<br/>Ruby on Rails</p>
              </div>
            
              <div>
                <div className={Curriculum.acquired_skills_content_img}>
                  <picture>
                    <img src="/curriculum_web_icon.png" alt="" />
                  </picture>
                </div>
                <p>Webへの理解</p>
              </div>
            
              <div>
                <div className={Curriculum.acquired_skills_content_img}>
                  <picture>
                    <img src="/curriculum_code_icon.png" alt="" />
                  </picture>
                </div>
                <p>プログラムへの<br/>理解</p>
              </div>


              <div>
                <div className={Curriculum.acquired_skills_content_img}>
                  <picture>
                    <img src="/curriculum_gear_icon.png" alt="" />
                  </picture>
                </div>
                <p>開発フローへの<br/>理解</p>
              </div>
            </div>
          </div>
          <div className={ Curriculum.sp_ver }>
            <picture>
              <img src="/curriculum_acquired_skills.png" alt="" />
            </picture>
          </div>
        </div>

        <div className={Curriculum.portfolio_wrap}>
          <div>
            <h3>就活の強みとなる<br className={ Curriculum.sp_ver } />ポートフォリオを作成！</h3>
          </div>
          <p>オリジナルWebアプリケーション制作の実績を<br  className={ Curriculum.pc_ver }/>エントリーシートにプラスできます。</p>
        </div>
       
      
      </section>
    </div>
  );
}
