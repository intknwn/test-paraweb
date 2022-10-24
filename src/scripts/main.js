import 'focus-visible';
import onDocumentReady from './helpers/onDocumentReady';
import lazyImages from './modules/lazyimages';
import createArticles from './modules/articles';
import makeFiltersStickOnScroll from './modules/sticky-filters';

onDocumentReady(() => {
  lazyImages();
  createArticles();
  makeFiltersStickOnScroll();
});
