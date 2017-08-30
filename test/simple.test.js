import Simple from '../src/index'

test('simple test', () => {
  const simple = new Simple()
  expect(simple.test()).toBe('Hello world')
})
