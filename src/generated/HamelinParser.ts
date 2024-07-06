// Generated from ./src/grammar/HamelinParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HamelinParserListener } from "./HamelinParserListener";
import { HamelinParserVisitor } from "./HamelinParserVisitor";


export class HamelinParser extends Parser {
	public static readonly FROM_COMMAND = 1;
	public static readonly SEARCH_COMMAND = 2;
	public static readonly LET_COMMAND = 3;
	public static readonly PARSE_COMMAND = 4;
	public static readonly LIMIT_COMMAND = 5;
	public static readonly FIELDS_COMMAND = 6;
	public static readonly ANCHOR_KEYWORD = 7;
	public static readonly REGEX_KEYWORD = 8;
	public static readonly AS_KEYWORD = 9;
	public static readonly PIPE_ = 10;
	public static readonly AND_ = 11;
	public static readonly FALSE_ = 12;
	public static readonly LIMIT_ = 13;
	public static readonly NOT_ = 14;
	public static readonly NULL_ = 15;
	public static readonly OR_ = 16;
	public static readonly TRUE_ = 17;
	public static readonly EQ_ = 18;
	public static readonly NEQ_ = 19;
	public static readonly LT_ = 20;
	public static readonly LTE_ = 21;
	public static readonly GT_ = 22;
	public static readonly GTE_ = 23;
	public static readonly PLUS_ = 24;
	public static readonly MINUS_ = 25;
	public static readonly ASTERISK_ = 26;
	public static readonly SLASH_ = 27;
	public static readonly PERCENT_ = 28;
	public static readonly CONCAT_ = 29;
	public static readonly QUESTION_MARK_ = 30;
	public static readonly SEMICOLON_ = 31;
	public static readonly DOT_ = 32;
	public static readonly COLON_ = 33;
	public static readonly COMMA_ = 34;
	public static readonly LPAREN_ = 35;
	public static readonly RPAREN_ = 36;
	public static readonly LSQUARE_ = 37;
	public static readonly RSQUARE_ = 38;
	public static readonly LCURLY_ = 39;
	public static readonly RCURLY_ = 40;
	public static readonly LARROW_ = 41;
	public static readonly RARROW_ = 42;
	public static readonly RDOUBLEARROW_ = 43;
	public static readonly DOLLAR_ = 44;
	public static readonly CARET_ = 45;
	public static readonly ESCAPED_STRING = 46;
	public static readonly STRING_ = 47;
	public static readonly UNICODE_STRING_ = 48;
	public static readonly BINARY_LITERAL_ = 49;
	public static readonly INTEGER_VALUE_ = 50;
	public static readonly DECIMAL_VALUE_ = 51;
	public static readonly DOUBLE_VALUE_ = 52;
	public static readonly IDENTIFIER_ = 53;
	public static readonly QUOTED_IDENTIFIER_ = 54;
	public static readonly UNDERSCORE_ = 55;
	public static readonly SIMPLE_COMMENT_ = 56;
	public static readonly WS_ = 57;
	public static readonly UNRECOGNIZED_ = 58;
	public static readonly LUCENE_PIPE = 59;
	public static readonly LUCENE_AND = 60;
	public static readonly LUCENE_OR = 61;
	public static readonly LUCENE_NOT = 62;
	public static readonly LUCENE_PLUS = 63;
	public static readonly LUCENE_MINUS = 64;
	public static readonly LUCENE_LPAREN = 65;
	public static readonly LUCENE_RPAREN = 66;
	public static readonly LUCENE_OP_COLON = 67;
	public static readonly LUCENE_OP_EQUAL = 68;
	public static readonly LUCENE_OP_LESSTHAN = 69;
	public static readonly LUCENE_OP_LESSTHANEQ = 70;
	public static readonly LUCENE_OP_MORETHAN = 71;
	public static readonly LUCENE_OP_MORETHANEQ = 72;
	public static readonly LUCENE_CARAT = 73;
	public static readonly LUCENE_TILDE = 74;
	public static readonly LUCENE_QUOTED = 75;
	public static readonly LUCENE_NUMBER = 76;
	public static readonly LUCENE_TERM = 77;
	public static readonly LUCENE_REGEXPTERM = 78;
	public static readonly LUCENE_DEFAULT_SKIP = 79;
	public static readonly LUCENE_UNKNOWN = 80;
	public static readonly FROM_PIPE = 81;
	public static readonly FROM_RELATIVE_TIME_EXPRESSION = 82;
	public static readonly TIME_UNIT = 83;
	public static readonly TIME_SECOND = 84;
	public static readonly TIME_MINUTE = 85;
	public static readonly TIME_HOUR = 86;
	public static readonly TIME_DAY = 87;
	public static readonly TIME_WEEK = 88;
	public static readonly TIME_MONTH = 89;
	public static readonly TIME_QUARTER = 90;
	public static readonly TIME_YEAR = 91;
	public static readonly FROM_IDENTIFIER = 92;
	public static readonly ISO_T = 93;
	public static readonly ISO_Z = 94;
	public static readonly ISO_W = 95;
	public static readonly ISO_P = 96;
	public static readonly ISO_PLUS = 97;
	public static readonly ISO_MINUS = 98;
	public static readonly ISO_COLON = 99;
	public static readonly ISO_DIGIT = 100;
	public static readonly ISO_FRACTION = 101;
	public static readonly FROM_LETTER = 102;
	public static readonly FROM_UNDERSCORE = 103;
	public static readonly FROM_DIGIT = 104;
	public static readonly ISO_DEFAULT_SKIP = 105;
	public static readonly ISO_UNKNOWN = 106;
	public static readonly RULE_commands = 0;
	public static readonly RULE_command = 1;
	public static readonly RULE_from_command = 2;
	public static readonly RULE_from_command_name = 3;
	public static readonly RULE_dataset_ref = 4;
	public static readonly RULE_earliest_expression = 5;
	public static readonly RULE_latest_expression = 6;
	public static readonly RULE_search_command = 7;
	public static readonly RULE_let_command = 8;
	public static readonly RULE_parse_command = 9;
	public static readonly RULE_parse_expressions = 10;
	public static readonly RULE_limit_command = 11;
	public static readonly RULE_fields_command = 12;
	public static readonly RULE_field_names = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_booleanExpression = 15;
	public static readonly RULE_predicate_ = 16;
	public static readonly RULE_valueExpression = 17;
	public static readonly RULE_primaryExpression = 18;
	public static readonly RULE_string_ = 19;
	public static readonly RULE_comparisonOperator = 20;
	public static readonly RULE_booleanValue = 21;
	public static readonly RULE_qualifiedName = 22;
	public static readonly RULE_identifier = 23;
	public static readonly RULE_number = 24;
	public static readonly RULE_luceneSearchQuery = 25;
	public static readonly RULE_luceneDisjQuery = 26;
	public static readonly RULE_luceneConjQuery = 27;
	public static readonly RULE_luceneModClause = 28;
	public static readonly RULE_luceneModifier = 29;
	public static readonly RULE_luceneClause = 30;
	public static readonly RULE_luceneFieldName = 31;
	public static readonly RULE_luceneGroupingExpr = 32;
	public static readonly RULE_luceneTerm = 33;
	public static readonly RULE_int_ = 34;
	public static readonly RULE_dec = 35;
	public static readonly RULE_int2 = 36;
	public static readonly RULE_int3 = 37;
	public static readonly RULE_int4 = 38;
	public static readonly RULE_dec2 = 39;
	public static readonly RULE_century = 40;
	public static readonly RULE_year = 41;
	public static readonly RULE_month = 42;
	public static readonly RULE_day = 43;
	public static readonly RULE_ordinalDay = 44;
	public static readonly RULE_week = 45;
	public static readonly RULE_weekDay = 46;
	public static readonly RULE_hour = 47;
	public static readonly RULE_minute = 48;
	public static readonly RULE_second = 49;
	public static readonly RULE_hourFraction = 50;
	public static readonly RULE_minuteFraction = 51;
	public static readonly RULE_secondFraction = 52;
	public static readonly RULE_calendarDate = 53;
	public static readonly RULE_calendarDateExtended = 54;
	public static readonly RULE_specificMonthCalendarDate = 55;
	public static readonly RULE_specificYearCalendarDate = 56;
	public static readonly RULE_datePrecise = 57;
	public static readonly RULE_datePreciseExtended = 58;
	public static readonly RULE_date = 59;
	public static readonly RULE_dateBasic = 60;
	public static readonly RULE_dateExtended = 61;
	public static readonly RULE_localTimePrecise = 62;
	public static readonly RULE_localTimePreciseExtended = 63;
	public static readonly RULE_specificMinuteLocalTime = 64;
	public static readonly RULE_specificMinuteLocalTimeExtended = 65;
	public static readonly RULE_specificHourLocalTime = 66;
	public static readonly RULE_localTime = 67;
	public static readonly RULE_localTimeBasic = 68;
	public static readonly RULE_localTimeExtended = 69;
	public static readonly RULE_timeZoneUtc = 70;
	public static readonly RULE_timeZone = 71;
	public static readonly RULE_timeZoneBasic = 72;
	public static readonly RULE_timeZoneExtended = 73;
	public static readonly RULE_localTimeAndTimeZone = 74;
	public static readonly RULE_localTimeAndTimeZoneBasic = 75;
	public static readonly RULE_localTimeAndTimeZoneExtended = 76;
	public static readonly RULE_time = 77;
	public static readonly RULE_datetimePrecise = 78;
	public static readonly RULE_datetimePreciseExtended = 79;
	public static readonly RULE_datetime = 80;
	public static readonly RULE_datetimeExtended = 81;
	public static readonly RULE_iso = 82;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"commands", "command", "from_command", "from_command_name", "dataset_ref", 
		"earliest_expression", "latest_expression", "search_command", "let_command", 
		"parse_command", "parse_expressions", "limit_command", "fields_command", 
		"field_names", "expression", "booleanExpression", "predicate_", "valueExpression", 
		"primaryExpression", "string_", "comparisonOperator", "booleanValue", 
		"qualifiedName", "identifier", "number", "luceneSearchQuery", "luceneDisjQuery", 
		"luceneConjQuery", "luceneModClause", "luceneModifier", "luceneClause", 
		"luceneFieldName", "luceneGroupingExpr", "luceneTerm", "int_", "dec", 
		"int2", "int3", "int4", "dec2", "century", "year", "month", "day", "ordinalDay", 
		"week", "weekDay", "hour", "minute", "second", "hourFraction", "minuteFraction", 
		"secondFraction", "calendarDate", "calendarDateExtended", "specificMonthCalendarDate", 
		"specificYearCalendarDate", "datePrecise", "datePreciseExtended", "date", 
		"dateBasic", "dateExtended", "localTimePrecise", "localTimePreciseExtended", 
		"specificMinuteLocalTime", "specificMinuteLocalTimeExtended", "specificHourLocalTime", 
		"localTime", "localTimeBasic", "localTimeExtended", "timeZoneUtc", "timeZone", 
		"timeZoneBasic", "timeZoneExtended", "localTimeAndTimeZone", "localTimeAndTimeZoneBasic", 
		"localTimeAndTimeZoneExtended", "time", "datetimePrecise", "datetimePreciseExtended", 
		"datetime", "datetimeExtended", "iso",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "'AND'", "'FALSE'", "'LIMIT'", 
		"'NOT'", "'NULL'", "'OR'", "'TRUE'", undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'*'", "'/'", "'%'", 
		"'||'", "'?'", "';'", "'.'", "'_:'", "','", undefined, undefined, "'['", 
		"']'", "'{'", "'}'", "'<-'", "'->'", "'=>'", "'$'", undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'_'", undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'~'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "FROM_COMMAND", "SEARCH_COMMAND", "LET_COMMAND", "PARSE_COMMAND", 
		"LIMIT_COMMAND", "FIELDS_COMMAND", "ANCHOR_KEYWORD", "REGEX_KEYWORD", 
		"AS_KEYWORD", "PIPE_", "AND_", "FALSE_", "LIMIT_", "NOT_", "NULL_", "OR_", 
		"TRUE_", "EQ_", "NEQ_", "LT_", "LTE_", "GT_", "GTE_", "PLUS_", "MINUS_", 
		"ASTERISK_", "SLASH_", "PERCENT_", "CONCAT_", "QUESTION_MARK_", "SEMICOLON_", 
		"DOT_", "COLON_", "COMMA_", "LPAREN_", "RPAREN_", "LSQUARE_", "RSQUARE_", 
		"LCURLY_", "RCURLY_", "LARROW_", "RARROW_", "RDOUBLEARROW_", "DOLLAR_", 
		"CARET_", "ESCAPED_STRING", "STRING_", "UNICODE_STRING_", "BINARY_LITERAL_", 
		"INTEGER_VALUE_", "DECIMAL_VALUE_", "DOUBLE_VALUE_", "IDENTIFIER_", "QUOTED_IDENTIFIER_", 
		"UNDERSCORE_", "SIMPLE_COMMENT_", "WS_", "UNRECOGNIZED_", "LUCENE_PIPE", 
		"LUCENE_AND", "LUCENE_OR", "LUCENE_NOT", "LUCENE_PLUS", "LUCENE_MINUS", 
		"LUCENE_LPAREN", "LUCENE_RPAREN", "LUCENE_OP_COLON", "LUCENE_OP_EQUAL", 
		"LUCENE_OP_LESSTHAN", "LUCENE_OP_LESSTHANEQ", "LUCENE_OP_MORETHAN", "LUCENE_OP_MORETHANEQ", 
		"LUCENE_CARAT", "LUCENE_TILDE", "LUCENE_QUOTED", "LUCENE_NUMBER", "LUCENE_TERM", 
		"LUCENE_REGEXPTERM", "LUCENE_DEFAULT_SKIP", "LUCENE_UNKNOWN", "FROM_PIPE", 
		"FROM_RELATIVE_TIME_EXPRESSION", "TIME_UNIT", "TIME_SECOND", "TIME_MINUTE", 
		"TIME_HOUR", "TIME_DAY", "TIME_WEEK", "TIME_MONTH", "TIME_QUARTER", "TIME_YEAR", 
		"FROM_IDENTIFIER", "ISO_T", "ISO_Z", "ISO_W", "ISO_P", "ISO_PLUS", "ISO_MINUS", 
		"ISO_COLON", "ISO_DIGIT", "ISO_FRACTION", "FROM_LETTER", "FROM_UNDERSCORE", 
		"FROM_DIGIT", "ISO_DEFAULT_SKIP", "ISO_UNKNOWN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HamelinParser._LITERAL_NAMES, HamelinParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HamelinParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "HamelinParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return HamelinParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HamelinParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HamelinParser._ATN, this);
	}
	// @RuleVersion(0)
	public commands(): CommandsContext {
		let _localctx: CommandsContext = new CommandsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HamelinParser.RULE_commands);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.from_command();
			this.state = 167;
			this.match(HamelinParser.FROM_PIPE);
			this.state = 168;
			this.search_command();
			this.state = 173;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HamelinParser.PIPE_ || _la === HamelinParser.LUCENE_PIPE) {
				{
				{
				this.state = 169;
				_la = this._input.LA(1);
				if (!(_la === HamelinParser.PIPE_ || _la === HamelinParser.LUCENE_PIPE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 170;
				this.command();
				}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 176;
			this.match(HamelinParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public command(): CommandContext {
		let _localctx: CommandContext = new CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HamelinParser.RULE_command);
		try {
			this.state = 182;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.LET_COMMAND:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.let_command();
				}
				break;
			case HamelinParser.PARSE_COMMAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.parse_command();
				}
				break;
			case HamelinParser.LIMIT_COMMAND:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 180;
				this.limit_command();
				}
				break;
			case HamelinParser.FIELDS_COMMAND:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 181;
				this.fields_command();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public from_command(): From_commandContext {
		let _localctx: From_commandContext = new From_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, HamelinParser.RULE_from_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 184;
			this.from_command_name();
			this.state = 185;
			this.dataset_ref();
			this.state = 190;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (HamelinParser.FROM_RELATIVE_TIME_EXPRESSION - 82)) | (1 << (HamelinParser.ISO_T - 82)) | (1 << (HamelinParser.ISO_DIGIT - 82)))) !== 0)) {
				{
				this.state = 186;
				_localctx._earliest = this.earliest_expression();
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & ((1 << (HamelinParser.FROM_RELATIVE_TIME_EXPRESSION - 82)) | (1 << (HamelinParser.ISO_T - 82)) | (1 << (HamelinParser.ISO_DIGIT - 82)))) !== 0)) {
					{
					this.state = 187;
					this.latest_expression();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public from_command_name(): From_command_nameContext {
		let _localctx: From_command_nameContext = new From_command_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HamelinParser.RULE_from_command_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 192;
			this.match(HamelinParser.FROM_COMMAND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataset_ref(): Dataset_refContext {
		let _localctx: Dataset_refContext = new Dataset_refContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HamelinParser.RULE_dataset_ref);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(HamelinParser.FROM_IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public earliest_expression(): Earliest_expressionContext {
		let _localctx: Earliest_expressionContext = new Earliest_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HamelinParser.RULE_earliest_expression);
		try {
			this.state = 198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.FROM_RELATIVE_TIME_EXPRESSION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 196;
				this.match(HamelinParser.FROM_RELATIVE_TIME_EXPRESSION);
				}
				break;
			case HamelinParser.ISO_T:
			case HamelinParser.ISO_DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 197;
				this.iso();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public latest_expression(): Latest_expressionContext {
		let _localctx: Latest_expressionContext = new Latest_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HamelinParser.RULE_latest_expression);
		try {
			this.state = 202;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.FROM_RELATIVE_TIME_EXPRESSION:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 200;
				this.match(HamelinParser.FROM_RELATIVE_TIME_EXPRESSION);
				}
				break;
			case HamelinParser.ISO_T:
			case HamelinParser.ISO_DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 201;
				this.iso();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public search_command(): Search_commandContext {
		let _localctx: Search_commandContext = new Search_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HamelinParser.RULE_search_command);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.ASTERISK_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 204;
				this.match(HamelinParser.ASTERISK_);
				}
				break;
			case HamelinParser.SEARCH_COMMAND:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 205;
				this.match(HamelinParser.SEARCH_COMMAND);
				this.state = 206;
				this.luceneSearchQuery();
				}
				}
				break;
			case HamelinParser.EOF:
			case HamelinParser.PIPE_:
			case HamelinParser.LUCENE_PIPE:
				this.enterOuterAlt(_localctx, 3);
				// tslint:disable-next-line:no-empty
				{
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public let_command(): Let_commandContext {
		let _localctx: Let_commandContext = new Let_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HamelinParser.RULE_let_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.match(HamelinParser.LET_COMMAND);
			this.state = 211;
			this.identifier();
			this.state = 212;
			this.match(HamelinParser.EQ_);
			this.state = 213;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parse_command(): Parse_commandContext {
		let _localctx: Parse_commandContext = new Parse_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HamelinParser.RULE_parse_command);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 215;
			this.match(HamelinParser.PARSE_COMMAND);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HamelinParser.ANCHOR_KEYWORD || _la === HamelinParser.REGEX_KEYWORD) {
				{
				this.state = 216;
				_la = this._input.LA(1);
				if (!(_la === HamelinParser.ANCHOR_KEYWORD || _la === HamelinParser.REGEX_KEYWORD)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HamelinParser.IDENTIFIER_ || _la === HamelinParser.QUOTED_IDENTIFIER_) {
				{
				this.state = 219;
				_localctx._field_name = this.identifier();
				}
			}

			this.state = 222;
			this.parse_expressions();
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HamelinParser.AS_KEYWORD) {
				{
				this.state = 223;
				this.match(HamelinParser.AS_KEYWORD);
				this.state = 224;
				this.field_names();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parse_expressions(): Parse_expressionsContext {
		let _localctx: Parse_expressionsContext = new Parse_expressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HamelinParser.RULE_parse_expressions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 227;
			this.match(HamelinParser.ESCAPED_STRING);
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HamelinParser.COMMA_) {
				{
				{
				this.state = 228;
				this.match(HamelinParser.COMMA_);
				this.state = 229;
				this.match(HamelinParser.ESCAPED_STRING);
				}
				}
				this.state = 234;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limit_command(): Limit_commandContext {
		let _localctx: Limit_commandContext = new Limit_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HamelinParser.RULE_limit_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 235;
			this.match(HamelinParser.LIMIT_COMMAND);
			this.state = 236;
			_localctx._limit = this.match(HamelinParser.INTEGER_VALUE_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fields_command(): Fields_commandContext {
		let _localctx: Fields_commandContext = new Fields_commandContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HamelinParser.RULE_fields_command);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(HamelinParser.FIELDS_COMMAND);
			this.state = 239;
			this.field_names();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public field_names(): Field_namesContext {
		let _localctx: Field_namesContext = new Field_namesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, HamelinParser.RULE_field_names);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this.identifier();
			this.state = 246;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HamelinParser.COMMA_) {
				{
				{
				this.state = 242;
				this.match(HamelinParser.COMMA_);
				this.state = 243;
				this.identifier();
				}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, HamelinParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 249;
			this.booleanExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public booleanExpression(): BooleanExpressionContext;
	public booleanExpression(_p: number): BooleanExpressionContext;
	// @RuleVersion(0)
	public booleanExpression(_p?: number): BooleanExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: BooleanExpressionContext = new BooleanExpressionContext(this._ctx, _parentState);
		let _prevctx: BooleanExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, HamelinParser.RULE_booleanExpression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.FALSE_:
			case HamelinParser.NULL_:
			case HamelinParser.TRUE_:
			case HamelinParser.MINUS_:
			case HamelinParser.LPAREN_:
			case HamelinParser.ESCAPED_STRING:
			case HamelinParser.BINARY_LITERAL_:
			case HamelinParser.INTEGER_VALUE_:
			case HamelinParser.DECIMAL_VALUE_:
			case HamelinParser.DOUBLE_VALUE_:
			case HamelinParser.IDENTIFIER_:
			case HamelinParser.QUOTED_IDENTIFIER_:
				{
				_localctx = new PredicatedContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 252;
				this.valueExpression(0);
				this.state = 254;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 253;
					this.predicate_();
					}
					break;
				}
				}
				break;
			case HamelinParser.NOT_:
				{
				_localctx = new LogicalNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 256;
				this.match(HamelinParser.NOT_);
				this.state = 257;
				this.booleanExpression(3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 268;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 266;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						_localctx = new AndContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, HamelinParser.RULE_booleanExpression);
						this.state = 260;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 261;
						this.match(HamelinParser.AND_);
						this.state = 262;
						this.booleanExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new OrContext(new BooleanExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, HamelinParser.RULE_booleanExpression);
						this.state = 263;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 264;
						this.match(HamelinParser.OR_);
						this.state = 265;
						this.booleanExpression(2);
						}
						break;
					}
					}
				}
				this.state = 270;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public predicate_(): Predicate_Context {
		let _localctx: Predicate_Context = new Predicate_Context(this._ctx, this.state);
		this.enterRule(_localctx, 32, HamelinParser.RULE_predicate_);
		try {
			_localctx = new ComparisonContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 271;
			this.comparisonOperator();
			this.state = 272;
			(_localctx as ComparisonContext)._right = this.valueExpression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueExpression(): ValueExpressionContext;
	public valueExpression(_p: number): ValueExpressionContext;
	// @RuleVersion(0)
	public valueExpression(_p?: number): ValueExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueExpressionContext = new ValueExpressionContext(this._ctx, _parentState);
		let _prevctx: ValueExpressionContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, HamelinParser.RULE_valueExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new ValueExpressionDefaultContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 275;
			this.primaryExpression();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 285;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 283;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HamelinParser.RULE_valueExpression);
						this.state = 277;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 278;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HamelinParser.ASTERISK_) | (1 << HamelinParser.SLASH_) | (1 << HamelinParser.PERCENT_))) !== 0))) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 279;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(3);
						}
						break;

					case 2:
						{
						_localctx = new ArithmeticBinaryContext(new ValueExpressionContext(_parentctx, _parentState));
						(_localctx as ArithmeticBinaryContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, HamelinParser.RULE_valueExpression);
						this.state = 280;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 281;
						(_localctx as ArithmeticBinaryContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === HamelinParser.PLUS_ || _la === HamelinParser.MINUS_)) {
							(_localctx as ArithmeticBinaryContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 282;
						(_localctx as ArithmeticBinaryContext)._right = this.valueExpression(2);
						}
						break;
					}
					}
				}
				this.state = 287;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let _localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, HamelinParser.RULE_primaryExpression);
		let _la: number;
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				_localctx = new NullLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 288;
				this.match(HamelinParser.NULL_);
				}
				break;

			case 2:
				_localctx = new NumericLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 289;
				this.number();
				}
				break;

			case 3:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 290;
				this.booleanValue();
				}
				break;

			case 4:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 291;
				this.string_();
				}
				break;

			case 5:
				_localctx = new BinaryLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 292;
				this.match(HamelinParser.BINARY_LITERAL_);
				}
				break;

			case 6:
				_localctx = new FunctionCallContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 293;
				this.qualifiedName();
				this.state = 294;
				this.match(HamelinParser.LPAREN_);
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HamelinParser.FALSE_) | (1 << HamelinParser.NOT_) | (1 << HamelinParser.NULL_) | (1 << HamelinParser.TRUE_) | (1 << HamelinParser.MINUS_))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (HamelinParser.LPAREN_ - 35)) | (1 << (HamelinParser.ESCAPED_STRING - 35)) | (1 << (HamelinParser.BINARY_LITERAL_ - 35)) | (1 << (HamelinParser.INTEGER_VALUE_ - 35)) | (1 << (HamelinParser.DECIMAL_VALUE_ - 35)) | (1 << (HamelinParser.DOUBLE_VALUE_ - 35)) | (1 << (HamelinParser.IDENTIFIER_ - 35)) | (1 << (HamelinParser.QUOTED_IDENTIFIER_ - 35)))) !== 0)) {
					{
					this.state = 295;
					this.expression();
					this.state = 300;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === HamelinParser.COMMA_) {
						{
						{
						this.state = 296;
						this.match(HamelinParser.COMMA_);
						this.state = 297;
						this.expression();
						}
						}
						this.state = 302;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 305;
				this.match(HamelinParser.RPAREN_);
				}
				break;

			case 7:
				_localctx = new ColumnReferenceContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 307;
				this.identifier();
				}
				break;

			case 8:
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 308;
				this.match(HamelinParser.LPAREN_);
				this.state = 309;
				this.expression();
				this.state = 310;
				this.match(HamelinParser.RPAREN_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string_(): String_Context {
		let _localctx: String_Context = new String_Context(this._ctx, this.state);
		this.enterRule(_localctx, 38, HamelinParser.RULE_string_);
		try {
			_localctx = new EscapedStringLiteralContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.match(HamelinParser.ESCAPED_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, HamelinParser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 316;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HamelinParser.EQ_) | (1 << HamelinParser.NEQ_) | (1 << HamelinParser.LT_) | (1 << HamelinParser.LTE_) | (1 << HamelinParser.GT_) | (1 << HamelinParser.GTE_))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, HamelinParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 318;
			_la = this._input.LA(1);
			if (!(_la === HamelinParser.FALSE_ || _la === HamelinParser.TRUE_)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public qualifiedName(): QualifiedNameContext {
		let _localctx: QualifiedNameContext = new QualifiedNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, HamelinParser.RULE_qualifiedName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.identifier();
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HamelinParser.DOT_) {
				{
				{
				this.state = 321;
				this.match(HamelinParser.DOT_);
				this.state = 322;
				this.identifier();
				}
				}
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, HamelinParser.RULE_identifier);
		try {
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.IDENTIFIER_:
				_localctx = new UnquotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 328;
				this.match(HamelinParser.IDENTIFIER_);
				}
				break;
			case HamelinParser.QUOTED_IDENTIFIER_:
				_localctx = new QuotedIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 329;
				this.match(HamelinParser.QUOTED_IDENTIFIER_);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, HamelinParser.RULE_number);
		let _la: number;
		try {
			this.state = 344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				_localctx = new DecimalLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 333;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HamelinParser.MINUS_) {
					{
					this.state = 332;
					this.match(HamelinParser.MINUS_);
					}
				}

				this.state = 335;
				this.match(HamelinParser.DECIMAL_VALUE_);
				}
				break;

			case 2:
				_localctx = new DoubleLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HamelinParser.MINUS_) {
					{
					this.state = 336;
					this.match(HamelinParser.MINUS_);
					}
				}

				this.state = 339;
				this.match(HamelinParser.DOUBLE_VALUE_);
				}
				break;

			case 3:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HamelinParser.MINUS_) {
					{
					this.state = 340;
					this.match(HamelinParser.MINUS_);
					}
				}

				this.state = 343;
				this.match(HamelinParser.INTEGER_VALUE_);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneSearchQuery(): LuceneSearchQueryContext {
		let _localctx: LuceneSearchQueryContext = new LuceneSearchQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, HamelinParser.RULE_luceneSearchQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 347;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 346;
				this.luceneDisjQuery();
				}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & ((1 << (HamelinParser.PLUS_ - 24)) | (1 << (HamelinParser.MINUS_ - 24)) | (1 << (HamelinParser.LPAREN_ - 24)) | (1 << (HamelinParser.INTEGER_VALUE_ - 24)) | (1 << (HamelinParser.DECIMAL_VALUE_ - 24)) | (1 << (HamelinParser.DOUBLE_VALUE_ - 24)))) !== 0) || _la === HamelinParser.LUCENE_NOT || _la === HamelinParser.LUCENE_TERM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneDisjQuery(): LuceneDisjQueryContext {
		let _localctx: LuceneDisjQueryContext = new LuceneDisjQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, HamelinParser.RULE_luceneDisjQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this.luceneConjQuery();
			this.state = 356;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HamelinParser.LUCENE_OR) {
				{
				{
				this.state = 352;
				this.match(HamelinParser.LUCENE_OR);
				this.state = 353;
				this.luceneConjQuery();
				}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneConjQuery(): LuceneConjQueryContext {
		let _localctx: LuceneConjQueryContext = new LuceneConjQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, HamelinParser.RULE_luceneConjQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 359;
			this.luceneModClause();
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HamelinParser.LUCENE_AND) {
				{
				{
				this.state = 360;
				this.match(HamelinParser.LUCENE_AND);
				this.state = 361;
				this.luceneModClause();
				}
				}
				this.state = 366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneModClause(): LuceneModClauseContext {
		let _localctx: LuceneModClauseContext = new LuceneModClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, HamelinParser.RULE_luceneModClause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HamelinParser.PLUS_ || _la === HamelinParser.MINUS_ || _la === HamelinParser.LUCENE_NOT) {
				{
				this.state = 367;
				this.luceneModifier();
				}
			}

			this.state = 370;
			this.luceneClause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneModifier(): LuceneModifierContext {
		let _localctx: LuceneModifierContext = new LuceneModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, HamelinParser.RULE_luceneModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 372;
			_la = this._input.LA(1);
			if (!(_la === HamelinParser.PLUS_ || _la === HamelinParser.MINUS_ || _la === HamelinParser.LUCENE_NOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneClause(): LuceneClauseContext {
		let _localctx: LuceneClauseContext = new LuceneClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, HamelinParser.RULE_luceneClause);
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.INTEGER_VALUE_:
			case HamelinParser.DECIMAL_VALUE_:
			case HamelinParser.DOUBLE_VALUE_:
			case HamelinParser.LUCENE_TERM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 374;
				this.luceneTerm();
				}
				break;
			case HamelinParser.LPAREN_:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 375;
				this.luceneGroupingExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneFieldName(): LuceneFieldNameContext {
		let _localctx: LuceneFieldNameContext = new LuceneFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, HamelinParser.RULE_luceneFieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 378;
			this.match(HamelinParser.IDENTIFIER_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneGroupingExpr(): LuceneGroupingExprContext {
		let _localctx: LuceneGroupingExprContext = new LuceneGroupingExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, HamelinParser.RULE_luceneGroupingExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 380;
			this.match(HamelinParser.LPAREN_);
			this.state = 381;
			this.luceneSearchQuery();
			this.state = 382;
			this.match(HamelinParser.RPAREN_);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public luceneTerm(): LuceneTermContext {
		let _localctx: LuceneTermContext = new LuceneTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, HamelinParser.RULE_luceneTerm);
		let _la: number;
		try {
			this.state = 386;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.INTEGER_VALUE_:
			case HamelinParser.DECIMAL_VALUE_:
			case HamelinParser.DOUBLE_VALUE_:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 384;
				_la = this._input.LA(1);
				if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (HamelinParser.INTEGER_VALUE_ - 50)) | (1 << (HamelinParser.DECIMAL_VALUE_ - 50)) | (1 << (HamelinParser.DOUBLE_VALUE_ - 50)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case HamelinParser.LUCENE_TERM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 385;
				this.match(HamelinParser.LUCENE_TERM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public int_(): Int_Context {
		let _localctx: Int_Context = new Int_Context(this._ctx, this.state);
		this.enterRule(_localctx, 68, HamelinParser.RULE_int_);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 388;
				this.match(HamelinParser.ISO_DIGIT);
				}
				}
				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === HamelinParser.ISO_DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dec(): DecContext {
		let _localctx: DecContext = new DecContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, HamelinParser.RULE_dec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 393;
				this.match(HamelinParser.ISO_DIGIT);
				}
				}
				this.state = 396;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === HamelinParser.ISO_DIGIT);
			this.state = 399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HamelinParser.ISO_FRACTION) {
				{
				this.state = 398;
				this.match(HamelinParser.ISO_FRACTION);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public int2(): Int2Context {
		let _localctx: Int2Context = new Int2Context(this._ctx, this.state);
		this.enterRule(_localctx, 72, HamelinParser.RULE_int2);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 402;
			this.match(HamelinParser.ISO_DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public int3(): Int3Context {
		let _localctx: Int3Context = new Int3Context(this._ctx, this.state);
		this.enterRule(_localctx, 74, HamelinParser.RULE_int3);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 405;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 406;
			this.match(HamelinParser.ISO_DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public int4(): Int4Context {
		let _localctx: Int4Context = new Int4Context(this._ctx, this.state);
		this.enterRule(_localctx, 76, HamelinParser.RULE_int4);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 409;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 410;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 411;
			this.match(HamelinParser.ISO_DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dec2(): Dec2Context {
		let _localctx: Dec2Context = new Dec2Context(this._ctx, this.state);
		this.enterRule(_localctx, 78, HamelinParser.RULE_dec2);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 414;
			this.match(HamelinParser.ISO_DIGIT);
			this.state = 416;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HamelinParser.ISO_FRACTION) {
				{
				this.state = 415;
				this.match(HamelinParser.ISO_FRACTION);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public century(): CenturyContext {
		let _localctx: CenturyContext = new CenturyContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, HamelinParser.RULE_century);
		try {
			_localctx = new CompleteCenturyContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.int2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public year(): YearContext {
		let _localctx: YearContext = new YearContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, HamelinParser.RULE_year);
		try {
			_localctx = new CompleteYearContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 420;
			this.int4();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public month(): MonthContext {
		let _localctx: MonthContext = new MonthContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, HamelinParser.RULE_month);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 422;
			this.int2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public day(): DayContext {
		let _localctx: DayContext = new DayContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, HamelinParser.RULE_day);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.int2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ordinalDay(): OrdinalDayContext {
		let _localctx: OrdinalDayContext = new OrdinalDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, HamelinParser.RULE_ordinalDay);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 426;
			this.int3();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public week(): WeekContext {
		let _localctx: WeekContext = new WeekContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, HamelinParser.RULE_week);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 428;
			this.int2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public weekDay(): WeekDayContext {
		let _localctx: WeekDayContext = new WeekDayContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, HamelinParser.RULE_weekDay);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(HamelinParser.ISO_DIGIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hour(): HourContext {
		let _localctx: HourContext = new HourContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, HamelinParser.RULE_hour);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 432;
			this.int2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minute(): MinuteContext {
		let _localctx: MinuteContext = new MinuteContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, HamelinParser.RULE_minute);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 434;
			this.int2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public second(): SecondContext {
		let _localctx: SecondContext = new SecondContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, HamelinParser.RULE_second);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 436;
			this.int2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public hourFraction(): HourFractionContext {
		let _localctx: HourFractionContext = new HourFractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, HamelinParser.RULE_hourFraction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 438;
			this.dec2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public minuteFraction(): MinuteFractionContext {
		let _localctx: MinuteFractionContext = new MinuteFractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, HamelinParser.RULE_minuteFraction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 440;
			this.dec2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public secondFraction(): SecondFractionContext {
		let _localctx: SecondFractionContext = new SecondFractionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, HamelinParser.RULE_secondFraction);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.dec2();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calendarDate(): CalendarDateContext {
		let _localctx: CalendarDateContext = new CalendarDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, HamelinParser.RULE_calendarDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.calendarDateExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public calendarDateExtended(): CalendarDateExtendedContext {
		let _localctx: CalendarDateExtendedContext = new CalendarDateExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, HamelinParser.RULE_calendarDateExtended);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.year();
			this.state = 447;
			this.match(HamelinParser.ISO_MINUS);
			this.state = 448;
			this.month();
			this.state = 449;
			this.match(HamelinParser.ISO_MINUS);
			this.state = 450;
			this.day();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificMonthCalendarDate(): SpecificMonthCalendarDateContext {
		let _localctx: SpecificMonthCalendarDateContext = new SpecificMonthCalendarDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, HamelinParser.RULE_specificMonthCalendarDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.year();
			this.state = 453;
			this.match(HamelinParser.ISO_MINUS);
			this.state = 454;
			this.month();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificYearCalendarDate(): SpecificYearCalendarDateContext {
		let _localctx: SpecificYearCalendarDateContext = new SpecificYearCalendarDateContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, HamelinParser.RULE_specificYearCalendarDate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 456;
			this.year();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datePrecise(): DatePreciseContext {
		let _localctx: DatePreciseContext = new DatePreciseContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, HamelinParser.RULE_datePrecise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 458;
			this.datePreciseExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datePreciseExtended(): DatePreciseExtendedContext {
		let _localctx: DatePreciseExtendedContext = new DatePreciseExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, HamelinParser.RULE_datePreciseExtended);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.calendarDateExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public date(): DateContext {
		let _localctx: DateContext = new DateContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, HamelinParser.RULE_date);
		try {
			this.state = 464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 462;
				this.dateBasic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 463;
				this.dateExtended();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateBasic(): DateBasicContext {
		let _localctx: DateBasicContext = new DateBasicContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, HamelinParser.RULE_dateBasic);
		try {
			this.state = 468;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this.specificMonthCalendarDate();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 467;
				this.specificYearCalendarDate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateExtended(): DateExtendedContext {
		let _localctx: DateExtendedContext = new DateExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, HamelinParser.RULE_dateExtended);
		try {
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 470;
				this.datePreciseExtended();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 471;
				this.specificMonthCalendarDate();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 472;
				this.specificYearCalendarDate();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTimePrecise(): LocalTimePreciseContext {
		let _localctx: LocalTimePreciseContext = new LocalTimePreciseContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, HamelinParser.RULE_localTimePrecise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 475;
			this.localTimePreciseExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTimePreciseExtended(): LocalTimePreciseExtendedContext {
		let _localctx: LocalTimePreciseExtendedContext = new LocalTimePreciseExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, HamelinParser.RULE_localTimePreciseExtended);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.hour();
			this.state = 478;
			this.match(HamelinParser.ISO_COLON);
			this.state = 479;
			this.minute();
			this.state = 480;
			this.match(HamelinParser.ISO_COLON);
			this.state = 481;
			this.secondFraction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificMinuteLocalTime(): SpecificMinuteLocalTimeContext {
		let _localctx: SpecificMinuteLocalTimeContext = new SpecificMinuteLocalTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, HamelinParser.RULE_specificMinuteLocalTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.specificMinuteLocalTimeExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificMinuteLocalTimeExtended(): SpecificMinuteLocalTimeExtendedContext {
		let _localctx: SpecificMinuteLocalTimeExtendedContext = new SpecificMinuteLocalTimeExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, HamelinParser.RULE_specificMinuteLocalTimeExtended);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 485;
			this.hour();
			this.state = 486;
			this.match(HamelinParser.ISO_COLON);
			this.state = 487;
			this.minuteFraction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public specificHourLocalTime(): SpecificHourLocalTimeContext {
		let _localctx: SpecificHourLocalTimeContext = new SpecificHourLocalTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, HamelinParser.RULE_specificHourLocalTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.hourFraction();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTime(): LocalTimeContext {
		let _localctx: LocalTimeContext = new LocalTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, HamelinParser.RULE_localTime);
		try {
			this.state = 493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 491;
				this.localTimeBasic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 492;
				this.localTimeExtended();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTimeBasic(): LocalTimeBasicContext {
		let _localctx: LocalTimeBasicContext = new LocalTimeBasicContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, HamelinParser.RULE_localTimeBasic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 495;
			this.specificHourLocalTime();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTimeExtended(): LocalTimeExtendedContext {
		let _localctx: LocalTimeExtendedContext = new LocalTimeExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, HamelinParser.RULE_localTimeExtended);
		try {
			this.state = 500;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 497;
				this.localTimePreciseExtended();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 498;
				this.specificMinuteLocalTimeExtended();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 499;
				this.specificHourLocalTime();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeZoneUtc(): TimeZoneUtcContext {
		let _localctx: TimeZoneUtcContext = new TimeZoneUtcContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, HamelinParser.RULE_timeZoneUtc);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 502;
			this.match(HamelinParser.ISO_Z);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeZone(): TimeZoneContext {
		let _localctx: TimeZoneContext = new TimeZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, HamelinParser.RULE_timeZone);
		try {
			this.state = 506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 504;
				this.timeZoneBasic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 505;
				this.timeZoneExtended();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeZoneBasic(): TimeZoneBasicContext {
		let _localctx: TimeZoneBasicContext = new TimeZoneBasicContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, HamelinParser.RULE_timeZoneBasic);
		let _la: number;
		try {
			this.state = 514;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.ISO_PLUS:
			case HamelinParser.ISO_MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 508;
				_la = this._input.LA(1);
				if (!(_la === HamelinParser.ISO_PLUS || _la === HamelinParser.ISO_MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 509;
				this.hour();
				this.state = 511;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
				case 1:
					{
					this.state = 510;
					this.minute();
					}
					break;
				}
				}
				}
				break;
			case HamelinParser.ISO_Z:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 513;
				this.timeZoneUtc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeZoneExtended(): TimeZoneExtendedContext {
		let _localctx: TimeZoneExtendedContext = new TimeZoneExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, HamelinParser.RULE_timeZoneExtended);
		let _la: number;
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HamelinParser.ISO_PLUS:
			case HamelinParser.ISO_MINUS:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 516;
				_la = this._input.LA(1);
				if (!(_la === HamelinParser.ISO_PLUS || _la === HamelinParser.ISO_MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 517;
				this.hour();
				this.state = 520;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HamelinParser.COLON_) {
					{
					this.state = 518;
					this.match(HamelinParser.COLON_);
					this.state = 519;
					this.minute();
					}
				}

				}
				}
				break;
			case HamelinParser.ISO_Z:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 522;
				this.timeZoneUtc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTimeAndTimeZone(): LocalTimeAndTimeZoneContext {
		let _localctx: LocalTimeAndTimeZoneContext = new LocalTimeAndTimeZoneContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, HamelinParser.RULE_localTimeAndTimeZone);
		try {
			this.state = 527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 525;
				this.localTimeAndTimeZoneBasic();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 526;
				this.localTimeAndTimeZoneExtended();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTimeAndTimeZoneBasic(): LocalTimeAndTimeZoneBasicContext {
		let _localctx: LocalTimeAndTimeZoneBasicContext = new LocalTimeAndTimeZoneBasicContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, HamelinParser.RULE_localTimeAndTimeZoneBasic);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.localTimeBasic();
			this.state = 530;
			this.timeZoneBasic();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public localTimeAndTimeZoneExtended(): LocalTimeAndTimeZoneExtendedContext {
		let _localctx: LocalTimeAndTimeZoneExtendedContext = new LocalTimeAndTimeZoneExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, HamelinParser.RULE_localTimeAndTimeZoneExtended);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this.localTimeExtended();
			this.state = 533;
			this.timeZoneExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public time(): TimeContext {
		let _localctx: TimeContext = new TimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, HamelinParser.RULE_time);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HamelinParser.ISO_T) {
				{
				this.state = 535;
				this.match(HamelinParser.ISO_T);
				}
			}

			this.state = 538;
			this.localTime();
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (HamelinParser.ISO_Z - 94)) | (1 << (HamelinParser.ISO_PLUS - 94)) | (1 << (HamelinParser.ISO_MINUS - 94)))) !== 0)) {
				{
				this.state = 539;
				this.timeZone();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datetimePrecise(): DatetimePreciseContext {
		let _localctx: DatetimePreciseContext = new DatetimePreciseContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, HamelinParser.RULE_datetimePrecise);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 542;
			this.datetimePreciseExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datetimePreciseExtended(): DatetimePreciseExtendedContext {
		let _localctx: DatetimePreciseExtendedContext = new DatetimePreciseExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, HamelinParser.RULE_datetimePreciseExtended);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this.calendarDateExtended();
			this.state = 545;
			this.match(HamelinParser.ISO_T);
			this.state = 546;
			this.localTimePreciseExtended();
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (HamelinParser.ISO_Z - 94)) | (1 << (HamelinParser.ISO_PLUS - 94)) | (1 << (HamelinParser.ISO_MINUS - 94)))) !== 0)) {
				{
				this.state = 547;
				this.timeZoneExtended();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datetime(): DatetimeContext {
		let _localctx: DatetimeContext = new DatetimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, HamelinParser.RULE_datetime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.datetimeExtended();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datetimeExtended(): DatetimeExtendedContext {
		let _localctx: DatetimeExtendedContext = new DatetimeExtendedContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, HamelinParser.RULE_datetimeExtended);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.datePreciseExtended();
			this.state = 553;
			this.match(HamelinParser.ISO_T);
			this.state = 554;
			this.localTimeExtended();
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (HamelinParser.ISO_Z - 94)) | (1 << (HamelinParser.ISO_PLUS - 94)) | (1 << (HamelinParser.ISO_MINUS - 94)))) !== 0)) {
				{
				this.state = 555;
				this.timeZoneExtended();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iso(): IsoContext {
		let _localctx: IsoContext = new IsoContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, HamelinParser.RULE_iso);
		try {
			this.state = 561;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.time();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.date();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 560;
				this.datetime();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.booleanExpression_sempred(_localctx as BooleanExpressionContext, predIndex);

		case 17:
			return this.valueExpression_sempred(_localctx as ValueExpressionContext, predIndex);
		}
		return true;
	}
	private booleanExpression_sempred(_localctx: BooleanExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);

		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private valueExpression_sempred(_localctx: ValueExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03l\u0236\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x07\x02\xAE\n\x02\f\x02\x0E\x02\xB1\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\xB9\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04\xBF\n\x04\x05\x04\xC1\n\x04\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x05\x07\xC9\n\x07\x03\b\x03\b\x05\b\xCD\n\b\x03" +
		"\t\x03\t\x03\t\x03\t\x05\t\xD3\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v" +
		"\x03\v\x05\v\xDC\n\v\x03\v\x05\v\xDF\n\v\x03\v\x03\v\x03\v\x05\v\xE4\n" +
		"\v\x03\f\x03\f\x03\f\x07\f\xE9\n\f\f\f\x0E\f\xEC\v\f\x03\r\x03\r\x03\r" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xF7\n\x0F\f\x0F" +
		"\x0E\x0F\xFA\v\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\u0101" +
		"\n\x11\x03\x11\x03\x11\x05\x11\u0105\n\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x07\x11\u010D\n\x11\f\x11\x0E\x11\u0110\v\x11\x03" +
		"\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x07\x13\u011E\n\x13\f\x13\x0E\x13\u0121\v\x13\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x07\x14\u012D\n\x14\f\x14\x0E\x14\u0130\v\x14\x05\x14\u0132\n\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u013B" +
		"\n\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18" +
		"\x03\x18\x07\x18\u0146\n\x18\f\x18\x0E\x18\u0149\v\x18\x03\x19\x03\x19" +
		"\x05\x19\u014D\n\x19\x03\x1A\x05\x1A\u0150\n\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u0154\n\x1A\x03\x1A\x03\x1A\x05\x1A\u0158\n\x1A\x03\x1A\x05\x1A\u015B" +
		"\n\x1A\x03\x1B\x06\x1B\u015E\n\x1B\r\x1B\x0E\x1B\u015F\x03\x1C\x03\x1C" +
		"\x03\x1C\x07\x1C\u0165\n\x1C\f\x1C\x0E\x1C\u0168\v\x1C\x03\x1D\x03\x1D" +
		"\x03\x1D\x07\x1D\u016D\n\x1D\f\x1D\x0E\x1D\u0170\v\x1D\x03\x1E\x05\x1E" +
		"\u0173\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x05 \u017B\n \x03" +
		"!\x03!\x03\"\x03\"\x03\"\x03\"\x03#\x03#\x05#\u0185\n#\x03$\x06$\u0188" +
		"\n$\r$\x0E$\u0189\x03%\x06%\u018D\n%\r%\x0E%\u018E\x03%\x05%\u0192\n%" +
		"\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)" +
		"\x03)\x03)\x05)\u01A3\n)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03." +
		"\x03.\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x034\x03" +
		"5\x035\x036\x036\x037\x037\x038\x038\x038\x038\x038\x038\x039\x039\x03" +
		"9\x039\x03:\x03:\x03;\x03;\x03<\x03<\x03=\x03=\x05=\u01D3\n=\x03>\x03" +
		">\x05>\u01D7\n>\x03?\x03?\x03?\x05?\u01DC\n?\x03@\x03@\x03A\x03A\x03A" +
		"\x03A\x03A\x03A\x03B\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03E\x03E\x05" +
		"E\u01F0\nE\x03F\x03F\x03G\x03G\x03G\x05G\u01F7\nG\x03H\x03H\x03I\x03I" +
		"\x05I\u01FD\nI\x03J\x03J\x03J\x05J\u0202\nJ\x03J\x05J\u0205\nJ\x03K\x03" +
		"K\x03K\x03K\x05K\u020B\nK\x03K\x05K\u020E\nK\x03L\x03L\x05L\u0212\nL\x03" +
		"M\x03M\x03M\x03N\x03N\x03N\x03O\x05O\u021B\nO\x03O\x03O\x05O\u021F\nO" +
		"\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x05Q\u0227\nQ\x03R\x03R\x03S\x03S\x03S" +
		"\x03S\x05S\u022F\nS\x03T\x03T\x03T\x05T\u0234\nT\x03T\x02\x02\x04 $U\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02" +
		",\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02" +
		"H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02" +
		"d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02" +
		"\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02" +
		"\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02" +
		"\xA4\x02\xA6\x02\x02\v\x04\x02\f\f==\x03\x02\t\n\x03\x02\x1C\x1E\x03\x02" +
		"\x1A\x1B\x03\x02\x14\x19\x04\x02\x0E\x0E\x13\x13\x04\x02\x1A\x1B@@\x03" +
		"\x0246\x03\x02cd\x02\u0224\x02\xA8\x03\x02\x02\x02\x04\xB8\x03\x02\x02" +
		"\x02\x06\xBA\x03\x02\x02\x02\b\xC2\x03\x02\x02\x02\n\xC4\x03\x02\x02\x02" +
		"\f\xC8\x03\x02\x02\x02\x0E\xCC\x03\x02\x02\x02\x10\xD2\x03\x02\x02\x02" +
		"\x12\xD4\x03\x02\x02\x02\x14\xD9\x03\x02\x02\x02\x16\xE5\x03\x02\x02\x02" +
		"\x18\xED\x03\x02\x02\x02\x1A\xF0\x03\x02\x02\x02\x1C\xF3\x03\x02\x02\x02" +
		"\x1E\xFB\x03\x02\x02\x02 \u0104\x03\x02\x02\x02\"\u0111\x03\x02\x02\x02" +
		"$\u0114\x03\x02\x02\x02&\u013A\x03\x02\x02\x02(\u013C\x03\x02\x02\x02" +
		"*\u013E\x03\x02\x02\x02,\u0140\x03\x02\x02\x02.\u0142\x03\x02\x02\x02" +
		"0\u014C\x03\x02\x02\x022\u015A\x03\x02\x02\x024\u015D\x03\x02\x02\x02" +
		"6\u0161\x03\x02\x02\x028\u0169\x03\x02\x02\x02:\u0172\x03\x02\x02\x02" +
		"<\u0176\x03\x02\x02\x02>\u017A\x03\x02\x02\x02@\u017C\x03\x02\x02\x02" +
		"B\u017E\x03\x02\x02\x02D\u0184\x03\x02\x02\x02F\u0187\x03\x02\x02\x02" +
		"H\u018C\x03\x02\x02\x02J\u0193\x03\x02\x02\x02L\u0196\x03\x02\x02\x02" +
		"N\u019A\x03\x02\x02\x02P\u019F\x03\x02\x02\x02R\u01A4\x03\x02\x02\x02" +
		"T\u01A6\x03\x02\x02\x02V\u01A8\x03\x02\x02\x02X\u01AA\x03\x02\x02\x02" +
		"Z\u01AC\x03\x02\x02\x02\\\u01AE\x03\x02\x02\x02^\u01B0\x03\x02\x02\x02" +
		"`\u01B2\x03\x02\x02\x02b\u01B4\x03\x02\x02\x02d\u01B6\x03\x02\x02\x02" +
		"f\u01B8\x03\x02\x02\x02h\u01BA\x03\x02\x02\x02j\u01BC\x03\x02\x02\x02" +
		"l\u01BE\x03\x02\x02\x02n\u01C0\x03\x02\x02\x02p\u01C6\x03\x02\x02\x02" +
		"r\u01CA\x03\x02\x02\x02t\u01CC\x03\x02\x02\x02v\u01CE\x03\x02\x02\x02" +
		"x\u01D2\x03\x02\x02\x02z\u01D6\x03\x02\x02\x02|\u01DB\x03\x02\x02\x02" +
		"~\u01DD\x03\x02\x02\x02\x80\u01DF\x03\x02\x02\x02\x82\u01E5\x03\x02\x02" +
		"\x02\x84\u01E7\x03\x02\x02\x02\x86\u01EB\x03\x02\x02\x02\x88\u01EF\x03" +
		"\x02\x02\x02\x8A\u01F1\x03\x02\x02\x02\x8C\u01F6\x03\x02\x02\x02\x8E\u01F8" +
		"\x03\x02\x02\x02\x90\u01FC\x03\x02\x02\x02\x92\u0204\x03\x02\x02\x02\x94" +
		"\u020D\x03\x02\x02\x02\x96\u0211\x03\x02\x02\x02\x98\u0213\x03\x02\x02" +
		"\x02\x9A\u0216\x03\x02\x02\x02\x9C\u021A\x03\x02\x02\x02\x9E\u0220\x03" +
		"\x02\x02\x02\xA0\u0222\x03\x02\x02\x02\xA2\u0228\x03\x02\x02\x02\xA4\u022A" +
		"\x03\x02\x02\x02\xA6\u0233\x03\x02\x02\x02\xA8\xA9\x05\x06\x04\x02\xA9" +
		"\xAA\x07S\x02\x02\xAA\xAF\x05\x10\t\x02\xAB\xAC\t\x02\x02\x02\xAC\xAE" +
		"\x05\x04\x03\x02\xAD\xAB\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF\xAD" +
		"\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xAF" +
		"\x03\x02\x02\x02\xB2\xB3\x07\x02\x02\x03\xB3\x03\x03\x02\x02\x02\xB4\xB9" +
		"\x05\x12\n\x02\xB5\xB9\x05\x14\v\x02\xB6\xB9\x05\x18\r\x02\xB7\xB9\x05" +
		"\x1A\x0E\x02\xB8\xB4\x03\x02\x02\x02\xB8\xB5\x03\x02\x02\x02\xB8\xB6\x03" +
		"\x02\x02\x02\xB8\xB7\x03\x02\x02\x02\xB9\x05\x03\x02\x02\x02\xBA\xBB\x05" +
		"\b\x05\x02\xBB\xC0\x05\n\x06\x02\xBC\xBE\x05\f\x07\x02\xBD\xBF\x05\x0E" +
		"\b\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC1\x03\x02" +
		"\x02\x02\xC0\xBC\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x07\x03\x02" +
		"\x02\x02\xC2\xC3\x07\x03\x02\x02\xC3\t\x03\x02\x02\x02\xC4\xC5\x07^\x02" +
		"\x02\xC5\v\x03\x02\x02\x02\xC6\xC9\x07T\x02\x02\xC7\xC9\x05\xA6T\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\r\x03\x02\x02\x02\xCA" +
		"\xCD\x07T\x02\x02\xCB\xCD\x05\xA6T\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB" +
		"\x03\x02\x02\x02\xCD\x0F\x03\x02\x02\x02\xCE\xD3\x07\x1C\x02\x02\xCF\xD0" +
		"\x07\x04\x02\x02\xD0\xD3\x054\x1B\x02\xD1\xD3\x03\x02\x02\x02\xD2\xCE" +
		"\x03\x02\x02\x02\xD2\xCF\x03\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3\x11" +
		"\x03\x02\x02\x02\xD4\xD5\x07\x05\x02\x02\xD5\xD6\x050\x19\x02\xD6\xD7" +
		"\x07\x14\x02\x02\xD7\xD8\x05\x1E\x10\x02\xD8\x13\x03\x02\x02\x02\xD9\xDB" +
		"\x07\x06\x02\x02\xDA\xDC\t\x03\x02\x02\xDB\xDA\x03\x02\x02\x02\xDB\xDC" +
		"\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD\xDF\x050\x19\x02\xDE\xDD" +
		"\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE3" +
		"\x05\x16\f\x02\xE1\xE2\x07\v\x02\x02\xE2\xE4\x05\x1C\x0F\x02\xE3\xE1\x03" +
		"\x02\x02\x02\xE3\xE4\x03\x02\x02\x02\xE4\x15\x03\x02\x02\x02\xE5\xEA\x07" +
		"0\x02\x02\xE6\xE7\x07$\x02\x02\xE7\xE9\x070\x02\x02\xE8\xE6\x03\x02\x02" +
		"\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02" +
		"\x02\xEB\x17\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xED\xEE\x07\x07\x02" +
		"\x02\xEE\xEF\x074\x02\x02\xEF\x19\x03\x02\x02\x02\xF0\xF1\x07\b\x02\x02" +
		"\xF1\xF2\x05\x1C\x0F\x02\xF2\x1B\x03\x02\x02\x02\xF3\xF8\x050\x19\x02" +
		"\xF4\xF5\x07$\x02\x02\xF5\xF7\x050\x19\x02\xF6\xF4\x03\x02\x02\x02\xF7" +
		"\xFA\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9" +
		"\x1D\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFB\xFC\x05 \x11\x02\xFC" +
		"\x1F\x03\x02\x02\x02\xFD\xFE\b\x11\x01\x02\xFE\u0100\x05$\x13\x02\xFF" +
		"\u0101\x05\"\x12\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02" +
		"\x02\u0101\u0105\x03\x02\x02\x02\u0102\u0103\x07\x10\x02\x02\u0103\u0105" +
		"\x05 \x11\x05\u0104\xFD\x03\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105" +
		"\u010E\x03\x02\x02\x02\u0106\u0107\f\x04\x02\x02\u0107\u0108\x07\r\x02" +
		"\x02\u0108\u010D\x05 \x11\x05\u0109\u010A\f\x03\x02\x02\u010A\u010B\x07" +
		"\x12\x02\x02\u010B\u010D\x05 \x11\x04\u010C\u0106\x03\x02\x02\x02\u010C" +
		"\u0109\x03\x02\x02\x02\u010D\u0110\x03\x02\x02\x02\u010E\u010C\x03\x02" +
		"\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F!\x03\x02\x02\x02\u0110\u010E" +
		"\x03\x02\x02\x02\u0111\u0112\x05*\x16\x02\u0112\u0113\x05$\x13\x02\u0113" +
		"#\x03\x02\x02\x02\u0114\u0115\b\x13\x01\x02\u0115\u0116\x05&\x14\x02\u0116" +
		"\u011F\x03\x02\x02\x02\u0117\u0118\f\x04\x02\x02\u0118\u0119\t\x04\x02" +
		"\x02\u0119\u011E\x05$\x13\x05\u011A\u011B\f\x03\x02\x02\u011B\u011C\t" +
		"\x05\x02\x02\u011C\u011E\x05$\x13\x04\u011D\u0117\x03\x02\x02\x02\u011D" +
		"\u011A\x03\x02\x02\x02\u011E\u0121\x03\x02\x02\x02\u011F\u011D\x03\x02" +
		"\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120%\x03\x02\x02\x02\u0121\u011F" +
		"\x03\x02\x02\x02\u0122\u013B\x07\x11\x02\x02\u0123\u013B\x052\x1A\x02" +
		"\u0124\u013B\x05,\x17\x02\u0125\u013B\x05(\x15\x02\u0126\u013B\x073\x02" +
		"\x02\u0127\u0128\x05.\x18\x02\u0128\u0131\x07%\x02\x02\u0129\u012E\x05" +
		"\x1E\x10\x02\u012A\u012B\x07$\x02\x02\u012B\u012D\x05\x1E\x10\x02\u012C" +
		"\u012A\x03\x02\x02\x02\u012D\u0130\x03\x02\x02\x02\u012E\u012C\x03\x02" +
		"\x02\x02\u012E\u012F\x03\x02\x02\x02\u012F\u0132\x03\x02\x02\x02\u0130" +
		"\u012E\x03\x02\x02\x02\u0131\u0129\x03\x02\x02\x02\u0131\u0132\x03\x02" +
		"\x02\x02\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x07&\x02\x02\u0134\u013B" +
		"\x03\x02\x02\x02\u0135\u013B\x050\x19\x02\u0136\u0137\x07%\x02\x02\u0137" +
		"\u0138\x05\x1E\x10\x02\u0138\u0139\x07&\x02\x02\u0139\u013B\x03\x02\x02" +
		"\x02\u013A\u0122\x03\x02\x02\x02\u013A\u0123\x03\x02\x02\x02\u013A\u0124" +
		"\x03\x02\x02\x02\u013A\u0125\x03\x02\x02\x02\u013A\u0126\x03\x02\x02\x02" +
		"\u013A\u0127\x03\x02\x02\x02\u013A\u0135\x03\x02\x02\x02\u013A\u0136\x03" +
		"\x02\x02\x02\u013B\'\x03\x02\x02\x02\u013C\u013D\x070\x02\x02\u013D)\x03" +
		"\x02\x02\x02\u013E\u013F\t\x06\x02\x02\u013F+\x03\x02\x02\x02\u0140\u0141" +
		"\t\x07\x02\x02\u0141-\x03\x02\x02\x02\u0142\u0147\x050\x19\x02\u0143\u0144" +
		"\x07\"\x02\x02\u0144\u0146\x050\x19\x02\u0145\u0143\x03\x02\x02\x02\u0146" +
		"\u0149\x03\x02\x02\x02\u0147\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148/\x03\x02\x02\x02\u0149\u0147\x03\x02\x02\x02\u014A\u014D" +
		"\x077\x02\x02\u014B\u014D\x078\x02\x02\u014C\u014A\x03\x02\x02\x02\u014C" +
		"\u014B\x03\x02\x02\x02\u014D1\x03\x02\x02\x02\u014E\u0150\x07\x1B\x02" +
		"\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02\x02\u0150\u0151" +
		"\x03\x02\x02\x02\u0151\u015B\x075\x02\x02\u0152\u0154\x07\x1B\x02\x02" +
		"\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154\u0155\x03" +
		"\x02\x02\x02\u0155\u015B\x076\x02\x02\u0156\u0158\x07\x1B\x02\x02\u0157" +
		"\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x03\x02" +
		"\x02\x02\u0159\u015B\x074\x02\x02\u015A\u014F\x03\x02\x02\x02\u015A\u0153" +
		"\x03\x02\x02\x02\u015A\u0157\x03\x02\x02\x02\u015B3\x03\x02\x02\x02\u015C" +
		"\u015E\x056\x1C\x02\u015D\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02" +
		"\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u01605\x03" +
		"\x02\x02\x02\u0161\u0166\x058\x1D\x02\u0162\u0163\x07?\x02\x02\u0163\u0165" +
		"\x058\x1D\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02" +
		"\u0166\u0164\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u01677\x03\x02" +
		"\x02\x02\u0168\u0166\x03\x02\x02\x02\u0169\u016E\x05:\x1E\x02\u016A\u016B" +
		"\x07>\x02\x02\u016B\u016D\x05:\x1E\x02\u016C\u016A\x03\x02\x02\x02\u016D" +
		"\u0170\x03\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02" +
		"\x02\x02\u016F9\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0173" +
		"\x05<\x1F\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02" +
		"\u0173\u0174\x03\x02\x02\x02\u0174\u0175\x05> \x02\u0175;\x03\x02\x02" +
		"\x02\u0176\u0177\t\b\x02\x02\u0177=\x03\x02\x02\x02\u0178\u017B\x05D#" +
		"\x02\u0179\u017B\x05B\"\x02\u017A\u0178\x03\x02\x02\x02\u017A\u0179\x03" +
		"\x02\x02\x02\u017B?\x03\x02\x02\x02\u017C\u017D\x077\x02\x02\u017DA\x03" +
		"\x02\x02\x02\u017E\u017F\x07%\x02\x02\u017F\u0180\x054\x1B\x02\u0180\u0181" +
		"\x07&\x02\x02\u0181C\x03\x02\x02\x02\u0182\u0185\t\t\x02\x02\u0183\u0185" +
		"\x07O\x02\x02\u0184\u0182\x03\x02\x02\x02\u0184\u0183\x03\x02\x02\x02" +
		"\u0185E\x03\x02\x02\x02\u0186\u0188\x07f\x02\x02\u0187\u0186\x03\x02\x02" +
		"\x02\u0188\u0189\x03\x02\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u018A" +
		"\x03\x02\x02\x02\u018AG\x03\x02\x02\x02\u018B\u018D\x07f\x02\x02\u018C" +
		"\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u018C\x03\x02" +
		"\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0191\x03\x02\x02\x02\u0190" +
		"\u0192\x07g\x02\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02" +
		"\x02\u0192I\x03\x02\x02\x02\u0193\u0194\x07f\x02\x02\u0194\u0195\x07f" +
		"\x02\x02\u0195K\x03\x02\x02\x02\u0196\u0197\x07f\x02\x02\u0197\u0198\x07" +
		"f\x02\x02\u0198\u0199\x07f\x02\x02\u0199M\x03\x02\x02\x02\u019A\u019B" +
		"\x07f\x02\x02\u019B\u019C\x07f\x02\x02\u019C\u019D\x07f\x02\x02\u019D" +
		"\u019E\x07f\x02\x02\u019EO\x03\x02\x02\x02\u019F\u01A0\x07f\x02\x02\u01A0" +
		"\u01A2\x07f\x02\x02\u01A1\u01A3\x07g\x02\x02\u01A2\u01A1\x03\x02\x02\x02" +
		"\u01A2\u01A3\x03\x02\x02\x02\u01A3Q\x03\x02\x02\x02\u01A4\u01A5\x05J&" +
		"\x02\u01A5S\x03\x02\x02\x02\u01A6\u01A7\x05N(\x02\u01A7U\x03\x02\x02\x02" +
		"\u01A8\u01A9\x05J&\x02\u01A9W\x03\x02\x02\x02\u01AA\u01AB\x05J&\x02\u01AB" +
		"Y\x03\x02\x02\x02\u01AC\u01AD\x05L\'\x02\u01AD[\x03\x02\x02\x02\u01AE" +
		"\u01AF\x05J&\x02\u01AF]\x03\x02\x02\x02\u01B0\u01B1\x07f\x02\x02\u01B1" +
		"_\x03\x02\x02\x02\u01B2\u01B3\x05J&\x02\u01B3a\x03\x02\x02\x02\u01B4\u01B5" +
		"\x05J&\x02\u01B5c\x03\x02\x02\x02\u01B6\u01B7\x05J&\x02\u01B7e\x03\x02" +
		"\x02\x02\u01B8\u01B9\x05P)\x02\u01B9g\x03\x02\x02\x02\u01BA\u01BB\x05" +
		"P)\x02\u01BBi\x03\x02\x02\x02\u01BC\u01BD\x05P)\x02\u01BDk\x03\x02\x02" +
		"\x02\u01BE\u01BF\x05n8\x02\u01BFm\x03\x02\x02\x02\u01C0\u01C1\x05T+\x02" +
		"\u01C1\u01C2\x07d\x02\x02\u01C2\u01C3\x05V,\x02\u01C3\u01C4\x07d\x02\x02" +
		"\u01C4\u01C5\x05X-\x02\u01C5o\x03\x02\x02\x02\u01C6\u01C7\x05T+\x02\u01C7" +
		"\u01C8\x07d\x02\x02\u01C8\u01C9\x05V,\x02\u01C9q\x03\x02\x02\x02\u01CA" +
		"\u01CB\x05T+\x02\u01CBs\x03\x02\x02\x02\u01CC\u01CD\x05v<\x02\u01CDu\x03" +
		"\x02\x02\x02\u01CE\u01CF\x05n8\x02\u01CFw\x03\x02\x02\x02\u01D0\u01D3" +
		"\x05z>\x02\u01D1\u01D3\x05|?\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D1" +
		"\x03\x02\x02\x02\u01D3y\x03\x02\x02\x02\u01D4\u01D7\x05p9\x02\u01D5\u01D7" +
		"\x05r:\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6\u01D5\x03\x02\x02\x02\u01D7" +
		"{\x03\x02\x02\x02\u01D8\u01DC\x05v<\x02\u01D9\u01DC\x05p9\x02\u01DA\u01DC" +
		"\x05r:\x02\u01DB\u01D8\x03\x02\x02\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB" +
		"\u01DA\x03\x02\x02\x02\u01DC}\x03\x02\x02\x02\u01DD\u01DE\x05\x80A\x02" +
		"\u01DE\x7F\x03\x02\x02\x02\u01DF\u01E0\x05`1\x02\u01E0\u01E1\x07e\x02" +
		"\x02\u01E1\u01E2\x05b2\x02\u01E2\u01E3\x07e\x02\x02\u01E3\u01E4\x05j6" +
		"\x02\u01E4\x81\x03\x02\x02\x02\u01E5\u01E6\x05\x84C\x02\u01E6\x83\x03" +
		"\x02\x02\x02\u01E7\u01E8\x05`1\x02\u01E8\u01E9\x07e\x02\x02\u01E9\u01EA" +
		"\x05h5\x02\u01EA\x85\x03\x02\x02\x02\u01EB\u01EC\x05f4\x02\u01EC\x87\x03" +
		"\x02\x02\x02\u01ED\u01F0\x05\x8AF\x02\u01EE\u01F0\x05\x8CG\x02\u01EF\u01ED" +
		"\x03\x02\x02\x02\u01EF\u01EE\x03\x02\x02\x02\u01F0\x89\x03\x02\x02\x02" +
		"\u01F1\u01F2\x05\x86D\x02\u01F2\x8B\x03\x02\x02\x02\u01F3\u01F7\x05\x80" +
		"A\x02\u01F4\u01F7\x05\x84C\x02\u01F5\u01F7\x05\x86D\x02\u01F6\u01F3\x03" +
		"\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7" +
		"\x8D\x03\x02\x02\x02\u01F8\u01F9\x07`\x02\x02\u01F9\x8F\x03\x02\x02\x02" +
		"\u01FA\u01FD\x05\x92J\x02\u01FB\u01FD\x05\x94K\x02\u01FC\u01FA\x03\x02" +
		"\x02\x02\u01FC\u01FB\x03\x02\x02\x02\u01FD\x91\x03\x02\x02\x02\u01FE\u01FF" +
		"\t\n\x02\x02\u01FF\u0201\x05`1\x02\u0200\u0202\x05b2\x02\u0201\u0200\x03" +
		"\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0205\x03\x02\x02\x02\u0203" +
		"\u0205\x05\x8EH\x02\u0204\u01FE\x03\x02\x02\x02\u0204\u0203\x03\x02\x02" +
		"\x02\u0205\x93\x03\x02\x02\x02\u0206\u0207\t\n\x02\x02\u0207\u020A\x05" +
		"`1\x02\u0208\u0209\x07#\x02\x02\u0209\u020B\x05b2\x02\u020A\u0208\x03" +
		"\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C" +
		"\u020E\x05\x8EH\x02\u020D\u0206\x03\x02\x02\x02\u020D\u020C\x03\x02\x02" +
		"\x02\u020E\x95\x03\x02\x02\x02\u020F\u0212\x05\x98M\x02\u0210\u0212\x05" +
		"\x9AN\x02\u0211\u020F\x03\x02\x02\x02\u0211\u0210\x03\x02\x02\x02\u0212" +
		"\x97\x03\x02\x02\x02\u0213\u0214\x05\x8AF\x02\u0214\u0215\x05\x92J\x02" +
		"\u0215\x99\x03\x02\x02\x02\u0216\u0217\x05\x8CG\x02\u0217\u0218\x05\x94" +
		"K\x02\u0218\x9B\x03\x02\x02\x02\u0219\u021B\x07_\x02\x02\u021A\u0219\x03" +
		"\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021C\x03\x02\x02\x02\u021C" +
		"\u021E\x05\x88E\x02\u021D\u021F\x05\x90I\x02\u021E\u021D\x03\x02\x02\x02" +
		"\u021E\u021F\x03\x02\x02\x02\u021F\x9D\x03\x02\x02\x02\u0220\u0221\x05" +
		"\xA0Q\x02\u0221\x9F\x03\x02\x02\x02\u0222\u0223\x05n8\x02\u0223\u0224" +
		"\x07_\x02\x02\u0224\u0226\x05\x80A\x02\u0225\u0227\x05\x94K\x02\u0226" +
		"\u0225\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\xA1\x03\x02\x02" +
		"\x02\u0228\u0229\x05\xA4S\x02\u0229\xA3\x03\x02\x02\x02\u022A\u022B\x05" +
		"v<\x02\u022B\u022C\x07_\x02\x02\u022C\u022E\x05\x8CG\x02\u022D\u022F\x05" +
		"\x94K\x02\u022E\u022D\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F" +
		"\xA5\x03\x02\x02\x02\u0230\u0234\x05\x9CO\x02\u0231\u0234\x05x=\x02\u0232" +
		"\u0234\x05\xA2R\x02\u0233\u0230\x03\x02\x02\x02\u0233\u0231\x03\x02\x02" +
		"\x02\u0233\u0232\x03\x02\x02\x02\u0234\xA7\x03\x02\x02\x027\xAF\xB8\xBE" +
		"\xC0\xC8\xCC\xD2\xDB\xDE\xE3\xEA\xF8\u0100\u0104\u010C\u010E\u011D\u011F" +
		"\u012E\u0131\u013A\u0147\u014C\u014F\u0153\u0157\u015A\u015F\u0166\u016E" +
		"\u0172\u017A\u0184\u0189\u018E\u0191\u01A2\u01D2\u01D6\u01DB\u01EF\u01F6" +
		"\u01FC\u0201\u0204\u020A\u020D\u0211\u021A\u021E\u0226\u022E\u0233";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HamelinParser.__ATN) {
			HamelinParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HamelinParser._serializedATN));
		}

		return HamelinParser.__ATN;
	}

}

export class CommandsContext extends ParserRuleContext {
	public from_command(): From_commandContext {
		return this.getRuleContext(0, From_commandContext);
	}
	public FROM_PIPE(): TerminalNode { return this.getToken(HamelinParser.FROM_PIPE, 0); }
	public search_command(): Search_commandContext {
		return this.getRuleContext(0, Search_commandContext);
	}
	public EOF(): TerminalNode { return this.getToken(HamelinParser.EOF, 0); }
	public command(): CommandContext[];
	public command(i: number): CommandContext;
	public command(i?: number): CommandContext | CommandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CommandContext);
		} else {
			return this.getRuleContext(i, CommandContext);
		}
	}
	public LUCENE_PIPE(): TerminalNode[];
	public LUCENE_PIPE(i: number): TerminalNode;
	public LUCENE_PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.LUCENE_PIPE);
		} else {
			return this.getToken(HamelinParser.LUCENE_PIPE, i);
		}
	}
	public PIPE_(): TerminalNode[];
	public PIPE_(i: number): TerminalNode;
	public PIPE_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.PIPE_);
		} else {
			return this.getToken(HamelinParser.PIPE_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_commands; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterCommands) {
			listener.enterCommands(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitCommands) {
			listener.exitCommands(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitCommands) {
			return visitor.visitCommands(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommandContext extends ParserRuleContext {
	public let_command(): Let_commandContext | undefined {
		return this.tryGetRuleContext(0, Let_commandContext);
	}
	public parse_command(): Parse_commandContext | undefined {
		return this.tryGetRuleContext(0, Parse_commandContext);
	}
	public limit_command(): Limit_commandContext | undefined {
		return this.tryGetRuleContext(0, Limit_commandContext);
	}
	public fields_command(): Fields_commandContext | undefined {
		return this.tryGetRuleContext(0, Fields_commandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_command; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterCommand) {
			listener.enterCommand(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitCommand) {
			listener.exitCommand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitCommand) {
			return visitor.visitCommand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_commandContext extends ParserRuleContext {
	public _earliest!: Earliest_expressionContext;
	public from_command_name(): From_command_nameContext {
		return this.getRuleContext(0, From_command_nameContext);
	}
	public dataset_ref(): Dataset_refContext {
		return this.getRuleContext(0, Dataset_refContext);
	}
	public earliest_expression(): Earliest_expressionContext | undefined {
		return this.tryGetRuleContext(0, Earliest_expressionContext);
	}
	public latest_expression(): Latest_expressionContext | undefined {
		return this.tryGetRuleContext(0, Latest_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_from_command; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterFrom_command) {
			listener.enterFrom_command(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitFrom_command) {
			listener.exitFrom_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitFrom_command) {
			return visitor.visitFrom_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_command_nameContext extends ParserRuleContext {
	public FROM_COMMAND(): TerminalNode { return this.getToken(HamelinParser.FROM_COMMAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_from_command_name; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterFrom_command_name) {
			listener.enterFrom_command_name(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitFrom_command_name) {
			listener.exitFrom_command_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitFrom_command_name) {
			return visitor.visitFrom_command_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dataset_refContext extends ParserRuleContext {
	public FROM_IDENTIFIER(): TerminalNode { return this.getToken(HamelinParser.FROM_IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_dataset_ref; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDataset_ref) {
			listener.enterDataset_ref(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDataset_ref) {
			listener.exitDataset_ref(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDataset_ref) {
			return visitor.visitDataset_ref(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Earliest_expressionContext extends ParserRuleContext {
	public FROM_RELATIVE_TIME_EXPRESSION(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.FROM_RELATIVE_TIME_EXPRESSION, 0); }
	public iso(): IsoContext | undefined {
		return this.tryGetRuleContext(0, IsoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_earliest_expression; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterEarliest_expression) {
			listener.enterEarliest_expression(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitEarliest_expression) {
			listener.exitEarliest_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitEarliest_expression) {
			return visitor.visitEarliest_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Latest_expressionContext extends ParserRuleContext {
	public FROM_RELATIVE_TIME_EXPRESSION(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.FROM_RELATIVE_TIME_EXPRESSION, 0); }
	public iso(): IsoContext | undefined {
		return this.tryGetRuleContext(0, IsoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_latest_expression; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLatest_expression) {
			listener.enterLatest_expression(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLatest_expression) {
			listener.exitLatest_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLatest_expression) {
			return visitor.visitLatest_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Search_commandContext extends ParserRuleContext {
	public ASTERISK_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ASTERISK_, 0); }
	public SEARCH_COMMAND(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.SEARCH_COMMAND, 0); }
	public luceneSearchQuery(): LuceneSearchQueryContext | undefined {
		return this.tryGetRuleContext(0, LuceneSearchQueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_search_command; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSearch_command) {
			listener.enterSearch_command(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSearch_command) {
			listener.exitSearch_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSearch_command) {
			return visitor.visitSearch_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_commandContext extends ParserRuleContext {
	public LET_COMMAND(): TerminalNode { return this.getToken(HamelinParser.LET_COMMAND, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public EQ_(): TerminalNode { return this.getToken(HamelinParser.EQ_, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_let_command; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLet_command) {
			listener.enterLet_command(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLet_command) {
			listener.exitLet_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLet_command) {
			return visitor.visitLet_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parse_commandContext extends ParserRuleContext {
	public _field_name!: IdentifierContext;
	public PARSE_COMMAND(): TerminalNode { return this.getToken(HamelinParser.PARSE_COMMAND, 0); }
	public parse_expressions(): Parse_expressionsContext {
		return this.getRuleContext(0, Parse_expressionsContext);
	}
	public AS_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.AS_KEYWORD, 0); }
	public field_names(): Field_namesContext | undefined {
		return this.tryGetRuleContext(0, Field_namesContext);
	}
	public ANCHOR_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ANCHOR_KEYWORD, 0); }
	public REGEX_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.REGEX_KEYWORD, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_parse_command; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterParse_command) {
			listener.enterParse_command(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitParse_command) {
			listener.exitParse_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitParse_command) {
			return visitor.visitParse_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parse_expressionsContext extends ParserRuleContext {
	public ESCAPED_STRING(): TerminalNode[];
	public ESCAPED_STRING(i: number): TerminalNode;
	public ESCAPED_STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ESCAPED_STRING);
		} else {
			return this.getToken(HamelinParser.ESCAPED_STRING, i);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.COMMA_);
		} else {
			return this.getToken(HamelinParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_parse_expressions; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterParse_expressions) {
			listener.enterParse_expressions(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitParse_expressions) {
			listener.exitParse_expressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitParse_expressions) {
			return visitor.visitParse_expressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Limit_commandContext extends ParserRuleContext {
	public _limit!: Token;
	public LIMIT_COMMAND(): TerminalNode { return this.getToken(HamelinParser.LIMIT_COMMAND, 0); }
	public INTEGER_VALUE_(): TerminalNode { return this.getToken(HamelinParser.INTEGER_VALUE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_limit_command; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLimit_command) {
			listener.enterLimit_command(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLimit_command) {
			listener.exitLimit_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLimit_command) {
			return visitor.visitLimit_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fields_commandContext extends ParserRuleContext {
	public FIELDS_COMMAND(): TerminalNode { return this.getToken(HamelinParser.FIELDS_COMMAND, 0); }
	public field_names(): Field_namesContext {
		return this.getRuleContext(0, Field_namesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_fields_command; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterFields_command) {
			listener.enterFields_command(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitFields_command) {
			listener.exitFields_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitFields_command) {
			return visitor.visitFields_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_namesContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.COMMA_);
		} else {
			return this.getToken(HamelinParser.COMMA_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_field_names; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterField_names) {
			listener.enterField_names(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitField_names) {
			listener.exitField_names(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitField_names) {
			return visitor.visitField_names(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_expression; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_booleanExpression; }
	public copyFrom(ctx: BooleanExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class PredicatedContext extends BooleanExpressionContext {
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	public predicate_(): Predicate_Context | undefined {
		return this.tryGetRuleContext(0, Predicate_Context);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterPredicated) {
			listener.enterPredicated(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitPredicated) {
			listener.exitPredicated(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitPredicated) {
			return visitor.visitPredicated(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalNotContext extends BooleanExpressionContext {
	public NOT_(): TerminalNode { return this.getToken(HamelinParser.NOT_, 0); }
	public booleanExpression(): BooleanExpressionContext {
		return this.getRuleContext(0, BooleanExpressionContext);
	}
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLogicalNot) {
			listener.enterLogicalNot(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLogicalNot) {
			listener.exitLogicalNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLogicalNot) {
			return visitor.visitLogicalNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndContext extends BooleanExpressionContext {
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public AND_(): TerminalNode { return this.getToken(HamelinParser.AND_, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitAnd) {
			return visitor.visitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrContext extends BooleanExpressionContext {
	public booleanExpression(): BooleanExpressionContext[];
	public booleanExpression(i: number): BooleanExpressionContext;
	public booleanExpression(i?: number): BooleanExpressionContext | BooleanExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BooleanExpressionContext);
		} else {
			return this.getRuleContext(i, BooleanExpressionContext);
		}
	}
	public OR_(): TerminalNode { return this.getToken(HamelinParser.OR_, 0); }
	constructor(ctx: BooleanExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitOr) {
			return visitor.visitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Predicate_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_predicate_; }
	public copyFrom(ctx: Predicate_Context): void {
		super.copyFrom(ctx);
	}
}
export class ComparisonContext extends Predicate_Context {
	public _right!: ValueExpressionContext;
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueExpression(): ValueExpressionContext {
		return this.getRuleContext(0, ValueExpressionContext);
	}
	constructor(ctx: Predicate_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterComparison) {
			listener.enterComparison(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitComparison) {
			listener.exitComparison(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitComparison) {
			return visitor.visitComparison(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_valueExpression; }
	public copyFrom(ctx: ValueExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueExpressionDefaultContext extends ValueExpressionContext {
	public primaryExpression(): PrimaryExpressionContext {
		return this.getRuleContext(0, PrimaryExpressionContext);
	}
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterValueExpressionDefault) {
			listener.enterValueExpressionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitValueExpressionDefault) {
			listener.exitValueExpressionDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitValueExpressionDefault) {
			return visitor.visitValueExpressionDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArithmeticBinaryContext extends ValueExpressionContext {
	public _left!: ValueExpressionContext;
	public _operator!: Token;
	public _right!: ValueExpressionContext;
	public valueExpression(): ValueExpressionContext[];
	public valueExpression(i: number): ValueExpressionContext;
	public valueExpression(i?: number): ValueExpressionContext | ValueExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueExpressionContext);
		} else {
			return this.getRuleContext(i, ValueExpressionContext);
		}
	}
	public ASTERISK_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ASTERISK_, 0); }
	public SLASH_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.SLASH_, 0); }
	public PERCENT_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.PERCENT_, 0); }
	public PLUS_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.PLUS_, 0); }
	public MINUS_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.MINUS_, 0); }
	constructor(ctx: ValueExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterArithmeticBinary) {
			listener.enterArithmeticBinary(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitArithmeticBinary) {
			listener.exitArithmeticBinary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitArithmeticBinary) {
			return visitor.visitArithmeticBinary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_primaryExpression; }
	public copyFrom(ctx: PrimaryExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class NullLiteralContext extends PrimaryExpressionContext {
	public NULL_(): TerminalNode { return this.getToken(HamelinParser.NULL_, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterNullLiteral) {
			listener.enterNullLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitNullLiteral) {
			listener.exitNullLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitNullLiteral) {
			return visitor.visitNullLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumericLiteralContext extends PrimaryExpressionContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends PrimaryExpressionContext {
	public booleanValue(): BooleanValueContext {
		return this.getRuleContext(0, BooleanValueContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends PrimaryExpressionContext {
	public string_(): String_Context {
		return this.getRuleContext(0, String_Context);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryLiteralContext extends PrimaryExpressionContext {
	public BINARY_LITERAL_(): TerminalNode { return this.getToken(HamelinParser.BINARY_LITERAL_, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterBinaryLiteral) {
			listener.enterBinaryLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitBinaryLiteral) {
			listener.exitBinaryLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitBinaryLiteral) {
			return visitor.visitBinaryLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallContext extends PrimaryExpressionContext {
	public qualifiedName(): QualifiedNameContext {
		return this.getRuleContext(0, QualifiedNameContext);
	}
	public LPAREN_(): TerminalNode { return this.getToken(HamelinParser.LPAREN_, 0); }
	public RPAREN_(): TerminalNode { return this.getToken(HamelinParser.RPAREN_, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA_(): TerminalNode[];
	public COMMA_(i: number): TerminalNode;
	public COMMA_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.COMMA_);
		} else {
			return this.getToken(HamelinParser.COMMA_, i);
		}
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ColumnReferenceContext extends PrimaryExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterColumnReference) {
			listener.enterColumnReference(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitColumnReference) {
			listener.exitColumnReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitColumnReference) {
			return visitor.visitColumnReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends PrimaryExpressionContext {
	public LPAREN_(): TerminalNode { return this.getToken(HamelinParser.LPAREN_, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN_(): TerminalNode { return this.getToken(HamelinParser.RPAREN_, 0); }
	constructor(ctx: PrimaryExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_Context extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_string_; }
	public copyFrom(ctx: String_Context): void {
		super.copyFrom(ctx);
	}
}
export class EscapedStringLiteralContext extends String_Context {
	public ESCAPED_STRING(): TerminalNode { return this.getToken(HamelinParser.ESCAPED_STRING, 0); }
	constructor(ctx: String_Context) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterEscapedStringLiteral) {
			listener.enterEscapedStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitEscapedStringLiteral) {
			listener.exitEscapedStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitEscapedStringLiteral) {
			return visitor.visitEscapedStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public EQ_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.EQ_, 0); }
	public NEQ_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.NEQ_, 0); }
	public LT_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.LT_, 0); }
	public LTE_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.LTE_, 0); }
	public GT_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.GT_, 0); }
	public GTE_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.GTE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.TRUE_, 0); }
	public FALSE_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.FALSE_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitBooleanValue) {
			return visitor.visitBooleanValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class QualifiedNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT_(): TerminalNode[];
	public DOT_(i: number): TerminalNode;
	public DOT_(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.DOT_);
		} else {
			return this.getToken(HamelinParser.DOT_, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_qualifiedName; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterQualifiedName) {
			listener.enterQualifiedName(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitQualifiedName) {
			listener.exitQualifiedName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitQualifiedName) {
			return visitor.visitQualifiedName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_identifier; }
	public copyFrom(ctx: IdentifierContext): void {
		super.copyFrom(ctx);
	}
}
export class UnquotedIdentifierContext extends IdentifierContext {
	public IDENTIFIER_(): TerminalNode { return this.getToken(HamelinParser.IDENTIFIER_, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterUnquotedIdentifier) {
			listener.enterUnquotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitUnquotedIdentifier) {
			listener.exitUnquotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitUnquotedIdentifier) {
			return visitor.visitUnquotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class QuotedIdentifierContext extends IdentifierContext {
	public QUOTED_IDENTIFIER_(): TerminalNode { return this.getToken(HamelinParser.QUOTED_IDENTIFIER_, 0); }
	constructor(ctx: IdentifierContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterQuotedIdentifier) {
			listener.enterQuotedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitQuotedIdentifier) {
			listener.exitQuotedIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitQuotedIdentifier) {
			return visitor.visitQuotedIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_number; }
	public copyFrom(ctx: NumberContext): void {
		super.copyFrom(ctx);
	}
}
export class DecimalLiteralContext extends NumberContext {
	public DECIMAL_VALUE_(): TerminalNode { return this.getToken(HamelinParser.DECIMAL_VALUE_, 0); }
	public MINUS_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.MINUS_, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDecimalLiteral) {
			listener.enterDecimalLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDecimalLiteral) {
			listener.exitDecimalLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDecimalLiteral) {
			return visitor.visitDecimalLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoubleLiteralContext extends NumberContext {
	public DOUBLE_VALUE_(): TerminalNode { return this.getToken(HamelinParser.DOUBLE_VALUE_, 0); }
	public MINUS_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.MINUS_, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDoubleLiteral) {
			listener.enterDoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDoubleLiteral) {
			listener.exitDoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDoubleLiteral) {
			return visitor.visitDoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerLiteralContext extends NumberContext {
	public INTEGER_VALUE_(): TerminalNode { return this.getToken(HamelinParser.INTEGER_VALUE_, 0); }
	public MINUS_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.MINUS_, 0); }
	constructor(ctx: NumberContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterIntegerLiteral) {
			listener.enterIntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitIntegerLiteral) {
			listener.exitIntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitIntegerLiteral) {
			return visitor.visitIntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneSearchQueryContext extends ParserRuleContext {
	public luceneDisjQuery(): LuceneDisjQueryContext[];
	public luceneDisjQuery(i: number): LuceneDisjQueryContext;
	public luceneDisjQuery(i?: number): LuceneDisjQueryContext | LuceneDisjQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LuceneDisjQueryContext);
		} else {
			return this.getRuleContext(i, LuceneDisjQueryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneSearchQuery; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneSearchQuery) {
			listener.enterLuceneSearchQuery(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneSearchQuery) {
			listener.exitLuceneSearchQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneSearchQuery) {
			return visitor.visitLuceneSearchQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneDisjQueryContext extends ParserRuleContext {
	public luceneConjQuery(): LuceneConjQueryContext[];
	public luceneConjQuery(i: number): LuceneConjQueryContext;
	public luceneConjQuery(i?: number): LuceneConjQueryContext | LuceneConjQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LuceneConjQueryContext);
		} else {
			return this.getRuleContext(i, LuceneConjQueryContext);
		}
	}
	public LUCENE_OR(): TerminalNode[];
	public LUCENE_OR(i: number): TerminalNode;
	public LUCENE_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.LUCENE_OR);
		} else {
			return this.getToken(HamelinParser.LUCENE_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneDisjQuery; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneDisjQuery) {
			listener.enterLuceneDisjQuery(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneDisjQuery) {
			listener.exitLuceneDisjQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneDisjQuery) {
			return visitor.visitLuceneDisjQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneConjQueryContext extends ParserRuleContext {
	public luceneModClause(): LuceneModClauseContext[];
	public luceneModClause(i: number): LuceneModClauseContext;
	public luceneModClause(i?: number): LuceneModClauseContext | LuceneModClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LuceneModClauseContext);
		} else {
			return this.getRuleContext(i, LuceneModClauseContext);
		}
	}
	public LUCENE_AND(): TerminalNode[];
	public LUCENE_AND(i: number): TerminalNode;
	public LUCENE_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.LUCENE_AND);
		} else {
			return this.getToken(HamelinParser.LUCENE_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneConjQuery; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneConjQuery) {
			listener.enterLuceneConjQuery(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneConjQuery) {
			listener.exitLuceneConjQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneConjQuery) {
			return visitor.visitLuceneConjQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneModClauseContext extends ParserRuleContext {
	public luceneClause(): LuceneClauseContext {
		return this.getRuleContext(0, LuceneClauseContext);
	}
	public luceneModifier(): LuceneModifierContext | undefined {
		return this.tryGetRuleContext(0, LuceneModifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneModClause; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneModClause) {
			listener.enterLuceneModClause(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneModClause) {
			listener.exitLuceneModClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneModClause) {
			return visitor.visitLuceneModClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneModifierContext extends ParserRuleContext {
	public PLUS_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.PLUS_, 0); }
	public MINUS_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.MINUS_, 0); }
	public LUCENE_NOT(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.LUCENE_NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneModifier; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneModifier) {
			listener.enterLuceneModifier(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneModifier) {
			listener.exitLuceneModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneModifier) {
			return visitor.visitLuceneModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneClauseContext extends ParserRuleContext {
	public luceneTerm(): LuceneTermContext | undefined {
		return this.tryGetRuleContext(0, LuceneTermContext);
	}
	public luceneGroupingExpr(): LuceneGroupingExprContext | undefined {
		return this.tryGetRuleContext(0, LuceneGroupingExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneClause; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneClause) {
			listener.enterLuceneClause(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneClause) {
			listener.exitLuceneClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneClause) {
			return visitor.visitLuceneClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneFieldNameContext extends ParserRuleContext {
	public IDENTIFIER_(): TerminalNode { return this.getToken(HamelinParser.IDENTIFIER_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneFieldName; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneFieldName) {
			listener.enterLuceneFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneFieldName) {
			listener.exitLuceneFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneFieldName) {
			return visitor.visitLuceneFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneGroupingExprContext extends ParserRuleContext {
	public LPAREN_(): TerminalNode { return this.getToken(HamelinParser.LPAREN_, 0); }
	public luceneSearchQuery(): LuceneSearchQueryContext {
		return this.getRuleContext(0, LuceneSearchQueryContext);
	}
	public RPAREN_(): TerminalNode { return this.getToken(HamelinParser.RPAREN_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneGroupingExpr; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneGroupingExpr) {
			listener.enterLuceneGroupingExpr(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneGroupingExpr) {
			listener.exitLuceneGroupingExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneGroupingExpr) {
			return visitor.visitLuceneGroupingExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LuceneTermContext extends ParserRuleContext {
	public INTEGER_VALUE_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.INTEGER_VALUE_, 0); }
	public DECIMAL_VALUE_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.DECIMAL_VALUE_, 0); }
	public DOUBLE_VALUE_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.DOUBLE_VALUE_, 0); }
	public LUCENE_TERM(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.LUCENE_TERM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_luceneTerm; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLuceneTerm) {
			listener.enterLuceneTerm(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLuceneTerm) {
			listener.exitLuceneTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLuceneTerm) {
			return visitor.visitLuceneTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int_Context extends ParserRuleContext {
	public ISO_DIGIT(): TerminalNode[];
	public ISO_DIGIT(i: number): TerminalNode;
	public ISO_DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_DIGIT);
		} else {
			return this.getToken(HamelinParser.ISO_DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_int_; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterInt_) {
			listener.enterInt_(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitInt_) {
			listener.exitInt_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitInt_) {
			return visitor.visitInt_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecContext extends ParserRuleContext {
	public ISO_DIGIT(): TerminalNode[];
	public ISO_DIGIT(i: number): TerminalNode;
	public ISO_DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_DIGIT);
		} else {
			return this.getToken(HamelinParser.ISO_DIGIT, i);
		}
	}
	public ISO_FRACTION(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ISO_FRACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_dec; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDec) {
			listener.enterDec(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDec) {
			listener.exitDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDec) {
			return visitor.visitDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int2Context extends ParserRuleContext {
	public ISO_DIGIT(): TerminalNode[];
	public ISO_DIGIT(i: number): TerminalNode;
	public ISO_DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_DIGIT);
		} else {
			return this.getToken(HamelinParser.ISO_DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_int2; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterInt2) {
			listener.enterInt2(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitInt2) {
			listener.exitInt2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitInt2) {
			return visitor.visitInt2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int3Context extends ParserRuleContext {
	public ISO_DIGIT(): TerminalNode[];
	public ISO_DIGIT(i: number): TerminalNode;
	public ISO_DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_DIGIT);
		} else {
			return this.getToken(HamelinParser.ISO_DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_int3; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterInt3) {
			listener.enterInt3(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitInt3) {
			listener.exitInt3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitInt3) {
			return visitor.visitInt3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Int4Context extends ParserRuleContext {
	public ISO_DIGIT(): TerminalNode[];
	public ISO_DIGIT(i: number): TerminalNode;
	public ISO_DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_DIGIT);
		} else {
			return this.getToken(HamelinParser.ISO_DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_int4; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterInt4) {
			listener.enterInt4(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitInt4) {
			listener.exitInt4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitInt4) {
			return visitor.visitInt4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Dec2Context extends ParserRuleContext {
	public ISO_DIGIT(): TerminalNode[];
	public ISO_DIGIT(i: number): TerminalNode;
	public ISO_DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_DIGIT);
		} else {
			return this.getToken(HamelinParser.ISO_DIGIT, i);
		}
	}
	public ISO_FRACTION(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ISO_FRACTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_dec2; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDec2) {
			listener.enterDec2(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDec2) {
			listener.exitDec2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDec2) {
			return visitor.visitDec2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CenturyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_century; }
	public copyFrom(ctx: CenturyContext): void {
		super.copyFrom(ctx);
	}
}
export class CompleteCenturyContext extends CenturyContext {
	public int2(): Int2Context {
		return this.getRuleContext(0, Int2Context);
	}
	constructor(ctx: CenturyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterCompleteCentury) {
			listener.enterCompleteCentury(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitCompleteCentury) {
			listener.exitCompleteCentury(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitCompleteCentury) {
			return visitor.visitCompleteCentury(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class YearContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_year; }
	public copyFrom(ctx: YearContext): void {
		super.copyFrom(ctx);
	}
}
export class CompleteYearContext extends YearContext {
	public int4(): Int4Context {
		return this.getRuleContext(0, Int4Context);
	}
	constructor(ctx: YearContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterCompleteYear) {
			listener.enterCompleteYear(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitCompleteYear) {
			listener.exitCompleteYear(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitCompleteYear) {
			return visitor.visitCompleteYear(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MonthContext extends ParserRuleContext {
	public int2(): Int2Context {
		return this.getRuleContext(0, Int2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_month; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterMonth) {
			listener.enterMonth(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitMonth) {
			listener.exitMonth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitMonth) {
			return visitor.visitMonth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DayContext extends ParserRuleContext {
	public int2(): Int2Context {
		return this.getRuleContext(0, Int2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_day; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDay) {
			listener.enterDay(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDay) {
			listener.exitDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDay) {
			return visitor.visitDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrdinalDayContext extends ParserRuleContext {
	public int3(): Int3Context {
		return this.getRuleContext(0, Int3Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_ordinalDay; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterOrdinalDay) {
			listener.enterOrdinalDay(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitOrdinalDay) {
			listener.exitOrdinalDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitOrdinalDay) {
			return visitor.visitOrdinalDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WeekContext extends ParserRuleContext {
	public int2(): Int2Context {
		return this.getRuleContext(0, Int2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_week; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterWeek) {
			listener.enterWeek(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitWeek) {
			listener.exitWeek(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitWeek) {
			return visitor.visitWeek(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WeekDayContext extends ParserRuleContext {
	public ISO_DIGIT(): TerminalNode { return this.getToken(HamelinParser.ISO_DIGIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_weekDay; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterWeekDay) {
			listener.enterWeekDay(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitWeekDay) {
			listener.exitWeekDay(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitWeekDay) {
			return visitor.visitWeekDay(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HourContext extends ParserRuleContext {
	public int2(): Int2Context {
		return this.getRuleContext(0, Int2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_hour; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterHour) {
			listener.enterHour(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitHour) {
			listener.exitHour(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitHour) {
			return visitor.visitHour(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MinuteContext extends ParserRuleContext {
	public int2(): Int2Context {
		return this.getRuleContext(0, Int2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_minute; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterMinute) {
			listener.enterMinute(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitMinute) {
			listener.exitMinute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitMinute) {
			return visitor.visitMinute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SecondContext extends ParserRuleContext {
	public int2(): Int2Context {
		return this.getRuleContext(0, Int2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_second; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSecond) {
			listener.enterSecond(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSecond) {
			listener.exitSecond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSecond) {
			return visitor.visitSecond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class HourFractionContext extends ParserRuleContext {
	public dec2(): Dec2Context {
		return this.getRuleContext(0, Dec2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_hourFraction; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterHourFraction) {
			listener.enterHourFraction(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitHourFraction) {
			listener.exitHourFraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitHourFraction) {
			return visitor.visitHourFraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MinuteFractionContext extends ParserRuleContext {
	public dec2(): Dec2Context {
		return this.getRuleContext(0, Dec2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_minuteFraction; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterMinuteFraction) {
			listener.enterMinuteFraction(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitMinuteFraction) {
			listener.exitMinuteFraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitMinuteFraction) {
			return visitor.visitMinuteFraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SecondFractionContext extends ParserRuleContext {
	public dec2(): Dec2Context {
		return this.getRuleContext(0, Dec2Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_secondFraction; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSecondFraction) {
			listener.enterSecondFraction(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSecondFraction) {
			listener.exitSecondFraction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSecondFraction) {
			return visitor.visitSecondFraction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalendarDateContext extends ParserRuleContext {
	public calendarDateExtended(): CalendarDateExtendedContext {
		return this.getRuleContext(0, CalendarDateExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_calendarDate; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterCalendarDate) {
			listener.enterCalendarDate(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitCalendarDate) {
			listener.exitCalendarDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitCalendarDate) {
			return visitor.visitCalendarDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CalendarDateExtendedContext extends ParserRuleContext {
	public year(): YearContext {
		return this.getRuleContext(0, YearContext);
	}
	public ISO_MINUS(): TerminalNode[];
	public ISO_MINUS(i: number): TerminalNode;
	public ISO_MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_MINUS);
		} else {
			return this.getToken(HamelinParser.ISO_MINUS, i);
		}
	}
	public month(): MonthContext {
		return this.getRuleContext(0, MonthContext);
	}
	public day(): DayContext {
		return this.getRuleContext(0, DayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_calendarDateExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterCalendarDateExtended) {
			listener.enterCalendarDateExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitCalendarDateExtended) {
			listener.exitCalendarDateExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitCalendarDateExtended) {
			return visitor.visitCalendarDateExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificMonthCalendarDateContext extends ParserRuleContext {
	public year(): YearContext {
		return this.getRuleContext(0, YearContext);
	}
	public ISO_MINUS(): TerminalNode { return this.getToken(HamelinParser.ISO_MINUS, 0); }
	public month(): MonthContext {
		return this.getRuleContext(0, MonthContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_specificMonthCalendarDate; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSpecificMonthCalendarDate) {
			listener.enterSpecificMonthCalendarDate(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSpecificMonthCalendarDate) {
			listener.exitSpecificMonthCalendarDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSpecificMonthCalendarDate) {
			return visitor.visitSpecificMonthCalendarDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificYearCalendarDateContext extends ParserRuleContext {
	public year(): YearContext {
		return this.getRuleContext(0, YearContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_specificYearCalendarDate; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSpecificYearCalendarDate) {
			listener.enterSpecificYearCalendarDate(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSpecificYearCalendarDate) {
			listener.exitSpecificYearCalendarDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSpecificYearCalendarDate) {
			return visitor.visitSpecificYearCalendarDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatePreciseContext extends ParserRuleContext {
	public datePreciseExtended(): DatePreciseExtendedContext {
		return this.getRuleContext(0, DatePreciseExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_datePrecise; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDatePrecise) {
			listener.enterDatePrecise(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDatePrecise) {
			listener.exitDatePrecise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDatePrecise) {
			return visitor.visitDatePrecise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatePreciseExtendedContext extends ParserRuleContext {
	public calendarDateExtended(): CalendarDateExtendedContext {
		return this.getRuleContext(0, CalendarDateExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_datePreciseExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDatePreciseExtended) {
			listener.enterDatePreciseExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDatePreciseExtended) {
			listener.exitDatePreciseExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDatePreciseExtended) {
			return visitor.visitDatePreciseExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateContext extends ParserRuleContext {
	public dateBasic(): DateBasicContext | undefined {
		return this.tryGetRuleContext(0, DateBasicContext);
	}
	public dateExtended(): DateExtendedContext | undefined {
		return this.tryGetRuleContext(0, DateExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_date; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDate) {
			listener.enterDate(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDate) {
			listener.exitDate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDate) {
			return visitor.visitDate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateBasicContext extends ParserRuleContext {
	public specificMonthCalendarDate(): SpecificMonthCalendarDateContext | undefined {
		return this.tryGetRuleContext(0, SpecificMonthCalendarDateContext);
	}
	public specificYearCalendarDate(): SpecificYearCalendarDateContext | undefined {
		return this.tryGetRuleContext(0, SpecificYearCalendarDateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_dateBasic; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDateBasic) {
			listener.enterDateBasic(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDateBasic) {
			listener.exitDateBasic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDateBasic) {
			return visitor.visitDateBasic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateExtendedContext extends ParserRuleContext {
	public datePreciseExtended(): DatePreciseExtendedContext | undefined {
		return this.tryGetRuleContext(0, DatePreciseExtendedContext);
	}
	public specificMonthCalendarDate(): SpecificMonthCalendarDateContext | undefined {
		return this.tryGetRuleContext(0, SpecificMonthCalendarDateContext);
	}
	public specificYearCalendarDate(): SpecificYearCalendarDateContext | undefined {
		return this.tryGetRuleContext(0, SpecificYearCalendarDateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_dateExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDateExtended) {
			listener.enterDateExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDateExtended) {
			listener.exitDateExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDateExtended) {
			return visitor.visitDateExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimePreciseContext extends ParserRuleContext {
	public localTimePreciseExtended(): LocalTimePreciseExtendedContext {
		return this.getRuleContext(0, LocalTimePreciseExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTimePrecise; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTimePrecise) {
			listener.enterLocalTimePrecise(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTimePrecise) {
			listener.exitLocalTimePrecise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTimePrecise) {
			return visitor.visitLocalTimePrecise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimePreciseExtendedContext extends ParserRuleContext {
	public hour(): HourContext {
		return this.getRuleContext(0, HourContext);
	}
	public ISO_COLON(): TerminalNode[];
	public ISO_COLON(i: number): TerminalNode;
	public ISO_COLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HamelinParser.ISO_COLON);
		} else {
			return this.getToken(HamelinParser.ISO_COLON, i);
		}
	}
	public minute(): MinuteContext {
		return this.getRuleContext(0, MinuteContext);
	}
	public secondFraction(): SecondFractionContext {
		return this.getRuleContext(0, SecondFractionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTimePreciseExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTimePreciseExtended) {
			listener.enterLocalTimePreciseExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTimePreciseExtended) {
			listener.exitLocalTimePreciseExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTimePreciseExtended) {
			return visitor.visitLocalTimePreciseExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificMinuteLocalTimeContext extends ParserRuleContext {
	public specificMinuteLocalTimeExtended(): SpecificMinuteLocalTimeExtendedContext {
		return this.getRuleContext(0, SpecificMinuteLocalTimeExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_specificMinuteLocalTime; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSpecificMinuteLocalTime) {
			listener.enterSpecificMinuteLocalTime(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSpecificMinuteLocalTime) {
			listener.exitSpecificMinuteLocalTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSpecificMinuteLocalTime) {
			return visitor.visitSpecificMinuteLocalTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificMinuteLocalTimeExtendedContext extends ParserRuleContext {
	public hour(): HourContext {
		return this.getRuleContext(0, HourContext);
	}
	public ISO_COLON(): TerminalNode { return this.getToken(HamelinParser.ISO_COLON, 0); }
	public minuteFraction(): MinuteFractionContext {
		return this.getRuleContext(0, MinuteFractionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_specificMinuteLocalTimeExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSpecificMinuteLocalTimeExtended) {
			listener.enterSpecificMinuteLocalTimeExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSpecificMinuteLocalTimeExtended) {
			listener.exitSpecificMinuteLocalTimeExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSpecificMinuteLocalTimeExtended) {
			return visitor.visitSpecificMinuteLocalTimeExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecificHourLocalTimeContext extends ParserRuleContext {
	public hourFraction(): HourFractionContext {
		return this.getRuleContext(0, HourFractionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_specificHourLocalTime; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterSpecificHourLocalTime) {
			listener.enterSpecificHourLocalTime(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitSpecificHourLocalTime) {
			listener.exitSpecificHourLocalTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitSpecificHourLocalTime) {
			return visitor.visitSpecificHourLocalTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimeContext extends ParserRuleContext {
	public localTimeBasic(): LocalTimeBasicContext | undefined {
		return this.tryGetRuleContext(0, LocalTimeBasicContext);
	}
	public localTimeExtended(): LocalTimeExtendedContext | undefined {
		return this.tryGetRuleContext(0, LocalTimeExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTime; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTime) {
			listener.enterLocalTime(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTime) {
			listener.exitLocalTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTime) {
			return visitor.visitLocalTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimeBasicContext extends ParserRuleContext {
	public specificHourLocalTime(): SpecificHourLocalTimeContext {
		return this.getRuleContext(0, SpecificHourLocalTimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTimeBasic; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTimeBasic) {
			listener.enterLocalTimeBasic(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTimeBasic) {
			listener.exitLocalTimeBasic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTimeBasic) {
			return visitor.visitLocalTimeBasic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimeExtendedContext extends ParserRuleContext {
	public localTimePreciseExtended(): LocalTimePreciseExtendedContext | undefined {
		return this.tryGetRuleContext(0, LocalTimePreciseExtendedContext);
	}
	public specificMinuteLocalTimeExtended(): SpecificMinuteLocalTimeExtendedContext | undefined {
		return this.tryGetRuleContext(0, SpecificMinuteLocalTimeExtendedContext);
	}
	public specificHourLocalTime(): SpecificHourLocalTimeContext | undefined {
		return this.tryGetRuleContext(0, SpecificHourLocalTimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTimeExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTimeExtended) {
			listener.enterLocalTimeExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTimeExtended) {
			listener.exitLocalTimeExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTimeExtended) {
			return visitor.visitLocalTimeExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneUtcContext extends ParserRuleContext {
	public ISO_Z(): TerminalNode { return this.getToken(HamelinParser.ISO_Z, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_timeZoneUtc; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterTimeZoneUtc) {
			listener.enterTimeZoneUtc(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitTimeZoneUtc) {
			listener.exitTimeZoneUtc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitTimeZoneUtc) {
			return visitor.visitTimeZoneUtc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneContext extends ParserRuleContext {
	public timeZoneBasic(): TimeZoneBasicContext | undefined {
		return this.tryGetRuleContext(0, TimeZoneBasicContext);
	}
	public timeZoneExtended(): TimeZoneExtendedContext | undefined {
		return this.tryGetRuleContext(0, TimeZoneExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_timeZone; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterTimeZone) {
			listener.enterTimeZone(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitTimeZone) {
			listener.exitTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitTimeZone) {
			return visitor.visitTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneBasicContext extends ParserRuleContext {
	public hour(): HourContext | undefined {
		return this.tryGetRuleContext(0, HourContext);
	}
	public ISO_PLUS(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ISO_PLUS, 0); }
	public ISO_MINUS(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ISO_MINUS, 0); }
	public minute(): MinuteContext | undefined {
		return this.tryGetRuleContext(0, MinuteContext);
	}
	public timeZoneUtc(): TimeZoneUtcContext | undefined {
		return this.tryGetRuleContext(0, TimeZoneUtcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_timeZoneBasic; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterTimeZoneBasic) {
			listener.enterTimeZoneBasic(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitTimeZoneBasic) {
			listener.exitTimeZoneBasic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitTimeZoneBasic) {
			return visitor.visitTimeZoneBasic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeZoneExtendedContext extends ParserRuleContext {
	public hour(): HourContext | undefined {
		return this.tryGetRuleContext(0, HourContext);
	}
	public ISO_PLUS(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ISO_PLUS, 0); }
	public ISO_MINUS(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ISO_MINUS, 0); }
	public COLON_(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.COLON_, 0); }
	public minute(): MinuteContext | undefined {
		return this.tryGetRuleContext(0, MinuteContext);
	}
	public timeZoneUtc(): TimeZoneUtcContext | undefined {
		return this.tryGetRuleContext(0, TimeZoneUtcContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_timeZoneExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterTimeZoneExtended) {
			listener.enterTimeZoneExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitTimeZoneExtended) {
			listener.exitTimeZoneExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitTimeZoneExtended) {
			return visitor.visitTimeZoneExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimeAndTimeZoneContext extends ParserRuleContext {
	public localTimeAndTimeZoneBasic(): LocalTimeAndTimeZoneBasicContext | undefined {
		return this.tryGetRuleContext(0, LocalTimeAndTimeZoneBasicContext);
	}
	public localTimeAndTimeZoneExtended(): LocalTimeAndTimeZoneExtendedContext | undefined {
		return this.tryGetRuleContext(0, LocalTimeAndTimeZoneExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTimeAndTimeZone; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTimeAndTimeZone) {
			listener.enterLocalTimeAndTimeZone(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTimeAndTimeZone) {
			listener.exitLocalTimeAndTimeZone(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTimeAndTimeZone) {
			return visitor.visitLocalTimeAndTimeZone(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimeAndTimeZoneBasicContext extends ParserRuleContext {
	public localTimeBasic(): LocalTimeBasicContext {
		return this.getRuleContext(0, LocalTimeBasicContext);
	}
	public timeZoneBasic(): TimeZoneBasicContext {
		return this.getRuleContext(0, TimeZoneBasicContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTimeAndTimeZoneBasic; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTimeAndTimeZoneBasic) {
			listener.enterLocalTimeAndTimeZoneBasic(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTimeAndTimeZoneBasic) {
			listener.exitLocalTimeAndTimeZoneBasic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTimeAndTimeZoneBasic) {
			return visitor.visitLocalTimeAndTimeZoneBasic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LocalTimeAndTimeZoneExtendedContext extends ParserRuleContext {
	public localTimeExtended(): LocalTimeExtendedContext {
		return this.getRuleContext(0, LocalTimeExtendedContext);
	}
	public timeZoneExtended(): TimeZoneExtendedContext {
		return this.getRuleContext(0, TimeZoneExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_localTimeAndTimeZoneExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterLocalTimeAndTimeZoneExtended) {
			listener.enterLocalTimeAndTimeZoneExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitLocalTimeAndTimeZoneExtended) {
			listener.exitLocalTimeAndTimeZoneExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitLocalTimeAndTimeZoneExtended) {
			return visitor.visitLocalTimeAndTimeZoneExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeContext extends ParserRuleContext {
	public localTime(): LocalTimeContext {
		return this.getRuleContext(0, LocalTimeContext);
	}
	public ISO_T(): TerminalNode | undefined { return this.tryGetToken(HamelinParser.ISO_T, 0); }
	public timeZone(): TimeZoneContext | undefined {
		return this.tryGetRuleContext(0, TimeZoneContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_time; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterTime) {
			listener.enterTime(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitTime) {
			listener.exitTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitTime) {
			return visitor.visitTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatetimePreciseContext extends ParserRuleContext {
	public datetimePreciseExtended(): DatetimePreciseExtendedContext {
		return this.getRuleContext(0, DatetimePreciseExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_datetimePrecise; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDatetimePrecise) {
			listener.enterDatetimePrecise(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDatetimePrecise) {
			listener.exitDatetimePrecise(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDatetimePrecise) {
			return visitor.visitDatetimePrecise(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatetimePreciseExtendedContext extends ParserRuleContext {
	public calendarDateExtended(): CalendarDateExtendedContext {
		return this.getRuleContext(0, CalendarDateExtendedContext);
	}
	public ISO_T(): TerminalNode { return this.getToken(HamelinParser.ISO_T, 0); }
	public localTimePreciseExtended(): LocalTimePreciseExtendedContext {
		return this.getRuleContext(0, LocalTimePreciseExtendedContext);
	}
	public timeZoneExtended(): TimeZoneExtendedContext | undefined {
		return this.tryGetRuleContext(0, TimeZoneExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_datetimePreciseExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDatetimePreciseExtended) {
			listener.enterDatetimePreciseExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDatetimePreciseExtended) {
			listener.exitDatetimePreciseExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDatetimePreciseExtended) {
			return visitor.visitDatetimePreciseExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatetimeContext extends ParserRuleContext {
	public datetimeExtended(): DatetimeExtendedContext {
		return this.getRuleContext(0, DatetimeExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_datetime; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDatetime) {
			listener.enterDatetime(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDatetime) {
			listener.exitDatetime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDatetime) {
			return visitor.visitDatetime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatetimeExtendedContext extends ParserRuleContext {
	public datePreciseExtended(): DatePreciseExtendedContext {
		return this.getRuleContext(0, DatePreciseExtendedContext);
	}
	public ISO_T(): TerminalNode { return this.getToken(HamelinParser.ISO_T, 0); }
	public localTimeExtended(): LocalTimeExtendedContext {
		return this.getRuleContext(0, LocalTimeExtendedContext);
	}
	public timeZoneExtended(): TimeZoneExtendedContext | undefined {
		return this.tryGetRuleContext(0, TimeZoneExtendedContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_datetimeExtended; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterDatetimeExtended) {
			listener.enterDatetimeExtended(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitDatetimeExtended) {
			listener.exitDatetimeExtended(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitDatetimeExtended) {
			return visitor.visitDatetimeExtended(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsoContext extends ParserRuleContext {
	public time(): TimeContext | undefined {
		return this.tryGetRuleContext(0, TimeContext);
	}
	public date(): DateContext | undefined {
		return this.tryGetRuleContext(0, DateContext);
	}
	public datetime(): DatetimeContext | undefined {
		return this.tryGetRuleContext(0, DatetimeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HamelinParser.RULE_iso; }
	// @Override
	public enterRule(listener: HamelinParserListener): void {
		if (listener.enterIso) {
			listener.enterIso(this);
		}
	}
	// @Override
	public exitRule(listener: HamelinParserListener): void {
		if (listener.exitIso) {
			listener.exitIso(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HamelinParserVisitor<Result>): Result {
		if (visitor.visitIso) {
			return visitor.visitIso(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


