import { PRODUCT_LIST,SERCH_PRODUCT,SET_PRODUCT_LIST } from "./constant";
import {takeEvery,put} from 'redux-saga/effects'

function* getProducts(){
    let data = yield fetch('http://localhost:5000/product');
    data = yield data.json();
    console.log("action is called", data)
    yield put({type: SET_PRODUCT_LIST, data})
}
function* serchProducts(data){
    let result = yield fetch(`http://localhost:5000/product?q=${data.query}`);
    data = yield result.json();
    console.log("action is called", result)
    yield put({type: SET_PRODUCT_LIST, data})
}
function* productSaga(){
yield takeEvery(PRODUCT_LIST,getProducts);
yield takeEvery(SERCH_PRODUCT,serchProducts)
}
export default productSaga;