// Unit 2 Assessment: objects.js

// Given an array of objects representing people, return a new array of just
// their full (first name and last name) names.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getNames([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//   ]);
//   => ['Gale Dekarios', 'Wyll Ravengard', 'Karlach Cliffgate'];
function getNames(people) {
  let newArr = []
  for (const obj of people) {
    newArr.push(`${obj.firstName} ${obj.lastName}`)
  }
  return newArr
}

// Given an object representing a person, return their full name (first name and last name).
// You MUST use object destructuring in your solution.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getName({ firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' });
//   => 'Gale Dekarios'
function getNameUsingDestructuring(person) {
  const {firstName, lastName} = person
  return `${firstName} ${lastName}`
}

// Given an array of objects representing people, return a new array of the
// people matching the given location.
//
// Each object will be structured like so:
// { firstName: 'Dame', lastName: 'Aylin', location: 'Reithwin' }
//
// Ex.:
//   getPeopleByLocation([
//     { firstName: 'Gale', lastName: 'Dekarios', location: 'Waterdeep' },
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Karlach', lastName: 'Cliffgate', location: 'Avernus' }
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ], "Baldur's Gate");
//   => [
//     { firstName: 'Wyll', lastName: 'Ravengard', location: "Baldur's Gate" },
//     { firstName: 'Astarion', lastName: 'Ancunin', location: "Baldur's Gate" }
//   ];
function getPeopleByLocation(people, location) {
  let newArr = []
  for (const obj of people) {
    if (obj.location === location) {
      newArr.push(obj)
    }
  }
  return newArr
}

// Translate a phrase to pirate talk.
//
// Given an English phrase, use the EN_PIRATE_LOOKUP object to translate words
// to pirate talk. Words that aren't listed in the lookup object should not be
// translated and should pass through unchanged.
//
// The given phrase will be normalized so it'll never contain punctuation and
// will only consist of lowercased letters.
//
// Ex.:
//   translateToPirateTalk('excuse me sir where is the restroom');
//   => 'avast me matey where be the head'
const EN_PIRATE_LOOKUP = {
  excuse: 'avast',
  sir: 'matey',
  is: 'be',
  restroom: 'head',
  student: 'swabbie',
  friend: 'matey',
  restaurant: 'galley',
  your: 'yer',
  are: 'be',
  my: 'me',
  hotel: 'fleabag inn',
  hello: 'ahoy',
};

function translateToPirateTalk(phrase) {
  let finalStrArray = []
  for (const str of phrase.split(' ')) {
    if (EN_PIRATE_LOOKUP[str] !== undefined) {
      finalStrArray.push(EN_PIRATE_LOOKUP[str])
    } else {
      finalStrArray.push(str)
    }
  }
  return finalStrArray.join(' ')
}

// Return the number of occurrences of each word in a string.
// This function doesn't handle punctuation and is case-sensitive, so you can
// count 'hello!', 'hello', and 'Hello' as different words.
//
// Ex.:
//   wordCount('hello world')
//   => { hello: 1, world: 1 }
function wordCount(str) {
  let wordObj = {}
  for (const word of str.split(' ')) {
    if (wordObj[word] === undefined) {
      wordObj[word] = 1
    } else {
      wordObj[word] ++
    }
  }
  return wordObj
}

// Given an object representing a bug, return true if the given bug is
// available in the given month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   isBugAvailable({
//     name: 'common butterfly',
//     availability: {
//       rarity: 'common',
//       months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
//     }
//   }, 1);
//   => true
function isBugAvailable(bug, month) {
  let bugCheck = false
  // this for... of loop goes through the array within the months key of the availability object, which itself is a key of the bug object
  for (const monthNum of bug.availability.months) {
    if (monthNum === month) {
      bugCheck = true
    }
  }
  return bugCheck
}

// Given an array of objects representing bugs, return an object that'll be
// used to build a calendar. The keys of the object should be the months of the
// year, and the values should be the names of bugs available in that month.
//
// Each bug object will be structured like so:
// {
//   name: 'common butterfly',
//   availability: {
//     rarity: 'common',
//     months: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6],
// }
//
// Ex.:
//   const bugs = [
//     {
//       name: 'peacock butterfly',
//       availability: {
//         rarity: 'common',
//         months: [1, 2, 3],
//       },
//     },
//     {
//       name: 'yellow butterfly',
//       availability: {
//         rarity: 'common',
//         months: [3],
//       },
//     },
//   ];
//   buildBugHuntCalendar(bugs);
//   => {
//     1: ['peacock butterfly'],
//     2: ['peacock butterfly'],
//     3: ['peacock butterfly', 'yellow butterfly'],
//     4: [],
//     5: [],
//     ...
//     11: [],
//     12: [],
//   }

function buildBugHuntCalendar(bugs) {
  let monthBugObj = {};
  for (let i = 1; i < 13; i++) {
    monthBugObj[i] = [];
  }
  for (const numBug of bugs) {
    for (const monthNum of numBug.availability.months) {
      monthBugObj[monthNum].push(numBug.name);
    }
  }
  return monthBugObj;
}

export {
  buildBugHuntCalendar,
  getNameUsingDestructuring,
  getNames,
  getPeopleByLocation,
  isBugAvailable,
  translateToPirateTalk,
  wordCount,
};
