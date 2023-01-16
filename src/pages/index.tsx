import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Top.module.scss";
import LayoutNew from "../layouts/LayoutNew/";
import Price from "../styles/module/price.module.scss";

export default function Home() {
  return (
    <LayoutNew header={<></>} footer={<></>}>
      <section></section>
    </LayoutNew>
  );
}
