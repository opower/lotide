# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @opower/lotide`

**Require it:**

`const _ = require('@opower/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the head of an array
* `tail(array)`: returns tailing values after head array
* `middle(array)`: returns the middle value of an array
* `countLetters(str)`: returns and objects with the number count that each individual letter occurs
* `countOnly(allIteams, itemsToCount)`: returns object with the number count of specific items to count
* `without(source, unwanted)`: returns a subset of a given array, removing unwanted elements.
* `findKey(obj, callback)`: returns a key from an object
* `findKeyByValue(shows, value)`: returns the key of a specified value in an object
* `flatten(array)`: returns an array with only number values if passed an array with nested arrays
* `letterPositions(str)`: returns an object that contains the indices of all the letters in the string
* `map(array, callback)`: returns an array where each item is passed through the callback function
* `takeUntil(array,callback)`: returns an array where each item is passed through the callback function until the callback returns true
