// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('phone number with () should be true', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});

test('phone number with - should be true', () => {
    expect(functions.isPhoneNumber('098-765-4321')).toBe(true);
});

test('phone number with no spaces should be false', () => {
    expect(functions.isPhoneNumber('8880009292')).toBe(false);
});

test('phone number with letters should be false', () => {
    expect(functions.isPhoneNumber('hi')).toBe(false);
});

test('ucsd email should be true', () => {
    expect(functions.isEmail('ajpan@ucsd.edu')).toBe(true);
});

test('work email should be true', () => {
    expect(functions.isEmail('a1pan@ucsd.edu')).toBe(true);
});

test('email with spaces should be false', () => {
    expect(functions.isEmail('a jpan@ucsd.edu')).toBe(false);
});

test('email with bad formatting should be false', () => {
    expect(functions.isEmail('hi@gma@il..@com')).toBe(false);
});

test('regular password should be true', () => {
    expect(functions.isStrongPassword('kyliehi8')).toBe(true);
});

test('powell password should be true', () => {
    expect(functions.isStrongPassword('powell')).toBe(true);
});

test('long password should be false', () => {
    expect(functions.isStrongPassword('akjnsgijabsdipjgbasipugb')).toBe(false);
});

test('password that doesn\'t start with a letter should be false', () => {
    expect(functions.isStrongPassword('8ball')).toBe(false);
});

test('memorial day should be true', () => {
    expect(functions.isDate('5/29/2023')).toBe(true);
});

test('end of quarter should be true', () => {
    expect(functions.isDate('06/18/2023')).toBe(true);
});

test('date with no spaces should be false', () => {
    expect(functions.isDate('09082022')).toBe(false);
});

test('date with longer than 2 month chars should be false', () => {
    expect(functions.isDate('07/777/7777')).toBe(false);
});

test('blue should be true', () => {
    expect(functions.isHexColor('#00FF00')).toBe(true);
});

test('6 chars should be true', () => {
    expect(functions.isHexColor('#012345')).toBe(true);
});

test('lavender should be false', () => {
    expect(functions.isHexColor('lavender')).toBe(false);
});

test('more than 6 chars should be false', () => {
    expect(functions.isHexColor('#FFFFFFFF')).toBe(false);
});