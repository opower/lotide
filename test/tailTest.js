const tail = require('../tail');
const assertEqual = require('../assertEqual');

assertEqual(tail([5,6,7]).length, 2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);