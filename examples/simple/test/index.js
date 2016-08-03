import expect from 'expect';

describe('Rating Example', () => {
  it('should expose the public API', () => {
    const store = {subscribe: 'test'};
    const methods = Object.keys(store);

    expect(methods.length).toBe(1);
    expect(methods).toContain('subscribe');
  });
});
