// $antlr-format alignTrailingComments true, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons ownLine
// $antlr-format alignColons trailing, singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true

lexer grammar HamelinLexer;

// Commands
FROM_COMMAND:  F R O M -> mode(FROM);
SEARCH_COMMAND:  S E A R C H -> mode(LUCENE);
LET_COMMAND: L E T;
PARSE_COMMAND: P A R S E;
LIMIT_COMMAND: L I M I T;
FIELDS_COMMAND: F I E L D S;

ANCHOR_KEYWORD: A N C H O R;
REGEX_KEYWORD: R E G E X;
AS_KEYWORD: A S;

PIPE_   : '|' -> mode(DEFAULT_MODE);


//
// Trino
//

AND_               : 'AND';
FALSE_             : 'FALSE';
LIMIT_             : 'LIMIT';
NOT_               : 'NOT';
NULL_              : 'NULL';
OR_                : 'OR';
TRUE_          : 'TRUE';


EQ_  : '=';
NEQ_ : '<>' | '!=';
LT_  : '<';
LTE_ : '<=';
GT_  : '>';
GTE_ : '>=';

PLUS_          : '+';
MINUS_         : '-';
ASTERISK_      : '*';
SLASH_         : '/';
PERCENT_       : '%';
CONCAT_        : '||';
QUESTION_MARK_ : '?';
SEMICOLON_     : ';';

// Punctuations not provided by official g4 file
DOT_   : '.';
COLON_ : '_:';
COMMA_ : ',';

LPAREN_       : '(';
RPAREN_       : ')';
LSQUARE_      : '[';
RSQUARE_      : ']';
LCURLY_       : '{';
RCURLY_       : '}';
//LCURLYHYPHEN_ : '{-';
//RCURLYHYPHEN_ : '-}';

LARROW_       : '<-';
RARROW_       : '->';
RDOUBLEARROW_ : '=>';

DOLLAR_ : '$';
CARET_  : '^';

