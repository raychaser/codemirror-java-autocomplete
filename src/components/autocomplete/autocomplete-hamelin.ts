import { Completion } from '@codemirror/autocomplete';
import { HamelinLexer } from '../../generated/HamelinLexer';
import { HamelinParser } from '../../generated/HamelinParser';
import { CaretPosition } from './types';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { getSuggestionsForParse } from './suggest';

export function completeHamelin(code: string, caretPosition: CaretPosition): Completion[] {
    const lexer = new HamelinLexer(CharStreams.fromString(code));
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HamelinParser(tokenStream);
    parser.removeErrorListeners();
    parser.removeParseListeners();
    return getSuggestionsForParse(parser,
        parser.commands(),
        caretPosition,
        tokenStream,
        HamelinParser.IDENTIFIER_
        );
}
