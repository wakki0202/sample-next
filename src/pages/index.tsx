import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import Flow from "../styles/scss/module/flow.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <section className={Flow.wrapper}>
        <div id="inner" className={Flow.inner}>
          <div id="title" className={Flow.title}>
            <img src="/flow_title.png" alt="" />
          </div>

          <div className={Flow.container}>
            <div id="flex" className={Flow.steps}>
              <div id="step1" className={Flow.step}>
                <p className={Flow.step_title}>step01</p>
                <div id="step1-content" className={Flow.step_content}>
                  <div>
                    <img src="/flow_step1.svg" alt="" />
                  </div>
                  <p className={Flow.step_content_text}>無料相談申し込み</p>
                </div>
              </div>

              <div id="arrow" className={Flow.arrow}>
                <img src="/flow_arrow.png" alt="" />
              </div>

              <div id="step2" className={Flow.step}>
                <p className={Flow.step_title}>step02</p>
                <div id="step2-content" className={Flow.step_content}>
                  <div>
                    <img src="/flow_step2.svg" alt="" />
                  </div>
                  <p className={Flow.step_content_text}>無料体験＆個別相談</p>
                </div>
              </div>

              <div id="arrow" className={Flow.arrow}>
                <img src="/flow_arrow.png" alt="" />
              </div>

              <div id="step3" className={Flow.step}>
                <p className={Flow.step_title}>step03</p>
                <div id="step3-content" className={Flow.step_content}>
                  <div>
                    <img src="/flow_step3.svg" alt="" />
                  </div>
                  <a href="" className={Flow.step_content_btn}>
                    受講申し込み
                  </a>
                </div>
              </div>

              <div id="arrow" className={Flow.arrow}>
                <img src="/flow_arrow.png" alt="" />
              </div>

              <div id="step4" className={Flow.step}>
                <p className={Flow.step_title}>step04</p>
                <div id="step4-content" className={Flow.step_content}>
                  <div>
                    <img src="/flow_step4.svg" alt="" />
                  </div>
                  <p className={Flow.step_content_text}>受講開始</p>
                </div>
              </div>
            </div>

            <div id="btn" className={Flow.btn_wrap}>
              <div className={Flow.btn_box}>
                <div id="balloon" className={Flow.btn_balloon}>
                  <img src="/flow_balloon.png" alt="" />
                </div>
                <div id="flex" className={Flow.btn_content}>
                  <div id="arrow" className={Flow.btn_arrow}>
                    <img src="/flow_btn_arrow.png" alt="" />
                  </div>
                  <div id="text" className={Flow.btn_text}>
                    <img src="/flow_btn_text.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutNew>
  );
}
