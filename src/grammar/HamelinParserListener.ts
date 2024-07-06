// Generated from ./src/grammar/HamelinParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { CompleteYearContext } from "./HamelinParser";
import { DecimalLiteralContext } from "./HamelinParser";
import { DoubleLiteralContext } from "./HamelinParser";
import { IntegerLiteralContext } from "./HamelinParser";
import { UnquotedIdentifierContext } from "./HamelinParser";
import { QuotedIdentifierContext } from "./HamelinParser";
import { ComparisonContext } from "./HamelinParser";
import { EscapedStringLiteralContext } from "./HamelinParser";
import { ValueExpressionDefaultContext } from "./HamelinParser";
import { ArithmeticBinaryContext } from "./HamelinParser";
import { NullLiteralContext } from "./HamelinParser";
import { NumericLiteralContext } from "./HamelinParser";
import { BooleanLiteralContext } from "./HamelinParser";
import { StringLiteralContext } from "./HamelinParser";
import { BinaryLiteralContext } from "./HamelinParser";
import { FunctionCallContext } from "./HamelinParser";
import { ColumnReferenceContext } from "./HamelinParser";
import { ParenthesizedExpressionContext } from "./HamelinParser";
import { PredicatedContext } from "./HamelinParser";
import { LogicalNotContext } from "./HamelinParser";
import { AndContext } from "./HamelinParser";
import { OrContext } from "./HamelinParser";
import { CompleteCenturyContext } from "./HamelinParser";
import { CommandsContext } from "./HamelinParser";
import { CommandContext } from "./HamelinParser";
import { From_commandContext } from "./HamelinParser";
import { From_command_nameContext } from "./HamelinParser";
import { Dataset_refContext } from "./HamelinParser";
import { Earliest_expressionContext } from "./HamelinParser";
import { Latest_expressionContext } from "./HamelinParser";
import { Search_commandContext } from "./HamelinParser";
import { Let_commandContext } from "./HamelinParser";
import { Parse_commandContext } from "./HamelinParser";
import { Parse_expressionsContext } from "./HamelinParser";
import { Limit_commandContext } from "./HamelinParser";
import { Fields_commandContext } from "./HamelinParser";
import { Field_namesContext } from "./HamelinParser";
import { ExpressionContext } from "./HamelinParser";
import { BooleanExpressionContext } from "./HamelinParser";
import { Predicate_Context } from "./HamelinParser";
import { ValueExpressionContext } from "./HamelinParser";
import { PrimaryExpressionContext } from "./HamelinParser";
import { String_Context } from "./HamelinParser";
import { ComparisonOperatorContext } from "./HamelinParser";
import { BooleanValueContext } from "./HamelinParser";
import { QualifiedNameContext } from "./HamelinParser";
import { IdentifierContext } from "./HamelinParser";
import { NumberContext } from "./HamelinParser";
import { LuceneSearchQueryContext } from "./HamelinParser";
import { LuceneDisjQueryContext } from "./HamelinParser";
import { LuceneConjQueryContext } from "./HamelinParser";
import { LuceneModClauseContext } from "./HamelinParser";
import { LuceneModifierContext } from "./HamelinParser";
import { LuceneClauseContext } from "./HamelinParser";
import { LuceneFieldNameContext } from "./HamelinParser";
import { LuceneGroupingExprContext } from "./HamelinParser";
import { LuceneTermContext } from "./HamelinParser";
import { Int_Context } from "./HamelinParser";
import { DecContext } from "./HamelinParser";
import { Int2Context } from "./HamelinParser";
import { Int3Context } from "./HamelinParser";
import { Int4Context } from "./HamelinParser";
import { Dec2Context } from "./HamelinParser";
import { CenturyContext } from "./HamelinParser";
import { YearContext } from "./HamelinParser";
import { MonthContext } from "./HamelinParser";
import { DayContext } from "./HamelinParser";
import { OrdinalDayContext } from "./HamelinParser";
import { WeekContext } from "./HamelinParser";
import { WeekDayContext } from "./HamelinParser";
import { HourContext } from "./HamelinParser";
import { MinuteContext } from "./HamelinParser";
import { SecondContext } from "./HamelinParser";
import { HourFractionContext } from "./HamelinParser";
import { MinuteFractionContext } from "./HamelinParser";
import { SecondFractionContext } from "./HamelinParser";
import { CalendarDateContext } from "./HamelinParser";
import { CalendarDateExtendedContext } from "./HamelinParser";
import { SpecificMonthCalendarDateContext } from "./HamelinParser";
import { SpecificYearCalendarDateContext } from "./HamelinParser";
import { DatePreciseContext } from "./HamelinParser";
import { DatePreciseExtendedContext } from "./HamelinParser";
import { DateContext } from "./HamelinParser";
import { DateBasicContext } from "./HamelinParser";
import { DateExtendedContext } from "./HamelinParser";
import { LocalTimePreciseContext } from "./HamelinParser";
import { LocalTimePreciseExtendedContext } from "./HamelinParser";
import { SpecificMinuteLocalTimeContext } from "./HamelinParser";
import { SpecificMinuteLocalTimeExtendedContext } from "./HamelinParser";
import { SpecificHourLocalTimeContext } from "./HamelinParser";
import { LocalTimeContext } from "./HamelinParser";
import { LocalTimeBasicContext } from "./HamelinParser";
import { LocalTimeExtendedContext } from "./HamelinParser";
import { TimeZoneUtcContext } from "./HamelinParser";
import { TimeZoneContext } from "./HamelinParser";
import { TimeZoneBasicContext } from "./HamelinParser";
import { TimeZoneExtendedContext } from "./HamelinParser";
import { LocalTimeAndTimeZoneContext } from "./HamelinParser";
import { LocalTimeAndTimeZoneBasicContext } from "./HamelinParser";
import { LocalTimeAndTimeZoneExtendedContext } from "./HamelinParser";
import { TimeContext } from "./HamelinParser";
import { DatetimePreciseContext } from "./HamelinParser";
import { DatetimePreciseExtendedContext } from "./HamelinParser";
import { DatetimeContext } from "./HamelinParser";
import { DatetimeExtendedContext } from "./HamelinParser";
import { IsoContext } from "./HamelinParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HamelinParser`.
 */
