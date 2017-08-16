const {assert} = require('chai')
const { weekday,
capitalizeFourth,
getValues,
filterAround } = require('./functions.js');

//=== weekday =========================

describe('weekday', function() {
  it('should return the day of the given date', function() {
    let date = new Date('2017, 08, 14')
    assert.equal(weekday(date), 'Monday')
  });

  it('should return an error when given an invalid input', function() {
    let date = new Date('x')
    assert.throws( () => { weekday(date) }, Error, 'Not a valid Date!')
  });

});

//=== capitalizeFourth =========================

describe('capitalizeFourth', function() {
  it('should return every 4th character converted to upper case', function() {
    const string = "Eenie, Meenie, Miney, Moe"
    assert.equal(capitalizeFourth(string), 'eenIe, MeenIe, MineY, mOe')
  });

  it('should return an error when given an invalid input', function() {
    const string = 3
    assert.throws( () => { (capitalizeFourth(string))}, 'Passed argument is not a string!')
  });
});

//=== getValues =========================

describe('getValues', function() {
  it('should return all the values for an object', function() {
    let person = {
      name: 'Dominique',
      age: 30,
      phone: '555-555-5555'
    }
    assert.deepEqual(getValues(person), [30, '555-555-5555', 'Dominique'])
  });

  it('should return an error when given an invalid input', function() {
    let person = 'Testing'
    assert.throws( () => { (getValues(person))}, 'Passed argument is not an object!')
  });
});

//=== filterAround =========================

describe('filterAround', function() {
  it('should return a new array containing only the elements from the source array that come before lower alphabetically and after upper', function() {
    let animals = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']
    console.log(filterAround(animals, 'cow', 'dog'));
    assert.deepEqual(filterAround(animals, 'cow', 'dog'), ['cat', 'zebra', 'ape', 'lion'])
  });

  it('should return an error when given an invalid input', function() {
    let animals = 3
    assert.throws( () => {(filterAround(animals))}, 'Passed argument is not an object!')
  });
});
