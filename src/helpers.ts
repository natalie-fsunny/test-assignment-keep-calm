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

export function handleScrollConstructor(
  elements: {
    gallerySection: HTMLDivElement;
    galleryWrapper: HTMLDivElement;
    gallerySectionHeading: HTMLHeadingElement;
    gallery: HTMLDivElement;
    galleryPhoto: HTMLDivElement;
    nextSection: HTMLDivElement;
  },
  numberOfPhotos: number
) {
  const {
    gallery,
    gallerySection,
    gallerySectionHeading,
    galleryWrapper,
    nextSection,
    galleryPhoto,
  } = elements;

  const tabletWidth = 800;
  const laptopWidth = 1400;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const oneFrame = Math.floor(windowWidth / 100);

  const galleryPhotoHeight = galleryPhoto.clientHeight;
  const galleryPhotoWidth = galleryPhoto.clientWidth;

  const galleryGap = 30;

  const sectionHeadingBottomMargin =
    windowWidth <= tabletWidth ? 64 : windowWidth <= laptopWidth ? 94 : 123;

  const gallerySectionHeadingHeight =
    gallerySectionHeading.clientHeight + sectionHeadingBottomMargin;

  const headerHeight =
    windowWidth <= tabletWidth ? 60 : windowWidth <= laptopWidth ? 80 : 100;

  const galleryPadding = windowWidth > tabletWidth ? oneFrame * 8 : 20;

  const topOffset =
    (windowHeight +
      headerHeight -
      (galleryPhoto.clientHeight + gallerySectionHeadingHeight)) /
    2;

  const galleryWidth =
    galleryPhotoWidth * numberOfPhotos +
    (numberOfPhotos - 1) * galleryGap +
    galleryPadding * 2;

  const galleryWidthForScroll = galleryWidth - windowWidth;

  nextSection.style.marginTop =
    galleryWidthForScroll +
    galleryPhotoHeight +
    gallerySectionHeadingHeight +
    "px";

  return function () {
    const scrolledY = window.scrollY;

    const gallerySectionOffsetTop = gallerySection.offsetTop;
    const gallerySectionCenteredOffsetTop = gallerySectionOffsetTop - topOffset;
    const endOfScrollYPoint =
      gallerySectionCenteredOffsetTop + galleryWidthForScroll;

    if (
      scrolledY > gallerySectionCenteredOffsetTop &&
      scrolledY < endOfScrollYPoint
    ) {
      console.log(scrolledY, gallerySectionOffsetTop);

      gallery.style.transform =
        "translateX(" + -(scrolledY - gallerySectionCenteredOffsetTop) + "px)";

      galleryWrapper.style.position = "fixed";
      galleryWrapper.style.top = topOffset + "px";
    }
    if (scrolledY <= gallerySectionCenteredOffsetTop) {
      gallery.style.transform = "translateX(0px)";

      galleryWrapper.style.position = "initial";
    }
    if (scrolledY >= endOfScrollYPoint) {
      gallery.style.transform = "translateX(" + -galleryWidthForScroll + "px)";

      galleryWrapper.style.position = "absolute";
      galleryWrapper.style.top =
        galleryWidthForScroll + gallerySectionOffsetTop + "px";
      galleryWrapper.style.width = "100vw";
    }
  };
}
