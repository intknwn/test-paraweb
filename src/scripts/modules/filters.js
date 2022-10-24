const AUTHOR_SELECT_CLASS = `.filters__input-author`;

const createAuthorTemplate = (author) =>
  `<option class="filters__author-option" value="${author}">${author}</option>`;

const createAuthorOptions = (articles) => {
  const selectElement = document.querySelector(AUTHOR_SELECT_CLASS);

  articles.forEach((article) => {
    if (article.author) {
      const template = createAuthorTemplate(article.author);
      selectElement.insertAdjacentHTML(`beforeend`, template);
    }
  });
};

export default createAuthorOptions;
