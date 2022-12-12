import Style from "./index.module.scss";

interface Props {
  children: React.ReactNode;
  header: JSX.Element;
  footer: JSX.Element;
}

const LayoutDefault: React.FC<Props> = (props) => {
  return (
    <div className={Style.wrap}>
      <main className={Style.main}>
        {props.header}
        <div id="main_content">{props.children}</div>
        <div>{props.footer}</div>
      </main>
    </div>
  );
};

export default LayoutDefault;
