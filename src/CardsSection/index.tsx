import React, { forwardRef } from "react";
import styles from "./CardsSection.module.scss";

type Props = {
  photo1: string;
  photo2: string;
};

export const CardsSection = forwardRef<HTMLDivElement, Props>(function (
  { photo1, photo2 },
  ref
) {
  return (
    <section className={styles.cardsSection} ref={ref}>
      <h1 className={styles.sectionHeading}>
        ut aliquip ex ea commodo consequat
      </h1>
      <div className={styles.cardWithoutLeftPadding}>
        <div className={styles.photoWrapper}>
          <img src={photo1} alt="photo" className={styles.photo} />
        </div>
        <div className={styles.text}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
      <div className={styles.cardWithLeftPadding}>
        <div className={styles.text}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className={styles.photoWrapper}>
          <img src={photo2} alt="photo" className={styles.photo} />
        </div>
      </div>
    </section>
  );
});
