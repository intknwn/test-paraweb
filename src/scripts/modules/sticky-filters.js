const ARTICLES_CONTAINER_CLASS = `.articles`;
const FILTERS_CONTAINER_CLASS = `.filters`;
const PAGE_HEADER_CLASS = `.page-header`;
const STICKY_FILTERS_CLASS = `filters--sticky`;

const header = document.querySelector(PAGE_HEADER_CLASS);
const articles = document.querySelector(ARTICLES_CONTAINER_CLASS);
const filters = document.querySelector(FILTERS_CONTAINER_CLASS);

const handleScroll = () => {
  if (window.pageYOffset + header.offsetHeight > articles.offsetTop) {
    filters.classList.add(STICKY_FILTERS_CLASS);
    filters.style.top = `${header.offsetHeight}px`;
  } else {
    filters.classList.remove(STICKY_FILTERS_CLASS);
    filters.style.top = ``;
  }
};

const makeFiltersStickOnScroll = () => {
  window.addEventListener(`scroll`, handleScroll);
};

export default makeFiltersStickOnScroll;
