import { take, call, put } from 'redux-saga/effects'

import whatwgFetch from 'utils/fetch'

import { setListUsers, GET_INITIAL_LIST_USERS } from 'app/actions'

export function* getSetInitialListUsers() {
  let url = '/users/'
  if (window.location.port.length) {
    url = 'http://localhost:4000/users/'
  }

  console.log('getting the list from url ', url);

  const list = yield call(whatwgFetch, url)

  yield put(setListUsers(list))
}

export function* watchGetInitialListUsers() {
  while (true) {
    yield take(GET_INITIAL_LIST_USERS)
    yield call(getSetInitialListUsers)
  }
}
