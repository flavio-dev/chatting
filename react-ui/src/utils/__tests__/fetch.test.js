import whatwgFetch from '../fetch'
import configureMockStore from 'redux-mock-store'
import { applyMiddleware } from 'redux'

const middlewares = [ applyMiddleware ];
const mockStore = configureMockStore(middlewares);
const store = mockStore({})
const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

describe('fetch test suite', () => {
  it('makes sure window.fetch is the one from the polyfill', () => {
    expect(window.fetch.polyfill).toBe(true);
  });

  it('returns the data in JSON format', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, '["userId", "secondUserId"]')));

      return whatwgFetch('endpoint').then((response) => {
        expect(typeof response).toBe('object')
        expect(response.length).toBe(2)
      })
    });

    // So close to make this one work...
    // it('throws an error on 404', () => {
    //   window.fetch = jest.fn().mockImplementation(() =>
    //   Promise.resolve(mockResponse(404, 'Error Fatal', '["userId", "secondUserId"]')));
    //
    //   whatwgFetch('endpoint').then(() => {}, error => {
    //     expect(error).toBe(new Error('Error Fatal'))
    //   })
    // })
})
