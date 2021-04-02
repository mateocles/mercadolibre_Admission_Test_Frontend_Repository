import { put, takeLatest, all } from 'redux-saga/effects'
import { menu } from './MenuActions'
import Api from '../../common/Api/Api'

function* getMenu() {
	const response = yield Api.get(`user/menu`)
	yield put(menu.getMenuResponse(response.payload))
}

function* ActionWatcher() {
	yield takeLatest(menu.getMenu, getMenu)
}

export default function* MenuSaga() {
	yield all([ActionWatcher()])
}
