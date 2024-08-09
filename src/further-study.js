// Unit 2 Assessment: further-study.js

// Return a sequence of words arranged according to the rules below.
//
// The sequence starts with the first word in the given array. The next word
// will start with the last letter of the preceding word. For example, these
// are all valid sequences of words:
//
//   king, goblin, nose, eat
//   cute, etcetera, antsy, yak, karat
//
// Sometimes, you'll get a word where there are mutliple candidates for the
// next word. For example, if the words are:
//
//   noon, naan, nun
//
// Then the first word in the sequence is 'noon'.
//
//   noon
//
// And the word after that should be the *first* word that starts with 'n'. So,
// even though both 'naan' and 'nun' start with 'n', the next word should be
// 'naan' because 'naan' appears before 'nun'. The final sequence of words will
// be:
//
//   noon, naan, nun
//
// The sequence will continue in this fashion until it runs out of words or it
// can't find words that'll fit the pattern.
//
// Ex.:
//   buildWordChain(['zoo', 'sour', 'racket', 'octos']);
//   => ['zoo', 'octos', 'sour', 'racket']
function buildWordChain(words) {
    let finalArr = []
    let checkerArr = []
    for (const word of words) {
        if (word === words[0]) {
            finalArr.push(word)
        } else if (word[0] === finalArr[finalArr.length - 1][finalArr[finalArr.length - 1].length - 1]) {
            finalArr.push(word)
        } else {
            checkerArr.push(word)
        }
    }
    while (checkerArr.length !== 0) {
        let loopCheck = true
        for (const check of checkerArr) {
            if (check[0] === finalArr[finalArr.length - 1][finalArr[finalArr.length - 1].length - 1]) {
              loopCheck = false
              finalArr.push(
                    checkerArr.splice(checkerArr.indexOf(check), 1)[0]
                ) 
            }
        if (loopCheck) {
            break
        }
        }
    }
    return finalArr
}


export { buildWordChain };
