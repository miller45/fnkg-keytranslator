var ktranslate=require('../dist/js/key-translate').KeyTranslate;
describe('key-translate ', function () {


    beforeEach(function () {

    });

    describe('breaking cases',function(){
        it('throws on null/undefined', function () {
            expect(function(){ktranslate(null)}).toThrow();
            expect(function(){ktranslate(undefined)}).toThrow();
        });

        it('returns Unidentified with arbitrary object', function () {
            expect(ktranslate({})).toEqual("Unidentified");
        });

        it('returns Unidentified with key that is null', function () {
            expect(ktranslate({
                key:null
            })).toEqual("Unidentified");
        });

        it('returns Unidentified with keyIdentifier that is null', function () {
            expect(ktranslate({
                keyIdentifier:null
            })).toEqual("Unidentified");
        });

    });

    describe('regular cases',function(){
        it('Normal key', function () {
            expect(ktranslate({
                key:"A"
            })).toEqual("A");
        });

        it('Normal key', function () {
            expect(ktranslate({
                key:"A"
            })).toEqual("A");
        });

        it('Control key Del', function () {
            expect(ktranslate({
                key:"Del"
            })).toEqual("Delete");

            expect(ktranslate({
                key:"Delete"
            })).toEqual("Delete");
        });

        it('Control key backspace literal', function () {
            expect(ktranslate({
                key:"\b"
            })).toEqual("Backspace");

            expect(ktranslate({
                key:"Backspace"
            })).toEqual("Backspace");
        });

        it('Unicode literal', function () {
            expect(ktranslate({
                key:null,
                keyIdentifier:"U+0061"
            })).toEqual("a");
        });

        it('Chrome numeric keypad patch', function () {
            expect(ktranslate({
                key:null,
                keyIdentifier:"U+0046", /* = 'F' */
                location:3
            })).toEqual("6");
        });

    });


});


