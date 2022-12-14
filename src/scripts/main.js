import 'focus-visible';
import onDocumentReady from './helpers/onDocumentReady';
import lazyImages from './modules/lazyimages';
import createArticles from './modules/articles';
import makeFiltersStickOnScroll from './modules/sticky-filters';

import initCarousel from './modules/carousel';

onDocumentReady(() => {
  lazyImages();
  createArticles();
  initCarousel(makeFiltersStickOnScroll);
});
