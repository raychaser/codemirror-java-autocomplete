// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging

parser grammar HamelinParser;

options {
    tokenVocab = HamelinLexer;
}

commands
    : from_command FROM_PIPE search_command ((LUCENE_PIPE | PIPE_) command)* EOF
    ;

command
    : let_command
    | parse_command
    | limit_command
    | fields_command
    ;

from_command
    : from_command_name dataset_ref (earliest=earliest_expression latest_expression? )?
    ;


from_command_name
    : FROM_COMMAND
    ;

dataset_ref
    : FROM_IDENTIFIER
    ;

earliest_expression
    : FROM_RELATIVE_TIME_EXPRESSION
    | iso
    ;

latest_expression
    : FROM_RELATIVE_TIME_EXPRESSION
    | iso
    ;

search_command
    : ASTERISK_ | (SEARCH_COMMAND luceneSearchQuery)
    |
    ;

let_command
    : LET_COMMAND identifier EQ_ expression
    ;

parse_command
    : PARSE_COMMAND (ANCHOR_KEYWORD | REGEX_KEYWORD)? field_name=identifier? parse_expressions (AS_KEYWORD field_names)?
    ;

parse_expressions
    : ESCAPED_STRING (COMMA_ ESCAPED_STRING)*
    ;

limit_command
    : LIMIT_COMMAND limit = INTEGER_VALUE_
    ;

fields_command
    : FIELDS_COMMAND field_names
    ;

field_names
    : identifier (COMMA_ identifier)*
    ;


//
// Trino
//

expression
    : booleanExpression
    ;

booleanExpression
    : valueExpression predicate_?              # predicated
    | NOT_ booleanExpression                   # logicalNot
    | booleanExpression AND_ booleanExpression # and
    | booleanExpression OR_ booleanExpression  # or
    ;

// workaround for https://github.com/antlr/antlr4/issues/780
predicate_
    : comparisonOperator right = valueExpression                                # comparison
//    | comparisonOperator comparisonQuantifier LPAREN_ query RPAREN_             # quantifiedComparison
//    | NOT_? BETWEEN_ lower = valueExpression AND_ upper = valueExpression       # between
//    | NOT_? IN_ LPAREN_ expression (COMMA_ expression)* RPAREN_                 # inList
//    | NOT_? IN_ LPAREN_ query RPAREN_                                           # inSubquery
//    | NOT_? LIKE_ pattern = valueExpression (ESCAPE_ escape = valueExpression)? # like
//    | IS_ NOT_? NULL_                                                           # nullPredicate
//    | IS_ NOT_? DISTINCT_ FROM_ right = valueExpression                         # distinctFrom
    ;

valueExpression
    :
    primaryExpression                                                                         # valueExpressionDefault
//    | valueExpression AT_ timeZoneSpecifier                                                     # atTimeZone
//    |
//     operator = (MINUS_ | PLUS_) valueExpression                                               # arithmeticUnary
    | left = valueExpression operator = (ASTERISK_ | SLASH_ | PERCENT_) right = valueExpression # arithmeticBinary
    | left = valueExpression operator = (PLUS_ | MINUS_) right = valueExpression                # arithmeticBinary
//    | left = valueExpression CONCAT_ right = valueExpression                                    # concatenation
    ;

    primaryExpression
        : NULL_                                                         # nullLiteral
//        | interval                                                      # intervalLiteral
//        | identifier string_                                            # typeConstructor
//        | DOUBLE_ PRECISION_ string_                                    # typeConstructor
        | number                                                        # numericLiteral
        | booleanValue                                                  # booleanLiteral
        | string_                                                       # stringLiteral
        | BINARY_LITERAL_                                               # binaryLiteral
//        | QUESTION_MARK_                                                # parameter
//        | POSITION_ LPAREN_ valueExpression IN_ valueExpression RPAREN_ # position
//        | LPAREN_ expression (COMMA_ expression)+ RPAREN_               # rowConstructor
//        | ROW_ LPAREN_ expression (COMMA_ expression)* RPAREN_          # rowConstructor
//        | name = LISTAGG_ LPAREN_ setQuantifier? expression (COMMA_ string_)? (
//            ON_ OVERFLOW_ listAggOverflowBehavior
//        )? RPAREN_ (WITHIN_ GROUP_ LPAREN_ ORDER_ BY_ sortItem (COMMA_ sortItem)* RPAREN_) filter?         # listagg
//        | processingMode? qualifiedName LPAREN_ (label = identifier DOT_)? ASTERISK_ RPAREN_ filter? over? # functionCall
        |
