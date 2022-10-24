import Flickity from 'flickity';

const CAROUSEL_CONTAINER_CLASS = `.carousel__list`;

const noop = () => {};

const initCarousel = (cb = noop) => {
  // eslint-disable-next-line no-unused-vars
  const flkty = new Flickity(CAROUSEL_CONTAINER_CLASS, {
    // options
    cellAlign: 'left',
    contain: true,
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false,
    on: {
      ready: () => {
        cb();
      },
    },
  });
};

export default initCarousel;
