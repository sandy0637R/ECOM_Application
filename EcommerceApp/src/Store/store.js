import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';  // Import saga middleware
import reducer from './reducer';
import rootSaga from './saga';  // Import root saga

const sagaMiddleware = createSagaMiddleware();  // Create the saga middleware

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)  // Apply saga middleware
);

sagaMiddleware.run(rootSaga);  // Run the root saga

export default store;
