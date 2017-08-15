const {assert, expect} = require('chai')
const { weekday,
capitalizeFourth,
getValues,
filterAround } = require('./functions.js');

//=== weekday =========================

describe('weekday', function() {
  it('should return the day of the given date', function() {
    const parsedDate = new Date('2017, 15, 08')
    assert.equal(weekday(parsedDate), 'Tuesday')
  });

//   it('should return an error when given an invalid input', function() {
//     const parsedDate = new Date('x')
//     assert.deepEqual(weekday(parsedDate), 'Not a valid Date!')
//   });

});

//=== capitalizeFourth =========================

describe('capitalizeFourth', function() {
  it('should return every 4th character converted to upper case', function() {
    const string = "Eenie, Meenie, Miney, Moe"
    assert.equal(capitalizeFourth(string), 'eenIe, MeenIe, MineY, mOe')
  });

//   it('should return an error when given an invalid input', function() {
//     const string = 3
//     assert.fail(capitalizeFourth(string), 'Passed argument is not a string!')
//   });
});

//=== getValues =========================

describe('getValues', function() {
  it('should return all the values for an object', function() {
    let person = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    assert.equal(getValues(person), ['Dominique', 30, '555-555-5555'])
  });

//   it('should return an error when given an invalid input', function() {
//     let person = 'Testing'
//     assert.equal(getValues(string), 'Passed argument is not an object!')
//   });
// });

//=== filterAround =========================

describe('filterAround', function() {
  it('should return a new array containing only the elements from the source array that come before lower alphabetically and after upper', function() {
    let animals = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
    assert.equal(filterAround(animals, 'cow', 'dog'), ['cat', 'zebra', 'ape', 'lion'])
    // assert.equal(filterAround(animals, 'chimp', 'lobster'), ['cat', 'zebra', 'ape'])
  });

//   it('should return an error when given an invalid input', function() {
//     let animals = 3
//     assert.equal(filterAround(string), 'Passed argument is not an object!')
  });
});
