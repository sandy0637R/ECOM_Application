import { call, put, takeLatest, all } from 'redux-saga/effects';
import { SET_PRODUCTS, FETCH_PRODUCTS } from './action'; // Action types
import { fetchProductsApi } from './api'; // Helper function to fetch data

// Worker saga: will be fired on FETCH_PRODUCTS action
function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProductsApi); // Call API to fetch products
    yield put({ type: SET_PRODUCTS, payload: products }); // Dispatch SET_PRODUCTS action to store data
  } catch (error) {
    console.error('Error fetching products:', error);
    // Optionally, dispatch an action to handle errors (not implemented here)
  }
}

// Watcher saga: watches for FETCH_PRODUCTS action and triggers fetchProductsSaga
function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

// Root saga: runs all sagas
export default function* rootSaga() {
  yield all([watchFetchProducts()]); // Run the watcher saga
}
