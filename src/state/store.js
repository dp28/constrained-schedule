import { createStore } from 'redux';

import reduce from './reduce';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reduce, devTools);

export default store;
