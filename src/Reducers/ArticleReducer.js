import {
  FETCHING_ARTICLES,
  FETCH_ARTICLES_FAILED,
  FETCH_ARTICLES_SUCCESS,
} from "../Actions/ArticleActions";

const init_state = {
  errorMsg: "",
  loading: false,
  articels: [],
};

export default Reducer = (state = init_state, action) => {
  switch (action.type) {
    case FETCHING_ARTICLES:
      return { ...state, loading: true };
    case FETCH_ARTICLES_FAILED:
      return {
        ...state,
        errorMsg: action.payload,
        loading: false,
        articels: [],
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articels: action.payload,
        loading: false,
        errorMsg: "",
      };
    default:
      return state;
  }
};
