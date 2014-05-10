var test = require('taptap');
var assert = require('assert');

var mmult = require('../');

test(function (done) { /* 1x1, 1x2 */
  var m1 = [[1]];
  var m2 = [[3, 4]];

  assert.deepEqual(mmult(m1, m2), m2);
  assert.notEqual(mmult(m1, m2), m2);
  done();
});

test(function (done) { /* 4x2, 2x3 */
  var m1 = [
    [4, 2],
    [4, 2],
    [4, 2],
    [4, 2]
  ];
  var m2 = [
    [1, 2, 3],
    [4, 5, 6]
  ];

  var m3 = [
    [12, 18, 24],
    [12, 18, 24],
    [12, 18, 24],
    [12, 18, 24]
  ];

  assert.deepEqual(mmult(m1, m2), m3);
  done();
});
