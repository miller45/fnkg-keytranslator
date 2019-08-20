
import {KeyTranslate} from "./key-translate";
describe('key-translate ', function () {


    beforeEach(function () {

    });

    describe('breaking cases',function(){
        it('throws on null/undefined', function () {
            expect(function(){KeyTranslate(null)}).toThrow();
            expect(function(){KeyTranslate(undefined)}).toThrow();
        });

        it('returns Unidentified with arbitrary object', function () {
            expect(KeyTranslate({})).toEqual("Unidentified");
        });

        it('returns Unidentified with key that is null', function () {
            expect(KeyTranslate({
                key:null
            })).toEqual("Unidentified");
        });

        it('returns Unidentified with keyIdentifier that is null', function () {
            expect(KeyTranslate({
                keyIdentifier:null
            })).toEqual("Unidentified");
        });

    });

    describe('regular cases',function(){
        it('Normal key', function () {
            expect(KeyTranslate({
                key:"A"
            })).toEqual("A");
        });

        it('Normal key', function () {
            expect(KeyTranslate({
                key:"A"
            })).toEqual("A");
        });

        it('Control key Del', function () {
            expect(KeyTranslate({
                key:"Del"
            })).toEqual("Delete");

            expect(KeyTranslate({
                key:"Delete"
            })).toEqual("Delete");
        });

        it('Control key backspace literal', function () {
            expect(KeyTranslate({
                key:"\b"
            })).toEqual("Backspace");

            expect(KeyTranslate({
                key:"Backspace"
            })).toEqual("Backspace");
        });

        it('KeyIdentifier X', function () {
            expect(KeyTranslate({
                key:null,
                keyIdentifier:"X"
            })).toEqual("X");
        });

        it('KeyIdentifier Esc', function () {
            expect(KeyTranslate({
                key:null,
                keyIdentifier:"Esc"
            })).toEqual("Escape");
        });

        it('Unicode literal', function () {
            expect(KeyTranslate({
                key:null,
                keyIdentifier:"U+0061"
            })).toEqual("a");
        });

        it('Chrome numeric keypad patch', function () {
            expect(KeyTranslate({
                key:null,
                keyIdentifier:"U+0046", /* = 'F' */
                location:3
            })).toEqual("6");
        });

    });


});