//        processingMode?
            qualifiedName LPAREN_ (
//            setQuantifier?
            expression (COMMA_ expression)*)?
//            (ORDER_ BY_ sortItem (COMMA_ sortItem)*)?
             RPAREN_
             //filter? (nullTreatment? over)?
                                                                                  # functionCall
//        | identifier over                                                       # measure
//        | identifier RARROW_ expression                                         # lambda
//        | LPAREN_ (identifier (COMMA_ identifier)*)? RPAREN_ RARROW_ expression # lambda
//        | LPAREN_ query RPAREN_                                                 # subqueryExpression
//        // This is an extension to ANSI_ SQL, which considers EXISTS_ to be a <boolean expression>
//        | EXISTS_ LPAREN_ query RPAREN_                                                                               # exists
//        | CASE_ operand = expression whenClause+ (ELSE_ elseExpression = expression)? END_                            # simpleCase
//        | CASE_ whenClause+ (ELSE_ elseExpression = expression)? END_                                                 # searchedCase
//        | CAST_ LPAREN_ expression AS_ type RPAREN_                                                                   # cast
//        | TRY_CAST_ LPAREN_ expression AS_ type RPAREN_                                                               # cast
//        | ARRAY_ LSQUARE_ (expression (COMMA_ expression)*)? RSQUARE_                                                 # arrayConstructor
//        | value = primaryExpression LSQUARE_ index = valueExpression RSQUARE_                                         # subscript
        | identifier                                                                                                  # columnReference
//        | base_ = primaryExpression DOT_ fieldName = identifier                                                       # dereference
//        | name = CURRENT_DATE_                                                                                        # specialDateTimeFunction
//        | name = CURRENT_TIME_ (LPAREN_ precision = INTEGER_VALUE_ RPAREN_)?                                          # specialDateTimeFunction
//        | name = CURRENT_TIMESTAMP_ (LPAREN_ precision = INTEGER_VALUE_ RPAREN_)?                                     # specialDateTimeFunction
//        | name = LOCALTIME_ (LPAREN_ precision = INTEGER_VALUE_ RPAREN_)?                                             # specialDateTimeFunction
//        | name = LOCALTIMESTAMP_ (LPAREN_ precision = INTEGER_VALUE_ RPAREN_)?                                        # specialDateTimeFunction
//        | name = CURRENT_USER_                                                                                        # currentUser
//        | name = CURRENT_CATALOG_                                                                                     # currentCatalog
//        | name = CURRENT_SCHEMA_                                                                                      # currentSchema
//        | name = CURRENT_PATH_                                                                                        # currentPath
//        | TRIM_ LPAREN_ (trimsSpecification? trimChar = valueExpression? FROM_)? trimSource = valueExpression RPAREN_ # trim
//        | TRIM_ LPAREN_ trimSource = valueExpression COMMA_ trimChar = valueExpression RPAREN_                        # trim
//        | SUBSTRING_ LPAREN_ valueExpression FROM_ valueExpression (FOR_ valueExpression)? RPAREN_                    # substring
//        | NORMALIZE_ LPAREN_ valueExpression (COMMA_ normalForm)? RPAREN_                                             # normalize
//        | EXTRACT_ LPAREN_ identifier FROM_ valueExpression RPAREN_                                                   # extract
        | LPAREN_ expression RPAREN_                                                                                  # parenthesizedExpression
