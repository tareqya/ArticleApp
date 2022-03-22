export const FETCHING_ARTICLES = "FETCHING_ARTICLES";
export const FETCH_ARTICLES_FAILED = "FETCH_ARTICLES_FAILED";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";

export const fetchingArticles = () => {
  return {
    type: FETCHING_ARTICLES,
  };
};

export const fetchArticlesFailed = (errorMsg) => {
  return {
    type: FETCH_ARTICLES_FAILED,
    payload: errorMsg,
  };
};

export const fetchArticlesSuccess = (articals) => {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articals,
  };
};
