const reversedString = require('./reversedString');

test('successfull reversed string', () => {
    expect(reversedString('rotor')).toBe('rotor');
    expect(reversedString('rotor')).toBe('rotor');
    expect(reversedString('kayak')).toBe('kayak');
    expect(reversedString('hannah')).toBe('hannah');
});