//        | GROUPING_ LPAREN_ (qualifiedName (COMMA_ qualifiedName)*)? RPAREN_                                          # groupingOperation
//        | JSON_EXISTS_ LPAREN_ jsonPathInvocation (jsonExistsErrorBehavior ON_ ERROR_)? RPAREN_                       # jsonExists
//        | JSON_VALUE_ LPAREN_ jsonPathInvocation (RETURNING_ type)? (
//            emptyBehavior = jsonValueBehavior ON_ EMPTY_
//        )? (errorBehavior = jsonValueBehavior ON_ ERROR_)? RPAREN_ # jsonValue
//        | JSON_QUERY_ LPAREN_ jsonPathInvocation (RETURNING_ type (FORMAT_ jsonRepresentation)?)? (
//            jsonQueryWrapperBehavior WRAPPER_
//        )? ((KEEP_ | OMIT_) QUOTES_ (ON_ SCALAR_ TEXT_STRING_)?)? (
//            emptyBehavior = jsonQueryBehavior ON_ EMPTY_
//        )? (errorBehavior = jsonQueryBehavior ON_ ERROR_)? RPAREN_ # jsonQuery
//        | JSON_OBJECT_ LPAREN_ (
//            jsonObjectMember (COMMA_ jsonObjectMember)* (NULL_ ON_ NULL_ | ABSENT_ ON_ NULL_)? (
//                WITH_ UNIQUE_ KEYS_?
//                | WITHOUT_ UNIQUE_ KEYS_?
//            )?
//        )? (RETURNING_ type (FORMAT_ jsonRepresentation)?)? RPAREN_ # jsonObject
//        | JSON_ARRAY_ LPAREN_ (
//            jsonValueExpression (COMMA_ jsonValueExpression)* (NULL_ ON_ NULL_ | ABSENT_ ON_ NULL_)?
//        )? (RETURNING_ type (FORMAT_ jsonRepresentation)?)? RPAREN_ # jsonArray
        ;

string_
    : ESCAPED_STRING                     # escapedStringLiteral
//    | STRING_                             # basicStringLiteral
//    | UNICODE_STRING_ (UESCAPE_ STRING_)? # unicodeStringLiteral
    ;



comparisonOperator
    : EQ_
    | NEQ_
    | LT_
    | LTE_
    | GT_
    | GTE_
    ;

 booleanValue
     : TRUE_
     | FALSE_
     ;

qualifiedName
    : identifier (DOT_ identifier)*
    ;

identifier
    : IDENTIFIER_            # unquotedIdentifier
    | QUOTED_IDENTIFIER_     # quotedIdentifier
//    | nonReserved            # unquotedIdentifier
//    | BACKQUOTED_IDENTIFIER_ # backQuotedIdentifier
//    | DIGIT_IDENTIFIER_      # digitIdentifier
    ;

number
    : MINUS_? DECIMAL_VALUE_ # decimalLiteral
    | MINUS_? DOUBLE_VALUE_  # doubleLiteral
    | MINUS_? INTEGER_VALUE_ # integerLiteral
    ;

//
// Lucene
//


luceneSearchQuery
    : luceneDisjQuery+
    ;

luceneDisjQuery
    : luceneConjQuery (LUCENE_OR luceneConjQuery)*
    ;

luceneConjQuery
    : luceneModClause (LUCENE_AND luceneModClause)*
    ;

luceneModClause
    : luceneModifier? luceneClause
    ;

luceneModifier
    : PLUS_
    | MINUS_
    | LUCENE_NOT
    ;

luceneClause
    :  luceneTerm | luceneGroupingExpr
    ;

luceneFieldName
    : IDENTIFIER_
    ;

luceneGroupingExpr
    : LPAREN_ luceneSearchQuery RPAREN_
    ;

luceneTerm
    : (INTEGER_VALUE_ | DECIMAL_VALUE_ | DOUBLE_VALUE_)
    | LUCENE_TERM
    ;


//
// ISO8601
//

// number
int_
    : ISO_DIGIT+
    ;

dec
    : ISO_DIGIT+ ISO_FRACTION?
    ;

int2
    : ISO_DIGIT ISO_DIGIT
    ;

int3
    : ISO_DIGIT ISO_DIGIT ISO_DIGIT
    ;

int4
    : ISO_DIGIT ISO_DIGIT ISO_DIGIT ISO_DIGIT
    ;

//sint2p
//    : (ISO_PLUS | ISO_MINUS) ISO_DIGIT ISO_DIGIT+
//    ;
//
//sint4p
//    : (ISO_PLUS | ISO_MINUS) ISO_DIGIT ISO_DIGIT ISO_DIGIT ISO_DIGIT+
//    ;

dec2
    : ISO_DIGIT ISO_DIGIT ISO_FRACTION?
    ;

// datetime element
century
    : int2   # CompleteCentury
