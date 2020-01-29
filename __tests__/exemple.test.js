function soma(a, b) {
  return a+b;
}

test('Calling the Quality data route, the answer will always be HQ Finished!', () => {
  const result = soma(4,5);

  expect(result).toBe(9);
});