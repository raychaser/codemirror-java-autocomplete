import {CommonTokenStream, Parser} from 'antlr4ts';

import * as c3 from 'antlr4-c3';
import {CaretPosition} from './types';
import {ParseTree} from 'antlr4ts/tree';
import {computeTokenPosition} from './compute-token-position';
import {Completion} from '@codemirror/autocomplete';


export function getSuggestionsForParse(
    parser: Parser,
    parseTree: ParseTree,
    caretPosition: CaretPosition,
    tokenStream: CommonTokenStream,
    identifierType: number): Completion[] {

    console.log('========= Getting suggestions at ', caretPosition.line, caretPosition.column);
    const tokenPosition = computeTokenPosition(parseTree, tokenStream, caretPosition);
    if (!tokenPosition) {
        console.log('No token position, returning empty suggestions');
        return [];
    }
    return getSuggestionsAtCaretTokenIndex(parser, tokenPosition.index);
}

export function getSuggestionsAtCaretTokenIndex(parser: Parser, caretTokenIndex: number) {
    console.log('========= Getting suggestions at caret token index', caretTokenIndex);

    const core = new c3.CodeCompletionCore(parser);
    const ignored: number[] = [];
    core.ignoredTokens = new Set(ignored);

    const candidates = core.collectCandidates(caretTokenIndex);
    const completions: Completion[] = [];
    candidates.tokens.forEach((tokens, k) => {
        const symbolicName = parser.vocabulary.getSymbolicName(k);
        console.log('Names', symbolicName,
            '|', parser.vocabulary.getDisplayName(k),
            '|', parser.vocabulary.getLiteralName(k));
        if (symbolicName) {
            completions.push(
                {
                    label: symbolicName,
                    type: 'keyword'
                });
        }
    });

    console.log(completions);
    return completions;

    // completions = completions.concat(suggestIdentifiers(tokenStream, caretPosition, identifierType));

    // FILTER BASED ON WHAT IS TYPED ALREADY FOR THE TOKEN TO WHITTLE
    // DOWN THE LIST TO SHOW
    //
    // const isIgnoredToken =
    //     tokenPosition.context instanceof TerminalNode &&
    //     ignored.indexOf(tokenPosition.context.symbol.type) >= 0;
    // const textToMatch = isIgnoredToken ? '' : tokenPosition.text;
    // console.log('Text to match', textToMatch);
    // const filteredTokens = filterTokens(textToMatch, completions);
    // console.log('Returning completions', filteredTokens);
    // return filteredTokens;
}

function suggestIdentifiers(tokenStream: CommonTokenStream,
                            caretPosition: CaretPosition,
                            identifierType: number): Completion[] {
    return tokenStream.getTokens()
        .filter(item => item.type === identifierType
            && item.text != null
            && item.line !== caretPosition.line
        )
        .map(item => {
            return {
                label: item.text || '',
                type: 'variable'
            };
        });
}

function filterTokens(text: string, candidates: Completion[]): Completion[] {
    if (text.trim().length === 0) {
        return candidates;
    } else {
        return candidates.filter(c => c.label.toLowerCase().startsWith(text.toLowerCase()));
    }
}
