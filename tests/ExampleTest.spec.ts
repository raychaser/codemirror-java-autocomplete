import { getSuggestionsForParse } from  '../src/components/autocomplete/suggest';
import {HamelinLexer} from '../src/generated/HamelinLexer';
import {CharStreams, CommonTokenStream} from 'antlr4ts';
import {HamelinParser} from '../src/generated/HamelinParser';


describe('Hamelin autocompletion tests', () => {
    it('Can do basic autocompletion', () => {

        const code = 'from ';
        const lexer = new HamelinLexer(CharStreams.fromString(code));
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new HamelinParser(tokenStream);
        parser.removeErrorListeners();
        parser.removeParseListeners();
        const completions = getSuggestionsForParse(parser,
            parser.commands(),
            {line: 1, column: 0}, // Lines start at 1, columns at 0
            tokenStream,
            HamelinParser.IDENTIFIER_
        );
        console.log('Completions', completions);
        expect(completions.length).toBe(1);
        expect(completions[0].label).toBe('FROM_COMMAND');
    });
});
