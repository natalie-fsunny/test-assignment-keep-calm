import section1photo1 from "./assets/julia-d-FlNTu2Bj4Dg-unsplash-1.png";
import section1photo2 from "./assets/taisiia-stupak-viq7xx1boxo-unsplash 1-1.png";
import section2photo1 from "./assets/julia-d-FlNTu2Bj4Dg-unsplash.png";
import section2photo2 from "./assets/taisiia-stupak-viq7xx1boxo-unsplash 1.png";
import photo1 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1.png";
import photo2 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1-1.png";
import photo3 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1-2.png";
import photo4 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1-3.png";
import photo5 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1-4.png";
import photo6 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1-5.png";
import photo7 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1-6.png";
import photo8 from "./assets/andres-vera-CmmYT6Mm948-unsplash 1-7.png";

export const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
];

export const cardPhotos = [
  section1photo1,
  section1photo2,
  section2photo1,
  section2photo2,
];

export function handleScrollConstructor(elements: {
  gallerySection: HTMLDivElement;
  galleryWrapper: HTMLDivElement;
  gallerySectionHeading: HTMLHeadingElement;
  gallery: HTMLDivElement;
  galleryPhoto: HTMLDivElement;
  nextSection: HTMLDivElement;
}) {
  const {
    gallery,
    gallerySection,
    gallerySectionHeading,
    galleryWrapper,
    nextSection,
    galleryPhoto,
  } = elements;

  const gallerySectionWidth = gallerySection.clientWidth;
  const gallerySectionHeadingHeight =
    gallerySectionHeading.clientHeight +
    (gallerySectionWidth <= 800 ? 64 : gallerySectionWidth <= 1400 ? 94 : 123);
  const topOffset =
    (window.innerHeight -
      (galleryPhoto.clientHeight + gallerySectionHeadingHeight) +
      (gallerySectionWidth <= 800
        ? 60
        : gallerySectionWidth <= 1400
        ? 80
        : 100)) /
    2;
  const galleryWidth =
    galleryPhoto.clientWidth * photos.length +
    (photos.length - 1) * 30 +
    (gallerySectionWidth > 800
      ? Math.floor((gallerySectionWidth / 100) * 8) * 2
      : 40) -
    gallerySectionWidth;

  nextSection.style.marginTop =
    galleryWidth +
    galleryPhoto.clientHeight +
    gallerySectionHeadingHeight +
    "px";

  return function () {
    const gallerySectionOffsetTop = gallerySection.offsetTop - topOffset;

    const scrolledY = window.scrollY;

    if (
      scrolledY > gallerySectionOffsetTop &&
      scrolledY < gallerySectionOffsetTop + galleryWidth
    ) {
      galleryWrapper.style.position = "fixed";
      galleryWrapper.style.top = topOffset + "px";
      gallery.style.transform =
        "translateX(" + -(scrolledY - gallerySectionOffsetTop) + "px)";
    }
    if (scrolledY <= gallerySectionOffsetTop) {
      galleryWrapper.style.position = "initial";
      gallery.style.transform = "translateX(0px)";
    }
    if (scrolledY >= galleryWidth + gallerySectionOffsetTop) {
      gallery.style.transform = "translateX(" + -galleryWidth + "px)";

      galleryWrapper.style.position = "absolute";
      galleryWrapper.style.top =
        galleryWidth + gallerySectionOffsetTop + topOffset + "px";
      galleryWrapper.style.width = "100vw";
    }
  };
}
