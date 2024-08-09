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
    let finalArr = [] // This is the final display array. It allows us to keep track of the order of words
    let checkerArr = [] // This holds onto the words that aren't matched yet, and will be used in the while loop to check them again
    for (const word of words) {
        if (word === words[0]) { // This grabs the first string in the given array and places it in our final array. We need this to check against, so it's first
            finalArr.push(word)
        } else if (word[0] === finalArr[finalArr.length - 1][finalArr[finalArr.length - 1].length - 1]) { //This is the check for matching a first letter to the previous word's last letter
            finalArr.push(word)
            for (let i = words.indexOf(word) + 1; i < words.length; i++) { // the for loop is here to push remaining words to the checkerArr if another word in sequence matches
                checkerArr.push(words[i])
            }
            break // The break stops the for loop permanently; the previous for loop places remaining words in the checkerArr, so this way we avoid duplicates in checkerArr
        } else { // If a word doesn't match the first string initially, then it is placed into the checkerArr
            checkerArr.push(word)
        }
    }
    while (checkerArr.length !== 0) { //This loop is to recheck left over words. The amount of rechecks will vary among arrays, so I need something that will keep checking
        let loopCheck = true // This is for checking if the array has left over words that won't match. 
        for (const check of checkerArr) {
            if (check[0] === finalArr[finalArr.length - 1][finalArr[finalArr.length - 1].length - 1]) { // Our check statement once again
              loopCheck = false
              finalArr.push(
                    checkerArr.splice(checkerArr.indexOf(check), 1)[0] // This removes the word from our checkerArr once it matches, and then adds it as a string rather than a nested array
                ) 
              continue // This stops the current iteration cycle immediately (similar to break), but allows the loop to occur again for later iterations of the while loop
            }
        if (loopCheck) { // This stops the loop if the for... of loop checked over everything but found no matches in the array
            return finalArr
        }
        }
    }
    return finalArr
}

// I've updated this code again. I realized that more complicated situations would fail to have the correct order
// Ex: ['susan', 'pizza', 'noclip', 'patrick', 'apop']
// In this case, my old program would put 'susan' first, skip over 'pizza', then grab 'noclip'. This would then continue on and select 'patrick' as the next in the chain, even though
// The rules state that 'pizza' should be chosen as it was in the array first.
// I've updated the code to allow for the correct order of the strings. I've also added comments to each line to explain the logic

export { buildWordChain };
