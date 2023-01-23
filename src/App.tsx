import React, { useEffect, useRef } from "react";
import { ReactComponent as Logo } from "./assets/logo.svg";
import { ReactComponent as PhoneIcon } from "./assets/phone-icon.svg";
import { photos, cardPhotos, handleScrollConstructor } from "./helpers";
import styles from "./App.module.scss";
import { CardsSection } from "./CardsSection";

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
      const handleScroll = handleScrollConstructor(
        {
          galleryPhoto: galleryPhoto.current,
          gallerySection: gallerySection.current,
          gallerySectionHeading: gallerySectionHeading.current,
          galleryWrapper: galleryWrapper.current,
          nextSection: nextSection.current,
          gallery: gallery.current,
        },
        photos.length
      );

      window.addEventListener("scroll", handleScroll);

      return function () {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <div className={styles.phoneNumber}>
            <p className={styles.phoneNumberText}>+7 (495) 495-49-54</p>
            <PhoneIcon className={styles.phoneIcon} />
          </div>
        </header>
      </div>
      <main className={styles.mainSection}>
        <CardsSection photo1={cardPhotos[0]} photo2={cardPhotos[1]} />

        <section className={styles.gallerySection} ref={gallerySection}>
          <div className={styles.galleryWrapper} ref={galleryWrapper}>
            <h1 className={styles.sectionHeading} ref={gallerySectionHeading}>
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

        <CardsSection
          photo1={cardPhotos[2]}
          photo2={cardPhotos[3]}
          ref={nextSection}
        />
      </main>
      <footer className={styles.footer}>© TEST, 1022–2022</footer>
    </div>
  );
}

export default App;
