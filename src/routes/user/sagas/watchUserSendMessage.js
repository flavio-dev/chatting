import { take, call } from 'redux-saga/effects'

import { SEND_MESSAGE } from '../actions'

export function* sendMessage() {
  console.log('sending message to implement')
}

export function* watchSendMessage() {
  while (true) {
    yield take(SEND_MESSAGE)
    yield call(sendMessage)
  }
}
