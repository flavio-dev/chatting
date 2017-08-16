import { call, put, take } from 'redux-saga/effects'
import { testSaga } from 'redux-saga-test-plan'

import { setListUsers, GET_INITIAL_LIST_USERS } from 'app/actions'
import { getSetInitialListUsers, watchGetInitialListUsers } from '../sagas'
import whatwgFetch from 'utils/fetch'

describe('Testing getSetInitialListUsers', () => {
  const generator = testSaga(getSetInitialListUsers)
  const listReturned = []

  it ('should call whatwgFetch and out list of users', () => {
    generator
      .next()
      .call(whatwgFetch, '/users/')
      .next(listReturned)
      .put(setListUsers([]))
  })
})

describe('Testing watchGetInitialListUsers', () => {
  const generator = testSaga(watchGetInitialListUsers)

  it ('should take GET_INITIAL_LIST_USERS and call the saga getSetInitialListUsers', () => {
    generator
      .next()
      .take(GET_INITIAL_LIST_USERS)
      .next()
      .call(getSetInitialListUsers)
  })
})
