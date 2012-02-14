gtest
=====

Calculate a [G-test](http://en.wikipedia.org/wiki/G-test).

example
=======

``` js
var gtest = require('gtest');
var chi = require('chi-squared');

var g = gtest({ yes : 15, no : 65 }, { yes : 38, no : 82 });
console.log('g-test: ' + g);

var p = 1 - chi.pdf(g, 1);
console.log('confidence: ' + (p * 100) + ' %');
```

output:

```
g-test: 4.236899264271143
confidence: 97.67000488131295 %
```

methods
=======

var gtest = require('gtest');

gtest(a, b)
-----------

Return the liklihood ratio from the populations `a` and `b`.

Populations should have 2 or more of the keys: `yes`, `no`, `total`.

install
=======

With [npm](http://npmjs.org) do:

```
npm install gtest
```

license
=======

MIT/X11
