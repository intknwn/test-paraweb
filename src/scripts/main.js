import 'focus-visible';
import onDocumentReady from './helpers/onDocumentReady';
import lazyImages from './modules/lazyimages';
import createArticles from './modules/articles';

onDocumentReady(() => {
  lazyImages();
  createArticles();
});