export interface HamelinParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `CompleteYear`
	 * labeled alternative in `HamelinParser.year`.
	 * @param ctx the parse tree
	 */
	enterCompleteYear?: (ctx: CompleteYearContext) => void;
	/**
	 * Exit a parse tree produced by the `CompleteYear`
	 * labeled alternative in `HamelinParser.year`.
	 * @param ctx the parse tree
	 */
	exitCompleteYear?: (ctx: CompleteYearContext) => void;

	/**
	 * Enter a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	enterDoubleLiteral?: (ctx: DoubleLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	exitDoubleLiteral?: (ctx: DoubleLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `integerLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `comparison`
	 * labeled alternative in `HamelinParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by the `comparison`
	 * labeled alternative in `HamelinParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by the `escapedStringLiteral`
	 * labeled alternative in `HamelinParser.string_`.
	 * @param ctx the parse tree
	 */
	enterEscapedStringLiteral?: (ctx: EscapedStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `escapedStringLiteral`
	 * labeled alternative in `HamelinParser.string_`.
	 * @param ctx the parse tree
	 */
	exitEscapedStringLiteral?: (ctx: EscapedStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;
	/**
	 * Exit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => void;

	/**
	 * Enter a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;
	/**
	 * Exit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => void;

	/**
	 * Enter a parse tree produced by the `nullLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `numericLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterNumericLiteral?: (ctx: NumericLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitNumericLiteral?: (ctx: NumericLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterBinaryLiteral?: (ctx: BinaryLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitBinaryLiteral?: (ctx: BinaryLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `columnReference`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterColumnReference?: (ctx: ColumnReferenceContext) => void;
	/**
	 * Exit a parse tree produced by the `columnReference`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitColumnReference?: (ctx: ColumnReferenceContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `predicated`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterPredicated?: (ctx: PredicatedContext) => void;
	/**
	 * Exit a parse tree produced by the `predicated`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitPredicated?: (ctx: PredicatedContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalNot`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalNot?: (ctx: LogicalNotContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalNot`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalNot?: (ctx: LogicalNotContext) => void;

	/**
	 * Enter a parse tree produced by the `and`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `and`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by the `or`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `or`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;

	/**
	 * Enter a parse tree produced by the `CompleteCentury`
	 * labeled alternative in `HamelinParser.century`.
	 * @param ctx the parse tree
	 */
	enterCompleteCentury?: (ctx: CompleteCenturyContext) => void;
	/**
	 * Exit a parse tree produced by the `CompleteCentury`
	 * labeled alternative in `HamelinParser.century`.
	 * @param ctx the parse tree
	 */
	exitCompleteCentury?: (ctx: CompleteCenturyContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.commands`.
	 * @param ctx the parse tree
	 */
	enterCommands?: (ctx: CommandsContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.commands`.
	 * @param ctx the parse tree
	 */
	exitCommands?: (ctx: CommandsContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.command`.
	 * @param ctx the parse tree
	 */
	enterCommand?: (ctx: CommandContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.command`.
	 * @param ctx the parse tree
	 */
	exitCommand?: (ctx: CommandContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.from_command`.
	 * @param ctx the parse tree
	 */
	enterFrom_command?: (ctx: From_commandContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.from_command`.
	 * @param ctx the parse tree
	 */
	exitFrom_command?: (ctx: From_commandContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.from_command_name`.
	 * @param ctx the parse tree
	 */
	enterFrom_command_name?: (ctx: From_command_nameContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.from_command_name`.
	 * @param ctx the parse tree
	 */
	exitFrom_command_name?: (ctx: From_command_nameContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.dataset_ref`.
	 * @param ctx the parse tree
	 */
	enterDataset_ref?: (ctx: Dataset_refContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.dataset_ref`.
	 * @param ctx the parse tree
	 */
	exitDataset_ref?: (ctx: Dataset_refContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.earliest_expression`.
	 * @param ctx the parse tree
	 */
	enterEarliest_expression?: (ctx: Earliest_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.earliest_expression`.
	 * @param ctx the parse tree
	 */
	exitEarliest_expression?: (ctx: Earliest_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.latest_expression`.
	 * @param ctx the parse tree
	 */
	enterLatest_expression?: (ctx: Latest_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.latest_expression`.
	 * @param ctx the parse tree
	 */
	exitLatest_expression?: (ctx: Latest_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.search_command`.
	 * @param ctx the parse tree
	 */
	enterSearch_command?: (ctx: Search_commandContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.search_command`.
	 * @param ctx the parse tree
	 */
	exitSearch_command?: (ctx: Search_commandContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.let_command`.
	 * @param ctx the parse tree
	 */
	enterLet_command?: (ctx: Let_commandContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.let_command`.
	 * @param ctx the parse tree
	 */
	exitLet_command?: (ctx: Let_commandContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.parse_command`.
	 * @param ctx the parse tree
	 */
	enterParse_command?: (ctx: Parse_commandContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.parse_command`.
	 * @param ctx the parse tree
	 */
	exitParse_command?: (ctx: Parse_commandContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.parse_expressions`.
	 * @param ctx the parse tree
	 */
	enterParse_expressions?: (ctx: Parse_expressionsContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.parse_expressions`.
	 * @param ctx the parse tree
	 */
	exitParse_expressions?: (ctx: Parse_expressionsContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.limit_command`.
	 * @param ctx the parse tree
	 */
	enterLimit_command?: (ctx: Limit_commandContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.limit_command`.
	 * @param ctx the parse tree
	 */
	exitLimit_command?: (ctx: Limit_commandContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.fields_command`.
	 * @param ctx the parse tree
	 */
	enterFields_command?: (ctx: Fields_commandContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.fields_command`.
	 * @param ctx the parse tree
	 */
	exitFields_command?: (ctx: Fields_commandContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.field_names`.
	 * @param ctx the parse tree
	 */
	enterField_names?: (ctx: Field_namesContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.field_names`.
	 * @param ctx the parse tree
	 */
	exitField_names?: (ctx: Field_namesContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.predicate_`.
	 * @param ctx the parse tree
	 */
	enterPredicate_?: (ctx: Predicate_Context) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.predicate_`.
	 * @param ctx the parse tree
	 */
	exitPredicate_?: (ctx: Predicate_Context) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	enterValueExpression?: (ctx: ValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 */
	exitValueExpression?: (ctx: ValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.string_`.
	 * @param ctx the parse tree
	 */
	enterString_?: (ctx: String_Context) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.string_`.
	 * @param ctx the parse tree
	 */
	exitString_?: (ctx: String_Context) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	enterBooleanValue?: (ctx: BooleanValueContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.booleanValue`.
	 * @param ctx the parse tree
	 */
	exitBooleanValue?: (ctx: BooleanValueContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	enterQualifiedName?: (ctx: QualifiedNameContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.qualifiedName`.
	 * @param ctx the parse tree
	 */
	exitQualifiedName?: (ctx: QualifiedNameContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneSearchQuery`.
	 * @param ctx the parse tree
	 */
	enterLuceneSearchQuery?: (ctx: LuceneSearchQueryContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneSearchQuery`.
	 * @param ctx the parse tree
	 */
	exitLuceneSearchQuery?: (ctx: LuceneSearchQueryContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneDisjQuery`.
	 * @param ctx the parse tree
	 */
	enterLuceneDisjQuery?: (ctx: LuceneDisjQueryContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneDisjQuery`.
	 * @param ctx the parse tree
	 */
	exitLuceneDisjQuery?: (ctx: LuceneDisjQueryContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneConjQuery`.
	 * @param ctx the parse tree
	 */
	enterLuceneConjQuery?: (ctx: LuceneConjQueryContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneConjQuery`.
	 * @param ctx the parse tree
	 */
	exitLuceneConjQuery?: (ctx: LuceneConjQueryContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneModClause`.
	 * @param ctx the parse tree
	 */
	enterLuceneModClause?: (ctx: LuceneModClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneModClause`.
	 * @param ctx the parse tree
	 */
	exitLuceneModClause?: (ctx: LuceneModClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneModifier`.
	 * @param ctx the parse tree
	 */
	enterLuceneModifier?: (ctx: LuceneModifierContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneModifier`.
	 * @param ctx the parse tree
	 */
	exitLuceneModifier?: (ctx: LuceneModifierContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneClause`.
	 * @param ctx the parse tree
	 */
	enterLuceneClause?: (ctx: LuceneClauseContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneClause`.
	 * @param ctx the parse tree
	 */
	exitLuceneClause?: (ctx: LuceneClauseContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneFieldName`.
	 * @param ctx the parse tree
	 */
	enterLuceneFieldName?: (ctx: LuceneFieldNameContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneFieldName`.
	 * @param ctx the parse tree
	 */
	exitLuceneFieldName?: (ctx: LuceneFieldNameContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneGroupingExpr`.
	 * @param ctx the parse tree
	 */
	enterLuceneGroupingExpr?: (ctx: LuceneGroupingExprContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneGroupingExpr`.
	 * @param ctx the parse tree
	 */
	exitLuceneGroupingExpr?: (ctx: LuceneGroupingExprContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.luceneTerm`.
	 * @param ctx the parse tree
	 */
	enterLuceneTerm?: (ctx: LuceneTermContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.luceneTerm`.
	 * @param ctx the parse tree
	 */
	exitLuceneTerm?: (ctx: LuceneTermContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.int_`.
	 * @param ctx the parse tree
	 */
	enterInt_?: (ctx: Int_Context) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.int_`.
	 * @param ctx the parse tree
	 */
	exitInt_?: (ctx: Int_Context) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.dec`.
	 * @param ctx the parse tree
	 */
	enterDec?: (ctx: DecContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.dec`.
	 * @param ctx the parse tree
	 */
	exitDec?: (ctx: DecContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.int2`.
	 * @param ctx the parse tree
	 */
	enterInt2?: (ctx: Int2Context) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.int2`.
	 * @param ctx the parse tree
	 */
	exitInt2?: (ctx: Int2Context) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.int3`.
	 * @param ctx the parse tree
	 */
	enterInt3?: (ctx: Int3Context) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.int3`.
	 * @param ctx the parse tree
	 */
	exitInt3?: (ctx: Int3Context) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.int4`.
	 * @param ctx the parse tree
	 */
	enterInt4?: (ctx: Int4Context) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.int4`.
	 * @param ctx the parse tree
	 */
	exitInt4?: (ctx: Int4Context) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.dec2`.
	 * @param ctx the parse tree
	 */
	enterDec2?: (ctx: Dec2Context) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.dec2`.
	 * @param ctx the parse tree
	 */
	exitDec2?: (ctx: Dec2Context) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.century`.
	 * @param ctx the parse tree
	 */
	enterCentury?: (ctx: CenturyContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.century`.
	 * @param ctx the parse tree
	 */
	exitCentury?: (ctx: CenturyContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.year`.
	 * @param ctx the parse tree
	 */
	enterYear?: (ctx: YearContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.year`.
	 * @param ctx the parse tree
	 */
	exitYear?: (ctx: YearContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.month`.
	 * @param ctx the parse tree
	 */
	enterMonth?: (ctx: MonthContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.month`.
	 * @param ctx the parse tree
	 */
	exitMonth?: (ctx: MonthContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.day`.
	 * @param ctx the parse tree
	 */
	enterDay?: (ctx: DayContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.day`.
	 * @param ctx the parse tree
	 */
	exitDay?: (ctx: DayContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.ordinalDay`.
	 * @param ctx the parse tree
	 */
	enterOrdinalDay?: (ctx: OrdinalDayContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.ordinalDay`.
	 * @param ctx the parse tree
	 */
	exitOrdinalDay?: (ctx: OrdinalDayContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.week`.
	 * @param ctx the parse tree
	 */
	enterWeek?: (ctx: WeekContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.week`.
	 * @param ctx the parse tree
	 */
	exitWeek?: (ctx: WeekContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.weekDay`.
	 * @param ctx the parse tree
	 */
	enterWeekDay?: (ctx: WeekDayContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.weekDay`.
	 * @param ctx the parse tree
	 */
	exitWeekDay?: (ctx: WeekDayContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.hour`.
	 * @param ctx the parse tree
	 */
	enterHour?: (ctx: HourContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.hour`.
	 * @param ctx the parse tree
	 */
	exitHour?: (ctx: HourContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.minute`.
	 * @param ctx the parse tree
	 */
	enterMinute?: (ctx: MinuteContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.minute`.
	 * @param ctx the parse tree
	 */
	exitMinute?: (ctx: MinuteContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.second`.
	 * @param ctx the parse tree
	 */
	enterSecond?: (ctx: SecondContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.second`.
	 * @param ctx the parse tree
	 */
	exitSecond?: (ctx: SecondContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.hourFraction`.
	 * @param ctx the parse tree
	 */
	enterHourFraction?: (ctx: HourFractionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.hourFraction`.
	 * @param ctx the parse tree
	 */
	exitHourFraction?: (ctx: HourFractionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.minuteFraction`.
	 * @param ctx the parse tree
	 */
	enterMinuteFraction?: (ctx: MinuteFractionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.minuteFraction`.
	 * @param ctx the parse tree
	 */
	exitMinuteFraction?: (ctx: MinuteFractionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.secondFraction`.
	 * @param ctx the parse tree
	 */
	enterSecondFraction?: (ctx: SecondFractionContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.secondFraction`.
	 * @param ctx the parse tree
	 */
	exitSecondFraction?: (ctx: SecondFractionContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.calendarDate`.
	 * @param ctx the parse tree
	 */
	enterCalendarDate?: (ctx: CalendarDateContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.calendarDate`.
	 * @param ctx the parse tree
	 */
	exitCalendarDate?: (ctx: CalendarDateContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.calendarDateExtended`.
	 * @param ctx the parse tree
	 */
	enterCalendarDateExtended?: (ctx: CalendarDateExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.calendarDateExtended`.
	 * @param ctx the parse tree
	 */
	exitCalendarDateExtended?: (ctx: CalendarDateExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.specificMonthCalendarDate`.
	 * @param ctx the parse tree
	 */
	enterSpecificMonthCalendarDate?: (ctx: SpecificMonthCalendarDateContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.specificMonthCalendarDate`.
	 * @param ctx the parse tree
	 */
	exitSpecificMonthCalendarDate?: (ctx: SpecificMonthCalendarDateContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.specificYearCalendarDate`.
	 * @param ctx the parse tree
	 */
	enterSpecificYearCalendarDate?: (ctx: SpecificYearCalendarDateContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.specificYearCalendarDate`.
	 * @param ctx the parse tree
	 */
	exitSpecificYearCalendarDate?: (ctx: SpecificYearCalendarDateContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.datePrecise`.
	 * @param ctx the parse tree
	 */
	enterDatePrecise?: (ctx: DatePreciseContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.datePrecise`.
	 * @param ctx the parse tree
	 */
	exitDatePrecise?: (ctx: DatePreciseContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.datePreciseExtended`.
	 * @param ctx the parse tree
	 */
	enterDatePreciseExtended?: (ctx: DatePreciseExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.datePreciseExtended`.
	 * @param ctx the parse tree
	 */
	exitDatePreciseExtended?: (ctx: DatePreciseExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.date`.
	 * @param ctx the parse tree
	 */
	enterDate?: (ctx: DateContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.date`.
	 * @param ctx the parse tree
	 */
	exitDate?: (ctx: DateContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.dateBasic`.
	 * @param ctx the parse tree
	 */
	enterDateBasic?: (ctx: DateBasicContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.dateBasic`.
	 * @param ctx the parse tree
	 */
	exitDateBasic?: (ctx: DateBasicContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.dateExtended`.
	 * @param ctx the parse tree
	 */
	enterDateExtended?: (ctx: DateExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.dateExtended`.
	 * @param ctx the parse tree
	 */
	exitDateExtended?: (ctx: DateExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTimePrecise`.
	 * @param ctx the parse tree
	 */
	enterLocalTimePrecise?: (ctx: LocalTimePreciseContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTimePrecise`.
	 * @param ctx the parse tree
	 */
	exitLocalTimePrecise?: (ctx: LocalTimePreciseContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTimePreciseExtended`.
	 * @param ctx the parse tree
	 */
	enterLocalTimePreciseExtended?: (ctx: LocalTimePreciseExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTimePreciseExtended`.
	 * @param ctx the parse tree
	 */
	exitLocalTimePreciseExtended?: (ctx: LocalTimePreciseExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.specificMinuteLocalTime`.
	 * @param ctx the parse tree
	 */
	enterSpecificMinuteLocalTime?: (ctx: SpecificMinuteLocalTimeContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.specificMinuteLocalTime`.
	 * @param ctx the parse tree
	 */
	exitSpecificMinuteLocalTime?: (ctx: SpecificMinuteLocalTimeContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.specificMinuteLocalTimeExtended`.
	 * @param ctx the parse tree
	 */
	enterSpecificMinuteLocalTimeExtended?: (ctx: SpecificMinuteLocalTimeExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.specificMinuteLocalTimeExtended`.
	 * @param ctx the parse tree
	 */
	exitSpecificMinuteLocalTimeExtended?: (ctx: SpecificMinuteLocalTimeExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.specificHourLocalTime`.
	 * @param ctx the parse tree
	 */
	enterSpecificHourLocalTime?: (ctx: SpecificHourLocalTimeContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.specificHourLocalTime`.
	 * @param ctx the parse tree
	 */
	exitSpecificHourLocalTime?: (ctx: SpecificHourLocalTimeContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTime`.
	 * @param ctx the parse tree
	 */
	enterLocalTime?: (ctx: LocalTimeContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTime`.
	 * @param ctx the parse tree
	 */
	exitLocalTime?: (ctx: LocalTimeContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTimeBasic`.
	 * @param ctx the parse tree
	 */
	enterLocalTimeBasic?: (ctx: LocalTimeBasicContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTimeBasic`.
	 * @param ctx the parse tree
	 */
	exitLocalTimeBasic?: (ctx: LocalTimeBasicContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTimeExtended`.
	 * @param ctx the parse tree
	 */
	enterLocalTimeExtended?: (ctx: LocalTimeExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTimeExtended`.
	 * @param ctx the parse tree
	 */
	exitLocalTimeExtended?: (ctx: LocalTimeExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.timeZoneUtc`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneUtc?: (ctx: TimeZoneUtcContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.timeZoneUtc`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneUtc?: (ctx: TimeZoneUtcContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.timeZone`.
	 * @param ctx the parse tree
	 */
	enterTimeZone?: (ctx: TimeZoneContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.timeZone`.
	 * @param ctx the parse tree
	 */
	exitTimeZone?: (ctx: TimeZoneContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.timeZoneBasic`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneBasic?: (ctx: TimeZoneBasicContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.timeZoneBasic`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneBasic?: (ctx: TimeZoneBasicContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.timeZoneExtended`.
	 * @param ctx the parse tree
	 */
	enterTimeZoneExtended?: (ctx: TimeZoneExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.timeZoneExtended`.
	 * @param ctx the parse tree
	 */
	exitTimeZoneExtended?: (ctx: TimeZoneExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTimeAndTimeZone`.
	 * @param ctx the parse tree
	 */
	enterLocalTimeAndTimeZone?: (ctx: LocalTimeAndTimeZoneContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTimeAndTimeZone`.
	 * @param ctx the parse tree
	 */
	exitLocalTimeAndTimeZone?: (ctx: LocalTimeAndTimeZoneContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTimeAndTimeZoneBasic`.
	 * @param ctx the parse tree
	 */
	enterLocalTimeAndTimeZoneBasic?: (ctx: LocalTimeAndTimeZoneBasicContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTimeAndTimeZoneBasic`.
	 * @param ctx the parse tree
	 */
	exitLocalTimeAndTimeZoneBasic?: (ctx: LocalTimeAndTimeZoneBasicContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.localTimeAndTimeZoneExtended`.
	 * @param ctx the parse tree
	 */
	enterLocalTimeAndTimeZoneExtended?: (ctx: LocalTimeAndTimeZoneExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.localTimeAndTimeZoneExtended`.
	 * @param ctx the parse tree
	 */
	exitLocalTimeAndTimeZoneExtended?: (ctx: LocalTimeAndTimeZoneExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.time`.
	 * @param ctx the parse tree
	 */
	enterTime?: (ctx: TimeContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.time`.
	 * @param ctx the parse tree
	 */
	exitTime?: (ctx: TimeContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.datetimePrecise`.
	 * @param ctx the parse tree
	 */
	enterDatetimePrecise?: (ctx: DatetimePreciseContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.datetimePrecise`.
	 * @param ctx the parse tree
	 */
	exitDatetimePrecise?: (ctx: DatetimePreciseContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.datetimePreciseExtended`.
	 * @param ctx the parse tree
	 */
	enterDatetimePreciseExtended?: (ctx: DatetimePreciseExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.datetimePreciseExtended`.
	 * @param ctx the parse tree
	 */
	exitDatetimePreciseExtended?: (ctx: DatetimePreciseExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.datetime`.
	 * @param ctx the parse tree
	 */
	enterDatetime?: (ctx: DatetimeContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.datetime`.
	 * @param ctx the parse tree
	 */
	exitDatetime?: (ctx: DatetimeContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.datetimeExtended`.
	 * @param ctx the parse tree
	 */
	enterDatetimeExtended?: (ctx: DatetimeExtendedContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.datetimeExtended`.
	 * @param ctx the parse tree
	 */
	exitDatetimeExtended?: (ctx: DatetimeExtendedContext) => void;

	/**
	 * Enter a parse tree produced by `HamelinParser.iso`.
	 * @param ctx the parse tree
	 */
	enterIso?: (ctx: IsoContext) => void;
	/**
	 * Exit a parse tree produced by `HamelinParser.iso`.
	 * @param ctx the parse tree
	 */
	exitIso?: (ctx: IsoContext) => void;
}

