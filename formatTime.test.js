const formatTime = require('./formatTime');

test('10 cs should be 00:00:10', () => {
  expect(formatTime(10)).toStrictEqual({
    minutes: "00",
    seconds: "00",
    cs: "10"
  });
});