//    | sint2p # ExpandedCentury
    ;

year
    : int4   # CompleteYear
//    | sint4p # ExpandedYear
    ;

month
    : int2
    ;

day
    : int2
    ;

ordinalDay
    : int3
    ;

week
    : int2
    ;

weekDay
    : ISO_DIGIT
    ;

hour
    : int2
    ;

minute
    : int2
    ;

second
    : int2
    ;

hourFraction
    : dec2
    ;

minuteFraction
    : dec2
    ;

secondFraction
    : dec2
    ;

// ENTRYRULE 1926-08-17 4.1.2.2 & 4.1.2.4 a
calendarDate
    : calendarDateExtended
    ;

calendarDateExtended
    : year ISO_MINUS month ISO_MINUS day
    ;

// ENTRYRULE 1926-08 4.1.2.3 a & 4.1.2.4 b
specificMonthCalendarDate
    : year ISO_MINUS month
    ;

// ENTRYRULE 1926 4.1.2.3 b & 4.1.2.4 c
specificYearCalendarDate
    : year
    ;

// ENTRYRULE (any date precise to day)
datePrecise
    : datePreciseExtended
    ;

datePreciseExtended
    : calendarDateExtended
    ;

// ENTRYRULE (any date format)
date
    : dateBasic
    | dateExtended
    ;

dateBasic
    : specificMonthCalendarDate
    | specificYearCalendarDate
    ;

dateExtended
    : datePreciseExtended
    | specificMonthCalendarDate
    | specificYearCalendarDate
    ;

// ENTRYRULE 12:34:56.0721 4.2.2.2 & 4.2.2.4 a
localTimePrecise
    : localTimePreciseExtended
    ;

localTimePreciseExtended
    : hour ISO_COLON minute ISO_COLON secondFraction
    ;

// ENTRYRULE 12:34.5 4.2.2.3 a & 4.2.2.4 b
specificMinuteLocalTime
    : specificMinuteLocalTimeExtended
    ;

specificMinuteLocalTimeExtended
    : hour ISO_COLON minuteFraction
    ;

// ENTRYRULE 12.5 (12:30:00) 4.2.2.3.b & 4.2.2.4 c
specificHourLocalTime
    : hourFraction
    ;

// ENTRYRULE (time without T and timezone)
localTime
    : localTimeBasic
    | localTimeExtended
    ;

localTimeBasic
    : specificHourLocalTime
    ;

localTimeExtended
    : localTimePreciseExtended
    | specificMinuteLocalTimeExtended
    | specificHourLocalTime
    ;

// 4.2.4
timeZoneUtc
    : ISO_Z
    ;

// ENTRYRULE +08:00 4.2.5.1
timeZone
    : timeZoneBasic
    | timeZoneExtended
    ;

timeZoneBasic
    : ((ISO_PLUS | ISO_MINUS) hour minute?)
    | timeZoneUtc
    ;

timeZoneExtended
    : ((ISO_PLUS | ISO_MINUS) hour (COLON_ minute)?)
    | timeZoneUtc
    ;

// ENTRYRULE (time with timezone without T) 4.2.5.2
localTimeAndTimeZone
    : localTimeAndTimeZoneBasic
    | localTimeAndTimeZoneExtended
    ;

localTimeAndTimeZoneBasic
    : localTimeBasic timeZoneBasic
    ;

localTimeAndTimeZoneExtended
    : localTimeExtended timeZoneExtended
    ;

// ENTRYRULE (any time format)
time
    : ISO_T? localTime timeZone?
    ;

// ENTRYRULE 1957-10-05T01:28:34+06:00 4.3.2
datetimePrecise
    : datetimePreciseExtended
    ;

datetimePreciseExtended
    : calendarDateExtended ISO_T localTimePreciseExtended timeZoneExtended?
    ;

// ENTRYRULE (any datetime format)4.3.3
datetime
    : datetimeExtended
    ;

datetimeExtended
    : datePreciseExtended ISO_T localTimeExtended timeZoneExtended?
    ;

// try everything
// if you just want parse 1926-08-17T12:34:56+08:00
// use dateTimePrecise instead
// ENTRYRULE (everything)
iso:
    // put time before date, to mitigate confusion between century and hour
     time | date | datetime
    ;
