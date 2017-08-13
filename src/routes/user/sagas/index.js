import { fork } from 'redux-saga/effects'

import { watchSendMessage } from './watchUserSendMessage'

export function* watchUser() {
  yield fork(watchSendMessage)
}

export default watchUser
