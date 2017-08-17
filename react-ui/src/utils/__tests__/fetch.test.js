import whatwgFetch from '../fetch'

describe('fetch test suite', () => {
  it('makes sure window.fetch is the one from the polyfill', () => {
    expect(window.fetch.polyfill).toBe(true);
  });
})
