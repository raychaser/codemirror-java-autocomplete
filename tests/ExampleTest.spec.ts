import {
    getSuggestionsAtCaretTokenIndex,
    getSuggestionsForParse
} from '../src/components/autocomplete/suggest';
import {HamelinLexer} from '../src/generated/HamelinLexer';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {HamelinParser} from '../src/generated/HamelinParser';
import {
    computeTokenPosition
} from '../src/components/autocomplete/compute-token-position';


function getCaretTokenIndex(code: string, line: number, column: number) {
    const lexer = new HamelinLexer(CharStreams.fromString(code));
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HamelinParser(tokenStream);
    parser.removeErrorListeners();
    parser.removeParseListeners();
    const caretTokenPosition = computeTokenPosition(parser.commands(), tokenStream, {
        line: line, column: column
    }, []);
    return caretTokenPosition;
}

function completionsFromLineAndColumn(code: string, line: number, column: number) {
    const lexer = new HamelinLexer(CharStreams.fromString(code));
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HamelinParser(tokenStream);
    parser.removeErrorListeners();
    parser.removeParseListeners();
    const completions = getSuggestionsForParse(parser, parser.commands(), {
            line: line, column: column
        }, // Lines start at 1, columns at 0
        tokenStream, HamelinParser.IDENTIFIER_);
    return completions;
}

function completionsFromCaretTokenIndex(code: string, caretTokenIndex: number) {
    const lexer = new HamelinLexer(CharStreams.fromString(code));
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HamelinParser(tokenStream);
    parser.removeErrorListeners();
    parser.removeParseListeners();
    parser.commands();
    const completions = getSuggestionsAtCaretTokenIndex(parser, caretTokenIndex,);
    return completions;
}

describe('Hamelin autocompletion tests', () => {
    describe('Caret token index inference', () => {
        describe('When the input is "from "', () => {
            const input = 'from ';

            it('Can infer caret token index for line 1, column 0', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 0);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(0);
            });

            it('Can infer caret token index 0 for line 1, column 1', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 1);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(0);
            });

            it('Can infer caret token index 0 for line 1, column 2', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 2);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(0);
            });

            it('Can infer caret token index 0 for line 1, column 3', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 3);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(0);
            });

            it('Can infer caret token index 1 for line 1, column 4', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 4);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(0);
            });

            it('Can infer caret token index 1 for line 1, column 5', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 5);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(1);
            });
        });

        describe('When the input is "from xxx"', () => {
            const input = 'from xxx';

            it('Can infer caret token index 1 for line 1, column 4', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 4);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(0);
            });

            it('Can infer caret token index 1 for line 1, column 5', () => {
                const caretTokenPosition = getCaretTokenIndex(input, 1, 5);
                console.log('Caret token position', caretTokenPosition);
                expect(caretTokenPosition).toBeDefined();
                console.log('Caret token index', caretTokenPosition?.index);
                expect(caretTokenPosition?.index).toEqual(1);
            });
        });
    });

    describe('When using line and column position', () => {
        it('Can do basic autocompletion', () => {
            const code = 'from ';
            const completions = completionsFromLineAndColumn(code, 1, 0);
            console.log('Completions', completions);
            expect(completions.length).toBe(1);
            expect(completions[0].label).toBe('FROM_COMMAND');
        });
    });

    describe('When using the caret token index', () => {
        it('Suggests FROM_COMMAND at caret token index 0', () => {
            const completions = completionsFromCaretTokenIndex('from ', 0);
            expect(completions.length).toBe(1);
            expect(completions[0].label).toBe('FROM_COMMAND');
        });

        it('Suggests FROM_IDENTIFIER at caret token index 1', () => {
            const completions = completionsFromCaretTokenIndex('from ', 1);
            expect(completions.length).toBe(1);
            expect(completions[0].label).toBe('FROM_IDENTIFIER');
        });

        it('Suggests time stuff and pipe at caret token index 2', () => {
            const completions = completionsFromCaretTokenIndex('from xxx', 2);
            expect(completions.length).toBe(4);
            expect(completions[0].label).toBe('FROM_RELATIVE_TIME_EXPRESSION');
            expect(completions[1].label).toBe('ISO_T');
            expect(completions[2].label).toBe('ISO_DIGIT');
            expect(completions[3].label).toBe('FROM_PIPE');
        });
    });
});
