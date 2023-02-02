let words = ["Hello", "world", "this", "is", "an", "array"];

let wordObjects = words.map(word => ({
    mot: word,
    longueur: word.length
}));

let longest = wordObjects.reduce((longestWord, currentWord) => {
    return currentWord.longueur > longestWord.longueur ? currentWord : longestWord;
});

console.log(longest);

let arr = [['Hello'], ['world'], ['this'], ['is'], ['an'], ['array']];

let flattenArray = arr.flat();

let count = flattenArray.reduce((counts, word) => {
    if (counts[word] === undefined) {
        counts[word] = 1;
    } else {
        counts[word]++;
    }
    return counts;
}, {});

console.log(count);

let scores = [47, 68, 89, 92, 74, 53, 60];

let bonusScores = scores
    .map(score => score < 50 ? score + 15 : score)
    .filter(score => score >= 50);

let totalScore = bonusScores.reduce((sum, score) => sum + score, 0);

console.log(totalScore);    