// NOT TRINO >>>>
ESCAPED_STRING
    : '"'      (ESCAPE | '\\"'   | ~["])* '"'
    | '\''     (ESCAPE | '\\\'' | ~['])* '\''
    | '\u201C' (ESCAPE | .)*? ('\u201D' | '\u2033')   // smart quotes
    ;

fragment ESCAPE
    : '\u0060\''    // backtick single-quote
    | '\u0060"'     // backtick double-quote
    ;
// <<< NOT TRINO


STRING_
        : '\'' ( ~'\'' | '\'\'')* '\''
        | '"' ( ~'"' | '""')* '"'
        ;
UNICODE_STRING_
        : 'U&\'' ( ~'\'' | '\'\'')* '\''
        | 'U&"' ( ~'"' | '""')* '"'
        ;


// Note_: we allow any character inside the binary literal and validate
// its a correct literal when the AST is being constructed. This
// allows us to provide more meaningful error messages to the user
BINARY_LITERAL_: 'X\'' ~'\''* '\'';

INTEGER_VALUE_: DIGIT_+;
DECIMAL_VALUE_: DIGIT_+ '.' DIGIT_* | '.' DIGIT_+;
DOUBLE_VALUE_: DIGIT_+ ('.' DIGIT_*)? EXPONENT_ | '.' DIGIT_+ EXPONENT_;

IDENTIFIER_: (LETTER_ | UNDERSCORE_) (LETTER_ | DIGIT_ | UNDERSCORE_)*;
//DIGIT_IDENTIFIER_: DIGIT_ (LETTER_ | DIGIT_ | '_')+;
QUOTED_IDENTIFIER_: '"' ( ~'"' | '""')* '"';
//BACKQUOTED_IDENTIFIER_: '`' ( ~'`' | '``')* '`';
UNDERSCORE_: '_';

fragment EXPONENT_: 'E' [+-]? DIGIT_+;
fragment DIGIT_: [0-9];
fragment LETTER_: [a-z] | [A-Z];

//
//
//


SIMPLE_COMMENT_: '#' ~[\r\n]* '\r'? '\n'? -> channel(HIDDEN);
//BRACKETED_COMMENT_: '/*' .*? '*/' -> channel(HIDDEN);

WS_: [ \r\n\t]+ -> channel(HIDDEN);

fragment A:('a'|'A');
fragment B:('b'|'B');
fragment C:('c'|'C');
fragment D:('d'|'D');
fragment E:('e'|'E');
fragment F:('f'|'F');
fragment G:('g'|'G');
fragment H:('h'|'H');
fragment I:('i'|'I');
fragment J:('j'|'J');
fragment K:('k'|'K');
fragment L:('l'|'L');
fragment M:('m'|'M');
fragment N:('n'|'N');
fragment O:('o'|'O');
fragment P:('p'|'P');
fragment Q:('q'|'Q');
fragment R:('r'|'R');
fragment S:('s'|'S');
fragment T:('t'|'T');
fragment U:('u'|'U');
fragment V:('v'|'V');
fragment W:('w'|'W');
fragment X:('x'|'X');
fragment Y:('y'|'Y');
fragment Z:('z'|'Z');

// Catch-all for anything we can't recognize.
// We use this to be able to ignore and recover all the text
// when splitting statements with DelimiterLexer
UNRECOGNIZED_: .;

//
//
//

////TODO LINE_COMMENT : '//' .*? '\n' -> skip;
////TODO COMMENT : '/*' .*? '*/' -> skip;
//WHITESPACE : [ \t\n\r]+ -> skip;
//
//// Fallthrough rule
//UNKNOWN: .;
//
//
//fragment QUOTED_CHAR: ~["\\] | ESCAPED_CHAR;
//fragment ESCAPED_CHAR: '\\' .;
//fragment NUM_CHAR: [0-9];
//
//// ADDED | and ,
//fragment TERM_START_CHAR: ~[ \t\n\r\u3000+\-!():^@<>=[\]"{}~\\/|,] | ESCAPED_CHAR;
//
//fragment TERM_CHAR: ( TERM_START_CHAR | ESCAPED_CHAR | [\-+]);



// https://github.com/quartamsoftware/antlr-hypertalk-grammar/blob/d43d9bafda1238c5e2a40eaab28d3c768b939797/grammar/HyperTalk.g4

//
// Lucene
//
mode LUCENE;
LUCENE_PIPE: '|' -> mode(DEFAULT_MODE);

//AND: A N D | '&&';
//OR: O R | CONCAT_;
//NOT: N O T | '!';
//LUCENE_TERM: LUCENE_TERM_START_CHAR LUCENE_TERM_CHAR*;
//// ADDED | and ,
//fragment LUCENE_TERM_START_CHAR: ~[ \t\n\r\u3000+\-!():^@<>=[\]"{}~\\/|,] | LUCENE_ESCAPED_CHAR;
//fragment LUCENE_TERM_CHAR: ( LUCENE_TERM_START_CHAR | LUCENE_ESCAPED_CHAR | [\-+]);
//fragment LUCENE_ESCAPED_CHAR: '\\' .;

// <AND:           ("AND" | "&&") >
LUCENE_AND: 'AND' | '&&';

// <OR:            ("OR" | "||") >
LUCENE_OR: 'OR' | '||';

// <NOT:           ("NOT" | "!") >
LUCENE_NOT: 'NOT' | '!';

// <PLUS:          "+" >
LUCENE_PLUS: '+';

// <MINUS:         "-" >
LUCENE_MINUS: '-';

// <LPAREN:        "(" >
LUCENE_LPAREN: '(';

// <RPAREN:        ")" >
LUCENE_RPAREN: ')';

// <OP_COLON:      ":" >
LUCENE_OP_COLON: ':';

// <OP_EQUAL:      "=" >
LUCENE_OP_EQUAL: '=';

// <OP_LESSTHAN:   "<"  >
LUCENE_OP_LESSTHAN: '<';

// <OP_LESSTHANEQ: "<=" >
LUCENE_OP_LESSTHANEQ: '<=';

// <OP_MORETHAN:   ">"  >
LUCENE_OP_MORETHAN: '>';

// <OP_MORETHANEQ: ">=" >
LUCENE_OP_MORETHANEQ: '>=';

// <CARAT:         "^" >
LUCENE_CARAT: '^';

// <TILDE:         "~" >
LUCENE_TILDE: '~';

// <QUOTED:        "\"" (<_QUOTED_CHAR>)* "\"">
LUCENE_QUOTED: '"' LUCENE_QUOTED_CHAR* '"';

// <NUMBER:        (<_NUM_CHAR>)+ ( "." (<_NUM_CHAR>)+ )? >
LUCENE_NUMBER: LUCENE_NUM_CHAR+ ( '.' LUCENE_NUM_CHAR+)?;

// <TERM:          <_TERM_START_CHAR> (<_TERM_CHAR>)* >
LUCENE_TERM: LUCENE_TERM_START_CHAR LUCENE_TERM_CHAR*;

// <REGEXPTERM:    "/" (~[ "/" ] | "\\/" )* "/" >
LUCENE_REGEXPTERM: '/' ( ~'/' | '\\/')* '/';

//// <RANGEIN_START: "[" > : Range
//RANGEIN_START: '[' -> mode(R_MODE);
//
//// <RANGEEX_START: "{" > : Range
//RANGEEX_START: '{' -> mode(R_MODE);

// <DEFAULT, Range, Function> SKIP : { < <_WHITESPACE> > }
LUCENE_DEFAULT_SKIP: LUCENE_WHITESPACE -> skip;

// Fallthrough rule
LUCENE_UNKNOWN: .;

// <#_WHITESPACE: ( " " | "\t" | "\n" | "\r" | "\u3000") >
fragment LUCENE_WHITESPACE: [ \t\n\r\u3000];

// <#_QUOTED_CHAR: ( ~[ "\"", "\\" ] | <_ESCAPED_CHAR> ) >
fragment LUCENE_QUOTED_CHAR: ~["\\] | LUCENE_ESCAPED_CHAR;

// <#_ESCAPED_CHAR: "\\" ~[] >
fragment LUCENE_ESCAPED_CHAR: '\\' .;

// <#_NUM_CHAR:   ["0"-"9"] >
fragment LUCENE_NUM_CHAR: [0-9];

// <#_TERM_START_CHAR: ( ~[ " ", "\t", "\n", "\r", "\u3000", "+", "-", "!", "(", ")", ":", "^", "@",
//                          "<", ">", "=", "[", "]", "\"", "{", "}", "~", "\\", "/"]
//                       | <_ESCAPED_CHAR> ) >
fragment LUCENE_TERM_START_CHAR: ~[ \t\n\r\u3000+\-!():^@<>=[\]"{}~\\/] | LUCENE_ESCAPED_CHAR;

// <#_TERM_CHAR: ( <_TERM_START_CHAR> | <_ESCAPED_CHAR> | "-" | "+" ) >
fragment LUCENE_TERM_CHAR: ( LUCENE_TERM_START_CHAR | LUCENE_ESCAPED_CHAR | [\-+]);


//
// FROM
//

mode FROM;
FROM_PIPE: PIPE_ -> mode(DEFAULT_MODE);

// Time
FROM_RELATIVE_TIME_EXPRESSION: MINUS_? DIGIT_+ TIME_UNIT ('@' TIME_UNIT)?;
TIME_UNIT: TIME_SECOND | TIME_MINUTE | TIME_HOUR | TIME_DAY | TIME_WEEK | TIME_MONTH | TIME_QUARTER | TIME_YEAR;
TIME_SECOND: S | S E C | S E C S | S E C O N D | S E C O N D S;
TIME_MINUTE: M | M I N | M I N S | M I N U T E | M I N U T E S;
TIME_HOUR: H | H R | H R S | H O U R | H O U R S;
TIME_DAY: D | D A Y | D A Y S;
TIME_WEEK: W | W E E K | W E E K S;
TIME_MONTH: M O N | M O N T H | M O N T H S;
TIME_QUARTER: Q | Q T R | Q T R S | Q U A R T E R | Q U A R T E R S;
TIME_YEAR: Y | Y R | Y R S | Y E A R | Y E A R S;

//
// ISO8601
//

FROM_IDENTIFIER: (ISO_T | ISO_Z | ISO_W | ISO_P | FROM_LETTER | FROM_UNDERSCORE) ((ISO_T | ISO_Z | ISO_W | ISO_P | FROM_LETTER | FROM_UNDERSCORE) | FROM_DIGIT)*;

ISO_T: T;
ISO_Z: Z;
ISO_W: W;
ISO_P: P;
ISO_PLUS: PLUS_;
ISO_MINUS: MINUS_;
ISO_COLON: ':';
ISO_DIGIT: DIGIT_;
ISO_FRACTION: [,.] ISO_DIGIT+;

FROM_LETTER: LETTER_;
FROM_UNDERSCORE: UNDERSCORE_;
FROM_DIGIT: DIGIT_;

ISO_DEFAULT_SKIP: ISO_WHITESPACE -> skip;
ISO_UNKNOWN: .;

fragment ISO_WHITESPACE: [ \t\n\r\u3000];
