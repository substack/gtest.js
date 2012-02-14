var gtest = require('../');
var chi = require('chi-squared');

var g = gtest({ yes : 15, no : 65 }, { yes : 38, no : 82 });
console.log('g-test: ' + g);

var p = 1 - chi.pdf(g, 1);
console.log('confidence: ' + (p * 100) + ' %');
