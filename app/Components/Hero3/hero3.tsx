import styles from "./hero3.module.css";
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const hero3 = () => {
  return (
    <>
      <section>
        <div className={styles.main2}>
          <div className={styles.heading}>
            <h1>Our Reviwes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              eos nobis repudiandae inventore deleniti harum porr.
            </p>
          </div>
          <div className={styles.reviews}>
            {/* review1 */}
            <div className={styles.text_box}>
              <Image
                className={styles.img}
                src="/images/user2.jpg"
                alt="Review 1"
                width={40}
                height={40}
              ></Image>
              <div className={styles.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing ipsum elit.
                  Sed vel tempor. convallis, pellentesque convallis ipsum sit
                  amet pellentesque consectetur Sed convallis tempor
                </p>
                <h3>John sena</h3>
                <div className={styles.Icon}>
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    className={styles.starIcon}
                  />
                </div>
              </div>
            </div>

            {/* review2 */}
            <div className={styles.text_box}>
              <Image
                className={styles.img}
                src="/images/user1.jpg"
                alt="Review 1"
                width={40}
                height={40}
              ></Image>
              <div className={styles.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing ipsum elit.
                  Sed vel tempor. convallis, pellentesque convallis ipsum sit
                  amet pellentesque consectetur Sed convallis tempor
                </p>
                <h3>Christina Julian</h3>
                <div className={styles.Icon}>
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                </div>
              </div>
            </div>

            {/* review3 */}
            <div className={styles.text_box}>
              <Image
                className={styles.img}
                src="/images/user3.webp"
                alt="Review 1"
                width={40}
                height={40}
              ></Image>
              <div className={styles.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing ipsum elit.
                  Sed vel tempor. convallis, pellentesque convallis ipsum sit
                  amet pellentesque consectetur Sed convallis tempor
                </p>
                <h3>Roman rex</h3>
                <div className={styles.Icon}>
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                </div>
              </div>
            </div>

            {/* review4 */}
            <div className={styles.text_box}>
              <Image
                className={styles.img}
                src="/images/user7.webp"
                alt="user image"
                width={40}
                height={40}
              ></Image>
              <div className={styles.text}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing ipsum elit.
                  Sed vel tempor. convallis, pellentesque convallis ipsum sit
                  amet pellentesque consectetur Sed convallis tempor
                </p>
                <h3>Big Boss</h3>
                <div className={styles.Icon}>
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    className={styles.starIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero3;
