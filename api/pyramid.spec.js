const {isPyramidWord} = require("./pyramid");
const assert = require("assert");

describe('isPyramidWord', () => {
    it('should return true when provided a pyramid word or sequence', () => {
        assert.equal(isPyramidWord('banana'), true);
        assert.equal(isPyramidWord('dad'), true);
        assert.equal(isPyramidWord('ill'), true);
        assert.equal(isPyramidWord('yzkkzz'), true);
    });

    it('should determine pyramid-ness regardless of case', () => {
        assert.equal(isPyramidWord('baNaNa'), true);
        assert.equal(isPyramidWord('BANANA'), true);
        assert.equal(isPyramidWord('Banana'), true);
    });

    it('should return false when provided a string with non-alpha characters', () => {
        assert.equal(isPyramidWord(' banana '), false);
        assert.equal(isPyramidWord('dad_'), false);
        assert.equal(isPyramidWord('122333'), false);
        assert.equal(isPyramidWord('$banana'), false);
    });
});
