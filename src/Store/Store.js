import { createStore, applyMiddleware } from "redux";

import ReducxThunk from "redux-thunk";
import Reducer from "../Reducers/ArticleReducer";

export default store = createStore(Reducer, applyMiddleware(ReducxThunk));
