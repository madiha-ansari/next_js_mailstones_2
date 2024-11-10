import styles from "./hero2.module.css";
import Header from "../Header/Header";

interface Prop {
  heading: string;
  para_text: string;
}

const hero2 = (props: Prop) => {
  return (
    <>
      <section>
        <div className={styles.background}>
          <Header />
          <div className={styles.main}>
            <h1>{props.heading}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.para_text }}></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero2;

