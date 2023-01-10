import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import RecommendSection from "src/styles/scss/module/RecommendSection.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <div>
        <section className={RecommendSection.recommend_section}>
          <div className={RecommendSection.recommend_wrap}>
            <div className={RecommendSection.pc_style}>
              <div>
                <img
                  src="/recommend_text_title_1440px.png"
                  alt=""
                  className={RecommendSection.recommend_title_img}
                />
              </div>

              <div className={RecommendSection.recommend_img_list}>
                <ul className={RecommendSection.recommend_img_list1}>
                  <li className={RecommendSection.recommend_container}>
                    <div className={RecommendSection.recommend_box}>
                      <div className={RecommendSection.bg_black}>
                        <p>IT企業に就職・インターンをしたい</p>
                      </div>
                      <div className={RecommendSection.recommend_text}>
                        <p>
                          ・IT企業に興味があるけど、Webやプログラミングなどの業界知識がない
                        </p>
                        <p>・事前に業界知識を身に着けておきたい</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/recommend_polygon_right.svg"
                      alt=""
                      className={RecommendSection.recommend_polygon}
                    />
                  </li>
                  <li>
                    <img
                      src="/recommend_image_1.png"
                      alt=""
                      className={RecommendSection.recommend_img}
                    />
                  </li>
                </ul>

                <ul className={RecommendSection.recommend_img_list2}>
                  <li>
                    <div className={RecommendSection.recommend_box}>
                      <div className={RecommendSection.bg_black}>
                        <p>就活でアピールできる実績がほしい</p>
                      </div>
                      <div className={RecommendSection.recommend_text}>
                        <p>
                          ・就職活動でエントリーシートに何を書いて良いかわからない
                        </p>
                        <p>・実績を積んで他の就活生に差をつけたい</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/recommend_polygon_right.svg"
                      alt=""
                      className={RecommendSection.recommend_polygon}
                    />
                  </li>
                  <li>
                    <img
                      src="/recommend_image_2.png"
                      alt=""
                      className={RecommendSection.recommend_img}
                    />
                  </li>
                </ul>

                <ul className={RecommendSection.recommend_img_list3}>
                  <li>
                    <div className={RecommendSection.recommend_box}>
                      <div className={RecommendSection.bg_black}>
                        <p>
                          エンジニアになりたいけど
                          <br />
                          何をしていいかわからない
                        </p>
                      </div>
                      <div className={RecommendSection.recommend_text}>
                        <p>
                          ・独学で挫折してしまい何から手をつけたら良いかわからない
                        </p>
                        <p>・相談できる人がいないので不安</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/recommend_polygon_right.svg"
                      alt=""
                      className={RecommendSection.recommend_polygon}
                    />
                  </li>
                  <li>
                    <img
                      src="/recommend_image_3.png"
                      alt=""
                      className={RecommendSection.recommend_img}
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className={RecommendSection.sp_style}>
              <div>
                <img
                  src="/recommend_text_title_375px.png"
                  alt=""
                  className={RecommendSection.sp_recommend_title_img}
                />
              </div>
              <div className={RecommendSection.sp_recommend_img_list}>
                <ul className={RecommendSection.sp_recommend_img_list1}>
                  <li>
                    <div className={RecommendSection.recommend_box}>
                      <div className={RecommendSection.bg_black}>
                        <p>IT企業に就職・インターンをしたい</p>
                      </div>
                      <div className={RecommendSection.recommend_text}>
                        <p>
                          ・IT企業に興味があるけど、Webやプログラミングなどの業界知識がない
                        </p>
                        <p>・事前に業界知識を身に着けておきたい</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/recommend_polygon_bottom.png"
                      alt=""
                      className={RecommendSection.sp_recommend_polygon}
                    />
                  </li>
                  <li>
                    <img
                      src="/recommend_image_1.png"
                      alt=""
                      className={RecommendSection.sp_recommend_img}
                    />
                  </li>
                </ul>

                <ul className={RecommendSection.sp_recommend_img_list2}>
                  <li>
                    <div className={RecommendSection.recommend_box}>
                      <div className={RecommendSection.bg_black}>
                        <p>就活でアピールできる実績がほしい</p>
                      </div>
                      <div className={RecommendSection.recommend_text}>
                        <p>
                          ・就職活動でエントリーシートに何を書いて良いかわからない
                        </p>
                        <p>・実績を積んで他の就活生に差をつけたい</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/recommend_polygon_bottom.png"
                      alt=""
                      className={RecommendSection.sp_recommend_polygon}
                    />
                  </li>
                  <li>
                    <img
                      src="/recommend_image_2.png"
                      alt=""
                      className={RecommendSection.sp_recommend_img}
                    />
                  </li>
                </ul>

                <ul className={RecommendSection.sp_recommend_img_list3}>
                  <li>
                    <div className={RecommendSection.recommend_box}>
                      <div className={RecommendSection.bg_black}>
                        <p>
                          エンジニアになりたいけど
                          <br />
                          何をしていいかわからない
                        </p>
                      </div>
                      <div className={RecommendSection.recommend_text}>
                        <p>
                          ・独学で挫折してしまい何から手をつけたら良いかわからない
                        </p>
                        <p>・相談できる人がいないので不安</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img
                      src="/recommend_polygon_bottom.png"
                      alt=""
                      className={RecommendSection.sp_recommend_polygon}
                    />
                  </li>
                  <li>
                    <img
                      src="/recommend_image_3.png"
                      alt=""
                      className={RecommendSection.sp_recommend_img}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutNew>
  );
}
