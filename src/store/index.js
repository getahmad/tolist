import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  createSagaMiddleware  from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// export default store;

// export default  () => {
//   let store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

export const store= createStore(persistedReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

export const persistor= persistStore(store)


sagaMiddleware.run(rootSaga);

