const nestedNumbers = require('./nestedNumbers');

test('successful for nestedNumbers', () => {
    expect(nestedNumbers([[2],[3],[1],[6]])).toEqual([['even'],['odd'],['odd'],['even']]);
    expect(nestedNumbers([[2,2,2],[3],[1],[6]])).toEqual([['even', 'even', 'even'],['odd'],['odd'],['even']]);
    expect(nestedNumbers([[2],[3,7,9],[1],[6]])).toEqual([['even'],['odd','odd','odd'],['odd'],['even']]);
    expect(nestedNumbers([[2],[3,7,9],[1],[6, 10, 12]])).toEqual([['even'],['odd','odd','odd'],['odd'],['even', 'even', 'even']]);
});