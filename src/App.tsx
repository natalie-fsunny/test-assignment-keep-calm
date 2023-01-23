import React, { useEffect, useRef } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as PhoneIcon } from "./assets/phone-icon.svg";
import { photos, cardPhotos, handleScrollConstructor } from "./helpers";
import styles from "./App.module.scss";

function App() {
  const gallery = useRef<HTMLDivElement>(null);
  const gallerySection = useRef<HTMLDivElement>(null);
  const galleryPhoto = useRef<HTMLDivElement>(null);
  const gallerySectionHeading = useRef<HTMLHeadingElement>(null);
  const galleryWrapper = useRef<HTMLDivElement>(null);
  const nextSection = useRef<HTMLDivElement>(null);

  useEffect(function () {
    if (
      gallerySection.current &&
      galleryWrapper.current &&
      gallerySectionHeading.current &&
      gallery.current &&
      galleryPhoto.current &&
      nextSection.current
    ) {
      const handleScroll = handleScrollConstructor({
        galleryPhoto: galleryPhoto.current,
        gallerySection: gallerySection.current,
        gallerySectionHeading: gallerySectionHeading.current,
        galleryWrapper: galleryWrapper.current,
        nextSection: nextSection.current,
        gallery: gallery.current,
      });

      window.addEventListener("scroll", handleScroll);

      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.headerWrapper}>
        <div className={styles.blank} />
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <div className={styles.phoneNumber}>
            <p className={styles.phoneNumberText}>+7 (495) 495-49-54</p>
            <PhoneIcon className={styles.phoneIcon} />
          </div>
        </header>
        <div className={styles.blank} />
      </div>
      <main className={styles.mainSection}>
        <section className={styles.cardsSection}>
          <h1 className={styles.sectionHeading}>
            <div className={styles.blank} />
            ut aliquip ex ea commodo consequat
          </h1>
          <div className={styles.cardWithoutLeftPadding}>
            <div className={styles.photoWrapper}>
              <img src={cardPhotos[0]} alt="photo" className={styles.photo} />
            </div>
            <div className={styles.blank} />
            <div className={styles.text}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p>
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className={styles.blank} />
          </div>
          <div className={styles.cardWithLeftPadding}>
            <div className={styles.blank} />
            <div className={styles.text}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p>
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className={styles.blank} />
            <div className={styles.photoWrapper}>
              <img src={cardPhotos[1]} alt="photo" className={styles.photo} />
            </div>
            <div className={styles.blank} />
          </div>
        </section>

        <section className={styles.gallerySection} ref={gallerySection}>
          <div className={styles.galleryWrapper} ref={galleryWrapper}>
            <h1 className={styles.sectionHeading} ref={gallerySectionHeading}>
              <div className={styles.blank} />
              ut aliquip ex ea commodo consequat
            </h1>
            <div className={styles.gallery} ref={gallery}>
              {photos.map((photo, index) => (
                <div
                  className={styles.photoWrapper}
                  key={photo}
                  ref={index === 0 ? galleryPhoto : null}
                >
                  <img src={photo} alt="photo" className={styles.photo} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cardsSection} ref={nextSection}>
          <h1 className={styles.sectionHeading}>
            <div className={styles.blank} />
            ut aliquip ex ea commodo consequat
          </h1>
          <div className={styles.cardWithoutLeftPadding}>
            <div className={styles.photoWrapper}>
              <img src={cardPhotos[2]} alt="photo" className={styles.photo} />
            </div>
            <div className={styles.blank} />
            <div className={styles.text}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p>
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className={styles.blank} />
          </div>
          <div className={styles.cardWithLeftPadding}>
            <div className={styles.blank} />
            <div className={styles.text}>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <p>
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className={styles.blank} />
            <div className={styles.photoWrapper}>
              <img src={cardPhotos[3]} alt="photo" className={styles.photo} />
            </div>
            <div className={styles.blank} />
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        © TEST, 1022–2022
      </footer>
    </div>
  );
}

export default App;
