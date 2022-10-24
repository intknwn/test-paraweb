import createAuthorOptions from './filters';

const API_ENDPOINT = `https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc`;

const ARTICLES_CONTAINER_CLASS = `.articles__list`;
const AUTHOR_SELECT_CLASS = `.filters__input-author`;
const DATE_FROM_INPUT_CLASS = `.filters__input-date-from`;
const DATE_TO_INPUT_CLASS = `.filters__input-date-to`;

const MAX_DESCRIPTION_LENGTH = 147;

const getArticles = async () => {
  const res = await fetch(API_ENDPOINT);
  const { articles } = await res.json();

  return articles;
};

const createArticleTemplate = (data) => {
  const { publishedAt, title, description, author } = data;

  const desc =
    description.length > MAX_DESCRIPTION_LENGTH
      ? `${description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : description;
  const date = new Date(Date.parse(publishedAt))
    .toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);

  return `
    <li class="article">
      <time class="article__date" datetime="${publishedAt}">${date}</time>
      <a class="article__link" href="#"><h3 class="article__heading">${title}</h3></a>
      <p class="article__description">${desc}</p>
      ${
        author
          ? `<span class="article__author" type="button">${author}</button>`
          : ``
      }
    </li>
  `;
};

const insertArticles = (articles) => {
  const container = document.querySelector(ARTICLES_CONTAINER_CLASS);

  container.innerHTML = ``;

  articles.forEach((article) => {
    const template = createArticleTemplate(article);
    container.insertAdjacentHTML(`beforeend`, template);
  });
};

const createArticles = async () => {
  const articles = await getArticles();

  const authorSelect = document.querySelector(AUTHOR_SELECT_CLASS);
  const dateFromInput = document.querySelector(DATE_FROM_INPUT_CLASS);
  const dateToInput = document.querySelector(DATE_TO_INPUT_CLASS);

  const FiltersState = {
    author: '',
    'date-from': '',
    'date-to': '',
  };

  const FilterFn = {
    author: (article, selectedAuthor) => article.author === selectedAuthor,
    'date-from': (article, date) =>
      Date.parse(article.publishedAt) >= Date.parse(date),
    'date-to': (article, date) =>
      Date.parse(article.publishedAt) <= Date.parse(date),
  };

  const handleFilterChange = (e) => {
    const { value } = e.target;
    const filterName = e.target.name;

    FiltersState[filterName] = value;

    const activeFiltersNames = Object.keys(FiltersState).filter(
      (filter) => FiltersState[filter],
    );

    const filteredArticles = articles.filter((article) =>
      activeFiltersNames
        .map((activeFilterName) =>
          FilterFn[activeFilterName](article, FiltersState[activeFilterName]),
        )
        .every((i) => i),
    );

    insertArticles(filteredArticles);
  };

  [authorSelect, dateFromInput, dateToInput].forEach((input) =>
    input.addEventListener(`change`, handleFilterChange),
  );

  insertArticles(articles);
  createAuthorOptions(articles);
};

export default createArticles;
