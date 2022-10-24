const FILTERS_CONTAINER_CLASS = `.filters`;
const PAGE_HEADER_CLASS = `.page-header`;
const STICKY_FILTERS_CLASS = `filters--sticky`;

const headerOffset = document.querySelector(PAGE_HEADER_CLASS).offsetHeight;
const filters = document.querySelector(FILTERS_CONTAINER_CLASS);
const filtersOffsetTop = filters.offsetTop;

const handleScroll = () => {
  if (window.pageYOffset + headerOffset > filtersOffsetTop) {
    filters.classList.add(STICKY_FILTERS_CLASS);
    filters.style.top = `${headerOffset}px`;
  } else {
    filters.classList.remove(STICKY_FILTERS_CLASS);
    filters.style.top = ``;
  }
};

const makeFiltersStickOnScroll = () => {
  window.addEventListener(`scroll`, handleScroll);
};

export default makeFiltersStickOnScroll;
