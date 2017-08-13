import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import { watchGetInitialListUsers } from 'routes/app/sagas'
import watchUser from 'routes/user/sagas/index'

export const sagaMiddleware = createSagaMiddleware()

export function* rootSaga() {
  yield fork(watchGetInitialListUsers)
  yield fork(watchUser)
}
