import throttle from 'lodash/throttle';

import { createStore } from "redux";
import rootReducer from "../reducers/index";
import { loadState, saveState } from "./localStorage"


const store = createStore(rootReducer, loadState());

store.subscribe(throttle(() => {
    saveState({
        articles: store.getState().articles
    });
}, 1000));

export default store;