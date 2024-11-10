import styles from "./hero.module.css";
import Link from "next/link";


const Hero = () => {
  return (
    <>
      <section>
        <div className={styles.main}>
          <h1>World&apos;s Biggest University</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            tempore. <br />
            amet consequatur voluptatem ullam expedita.
          </p>
          <Link className={styles.linktag} href="">
            Visit us to know more
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
