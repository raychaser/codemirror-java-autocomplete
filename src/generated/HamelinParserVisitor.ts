// Generated from ./src/grammar/HamelinParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HamelinParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HamelinParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `CompleteYear`
	 * labeled alternative in `HamelinParser.year`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompleteYear?: (ctx: CompleteYearContext) => Result;

	/**
	 * Visit a parse tree produced by the `decimalLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `doubleLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoubleLiteral?: (ctx: DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `integerLiteral`
	 * labeled alternative in `HamelinParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegerLiteral?: (ctx: IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `unquotedIdentifier`
	 * labeled alternative in `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnquotedIdentifier?: (ctx: UnquotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `quotedIdentifier`
	 * labeled alternative in `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuotedIdentifier?: (ctx: QuotedIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `comparison`
	 * labeled alternative in `HamelinParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by the `escapedStringLiteral`
	 * labeled alternative in `HamelinParser.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEscapedStringLiteral?: (ctx: EscapedStringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueExpressionDefault`
	 * labeled alternative in `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpressionDefault?: (ctx: ValueExpressionDefaultContext) => Result;

	/**
	 * Visit a parse tree produced by the `arithmeticBinary`
	 * labeled alternative in `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticBinary?: (ctx: ArithmeticBinaryContext) => Result;

	/**
	 * Visit a parse tree produced by the `nullLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNullLiteral?: (ctx: NullLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `numericLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericLiteral?: (ctx: NumericLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryLiteral`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryLiteral?: (ctx: BinaryLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `columnReference`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnReference?: (ctx: ColumnReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesizedExpression`
	 * labeled alternative in `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `predicated`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicated?: (ctx: PredicatedContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalNot`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalNot?: (ctx: LogicalNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `and`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd?: (ctx: AndContext) => Result;

	/**
	 * Visit a parse tree produced by the `or`
	 * labeled alternative in `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr?: (ctx: OrContext) => Result;

	/**
	 * Visit a parse tree produced by the `CompleteCentury`
	 * labeled alternative in `HamelinParser.century`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompleteCentury?: (ctx: CompleteCenturyContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.commands`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommands?: (ctx: CommandsContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommand?: (ctx: CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.from_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_command?: (ctx: From_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.from_command_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrom_command_name?: (ctx: From_command_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.dataset_ref`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataset_ref?: (ctx: Dataset_refContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.earliest_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEarliest_expression?: (ctx: Earliest_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.latest_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLatest_expression?: (ctx: Latest_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.search_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch_command?: (ctx: Search_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.let_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLet_command?: (ctx: Let_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.parse_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_command?: (ctx: Parse_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.parse_expressions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParse_expressions?: (ctx: Parse_expressionsContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.limit_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimit_command?: (ctx: Limit_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.fields_command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFields_command?: (ctx: Fields_commandContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.field_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitField_names?: (ctx: Field_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.predicate_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate_?: (ctx: Predicate_Context) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.valueExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueExpression?: (ctx: ValueExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.string_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString_?: (ctx: String_Context) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.booleanValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanValue?: (ctx: BooleanValueContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.qualifiedName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQualifiedName?: (ctx: QualifiedNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneSearchQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneSearchQuery?: (ctx: LuceneSearchQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneDisjQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneDisjQuery?: (ctx: LuceneDisjQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneConjQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneConjQuery?: (ctx: LuceneConjQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneModClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneModClause?: (ctx: LuceneModClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneModifier?: (ctx: LuceneModifierContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneClause?: (ctx: LuceneClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneFieldName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneFieldName?: (ctx: LuceneFieldNameContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneGroupingExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneGroupingExpr?: (ctx: LuceneGroupingExprContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.luceneTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLuceneTerm?: (ctx: LuceneTermContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.int_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt_?: (ctx: Int_Context) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDec?: (ctx: DecContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.int2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt2?: (ctx: Int2Context) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.int3`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt3?: (ctx: Int3Context) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.int4`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt4?: (ctx: Int4Context) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.dec2`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDec2?: (ctx: Dec2Context) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.century`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCentury?: (ctx: CenturyContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.year`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYear?: (ctx: YearContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.month`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMonth?: (ctx: MonthContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.day`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDay?: (ctx: DayContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.ordinalDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinalDay?: (ctx: OrdinalDayContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.week`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeek?: (ctx: WeekContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.weekDay`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWeekDay?: (ctx: WeekDayContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.hour`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHour?: (ctx: HourContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.minute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinute?: (ctx: MinuteContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.second`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecond?: (ctx: SecondContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.hourFraction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHourFraction?: (ctx: HourFractionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.minuteFraction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMinuteFraction?: (ctx: MinuteFractionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.secondFraction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecondFraction?: (ctx: SecondFractionContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.calendarDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalendarDate?: (ctx: CalendarDateContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.calendarDateExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalendarDateExtended?: (ctx: CalendarDateExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.specificMonthCalendarDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificMonthCalendarDate?: (ctx: SpecificMonthCalendarDateContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.specificYearCalendarDate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificYearCalendarDate?: (ctx: SpecificYearCalendarDateContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.datePrecise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatePrecise?: (ctx: DatePreciseContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.datePreciseExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatePreciseExtended?: (ctx: DatePreciseExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.date`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate?: (ctx: DateContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.dateBasic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateBasic?: (ctx: DateBasicContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.dateExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateExtended?: (ctx: DateExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTimePrecise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimePrecise?: (ctx: LocalTimePreciseContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTimePreciseExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimePreciseExtended?: (ctx: LocalTimePreciseExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.specificMinuteLocalTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificMinuteLocalTime?: (ctx: SpecificMinuteLocalTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.specificMinuteLocalTimeExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificMinuteLocalTimeExtended?: (ctx: SpecificMinuteLocalTimeExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.specificHourLocalTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpecificHourLocalTime?: (ctx: SpecificHourLocalTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTime?: (ctx: LocalTimeContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTimeBasic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimeBasic?: (ctx: LocalTimeBasicContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTimeExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimeExtended?: (ctx: LocalTimeExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.timeZoneUtc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneUtc?: (ctx: TimeZoneUtcContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.timeZone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZone?: (ctx: TimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.timeZoneBasic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneBasic?: (ctx: TimeZoneBasicContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.timeZoneExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeZoneExtended?: (ctx: TimeZoneExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTimeAndTimeZone`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimeAndTimeZone?: (ctx: LocalTimeAndTimeZoneContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTimeAndTimeZoneBasic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimeAndTimeZoneBasic?: (ctx: LocalTimeAndTimeZoneBasicContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.localTimeAndTimeZoneExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalTimeAndTimeZoneExtended?: (ctx: LocalTimeAndTimeZoneExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.datetimePrecise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetimePrecise?: (ctx: DatetimePreciseContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.datetimePreciseExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetimePreciseExtended?: (ctx: DatetimePreciseExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.datetime`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetime?: (ctx: DatetimeContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.datetimeExtended`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatetimeExtended?: (ctx: DatetimeExtendedContext) => Result;

	/**
	 * Visit a parse tree produced by `HamelinParser.iso`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIso?: (ctx: IsoContext) => Result;
}

