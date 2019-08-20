import {KeyTranslate} from "./key-translate";

describe('key-translate ', () => {


    beforeEach(() => {

    });

    describe('breaking cases', function () {
        it('throws on null/undefined', () => {
            expect(function () {
                KeyTranslate(null)
            }).toThrow();
            expect(function () {
                KeyTranslate(undefined)
            }).toThrow();
        });

        it('returns Unidentified with arbitrary object', () => {
            expect(KeyTranslate({})).toEqual("Unidentified");
        });

        it('returns Unidentified with key that is null', () => {
            expect(KeyTranslate({
                key: null
            })).toEqual("Unidentified");
        });

        it('returns Unidentified with keyIdentifier that is null', () => {
            expect(KeyTranslate({
                keyIdentifier: null
            })).toEqual("Unidentified");
        });

    });

    describe('regular cases', () => {
        it('Normal key', () => {
            expect(KeyTranslate({
                key: "A"
            })).toEqual("A");
        });

        it('Normal key', () => {
            expect(KeyTranslate({
                key: "A"
            })).toEqual("A");
        });

        it('Control key Del', () => {
            expect(KeyTranslate({
                key: "Del"
            })).toEqual("Delete");

            expect(KeyTranslate({
                key: "Delete"
            })).toEqual("Delete");
        });

        it('Control key backspace literal', () => {
            expect(KeyTranslate({
                key: "\b"
            })).toEqual("Backspace");

            expect(KeyTranslate({
                key: "Backspace"
            })).toEqual("Backspace");
        });

        it('KeyIdentifier X', () => {
            expect(KeyTranslate({
                key: null,
                keyIdentifier: "X"
            })).toEqual("X");
        });

        it('KeyIdentifier Esc', () => {
            expect(KeyTranslate({
                key: null,
                keyIdentifier: "Esc"
            })).toEqual("Escape");
        });

        it('Unicode literal', () => {
            expect(KeyTranslate({
                key: null,
                keyIdentifier: "U+0061"
            })).toEqual("a");
        });

        it('Chrome numeric keypad patch', () => {
            expect(KeyTranslate({
                key: null,
                keyIdentifier: "U+0046", /* = 'F' */
                location: 3
            })).toEqual("6");
        });

    });


});


