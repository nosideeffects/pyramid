
module.exports.route = (req, res) => {
    const word = req.query.q;

    let isPyramid = false;
    if (word && typeof word === 'string') {
        isPyramid = isPyramidWord(word);
    }

    res.json({
        isPyramid
    });
};

const ALPHA_CHARACTERS = /^[a-z]+$/;

/**
 * Accepts a string and returns `true` if it is a pyramid word.
 *
 * It explicitly forbids non-alpha characters, but does not validate
 * the sequence against any dictionary mechanism.
 * @param word
 * @return boolean
 */
function isPyramidWord(word) {
    const lowercaseWord = word.toLowerCase();

    if (lowercaseWord.match(ALPHA_CHARACTERS)) {
        const characters = lowercaseWord.split("");

        const characterCounts = characters.reduce((buckets, c) => {
            buckets[c] = (buckets[c] || 0) + 1;
            return buckets;
        }, {});

        return Object.entries(characterCounts)
            .sort(([characterA, countA],[characterB, countB]) => {
                return countA - countB;
            })
            .map(([character, count], index) => {
                return count === (index + 1);
            })
            .reduce((pyramidSoFar, countMatchedIndex) => {
                return pyramidSoFar && countMatchedIndex;
            }, true);
    } else {
        return false;
    }
}

module.exports.isPyramidWord = isPyramidWord;