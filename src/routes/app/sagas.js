import { take, call, put } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'

import { GET_INITIAL_LIST_USERS } from './actions'
import { setListUsers } from 'app/actions'

export function* getSetInitialListUsers() {
  const url = 'http://localhost:4000/users/'
  const list = yield call(whatwgFetch, url)

  yield put(setListUsers(list))
}

export function* watchGetInitialListUsers() {
  while (true) {
    yield take(GET_INITIAL_LIST_USERS)
    yield call(getSetInitialListUsers)
  }
}
