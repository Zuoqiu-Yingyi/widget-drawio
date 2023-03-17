import { g as T, l as Ke, e as x, f as P } from "./config-0b7a4e7d.js";
import { u as Ie } from "./utils-c190d844.js";
import { m as Ye } from "./mermaidAPI-aff5a93a.js";
import { s as je, g as Xe, a as Qe, b as qe, d as He, e as We, f as Je } from "./commonDb-9eb4b6e7.js";
var ae = function() {
  var e = function(S, u, r, l) {
    for (r = r || {}, l = S.length; l--; r[S[l]] = u)
      ;
    return r;
  }, n = [1, 3], c = [1, 7], o = [1, 8], h = [1, 9], E = [1, 10], p = [1, 13], b = [1, 12], D = [1, 16, 25], Ae = [1, 20], fe = [1, 32], de = [1, 33], pe = [1, 34], Ee = [1, 36], Ce = [1, 39], ge = [1, 37], ke = [1, 38], me = [1, 44], Fe = [1, 45], De = [1, 40], _e = [1, 41], be = [1, 42], Be = [1, 43], C = [1, 48], g = [1, 49], k = [1, 50], F = [1, 51], a = [16, 25], M = [1, 65], U = [1, 66], z = [1, 67], K = [1, 68], Y = [1, 69], J = [1, 70], Z = [1, 71], ye = [1, 80], I = [16, 25, 32, 45, 46, 54, 60, 61, 62, 63, 64, 65, 66, 71, 73], $ = [16, 25, 30, 32, 45, 46, 50, 54, 60, 61, 62, 63, 64, 65, 66, 71, 73, 88, 89, 90, 91], Te = [5, 8, 9, 10, 11, 16, 19, 23, 25], j = [54, 88, 89, 90, 91], O = [54, 65, 66, 88, 89, 90, 91], Se = [54, 60, 61, 62, 63, 64, 88, 89, 90, 91], X = [16, 25, 32], ee = [1, 107], te = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, mermaidDoc: 4, statments: 5, direction: 6, directive: 7, direction_tb: 8, direction_bt: 9, direction_rl: 10, direction_lr: 11, graphConfig: 12, openDirective: 13, typeDirective: 14, closeDirective: 15, NEWLINE: 16, ":": 17, argDirective: 18, open_directive: 19, type_directive: 20, arg_directive: 21, close_directive: 22, CLASS_DIAGRAM: 23, statements: 24, EOF: 25, statement: 26, className: 27, alphaNumToken: 28, classLiteralName: 29, GENERICTYPE: 30, relationStatement: 31, LABEL: 32, classStatement: 33, methodStatement: 34, annotationStatement: 35, clickStatement: 36, cssClassStatement: 37, noteStatement: 38, acc_title: 39, acc_title_value: 40, acc_descr: 41, acc_descr_value: 42, acc_descr_multiline_value: 43, CLASS: 44, STYLE_SEPARATOR: 45, STRUCT_START: 46, members: 47, STRUCT_STOP: 48, ANNOTATION_START: 49, ANNOTATION_END: 50, MEMBER: 51, SEPARATOR: 52, relation: 53, STR: 54, NOTE_FOR: 55, noteText: 56, NOTE: 57, relationType: 58, lineType: 59, AGGREGATION: 60, EXTENSION: 61, COMPOSITION: 62, DEPENDENCY: 63, LOLLIPOP: 64, LINE: 65, DOTTED_LINE: 66, CALLBACK: 67, LINK: 68, LINK_TARGET: 69, CLICK: 70, CALLBACK_NAME: 71, CALLBACK_ARGS: 72, HREF: 73, CSSCLASS: 74, commentToken: 75, textToken: 76, graphCodeTokens: 77, textNoTagsToken: 78, TAGSTART: 79, TAGEND: 80, "==": 81, "--": 82, PCT: 83, DEFAULT: 84, SPACE: 85, MINUS: 86, keywords: 87, UNICODE_TEXT: 88, NUM: 89, ALPHA: 90, BQUOTE_STR: 91, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 5: "statments", 8: "direction_tb", 9: "direction_bt", 10: "direction_rl", 11: "direction_lr", 16: "NEWLINE", 17: ":", 19: "open_directive", 20: "type_directive", 21: "arg_directive", 22: "close_directive", 23: "CLASS_DIAGRAM", 25: "EOF", 30: "GENERICTYPE", 32: "LABEL", 39: "acc_title", 40: "acc_title_value", 41: "acc_descr", 42: "acc_descr_value", 43: "acc_descr_multiline_value", 44: "CLASS", 45: "STYLE_SEPARATOR", 46: "STRUCT_START", 48: "STRUCT_STOP", 49: "ANNOTATION_START", 50: "ANNOTATION_END", 51: "MEMBER", 52: "SEPARATOR", 54: "STR", 55: "NOTE_FOR", 57: "NOTE", 60: "AGGREGATION", 61: "EXTENSION", 62: "COMPOSITION", 63: "DEPENDENCY", 64: "LOLLIPOP", 65: "LINE", 66: "DOTTED_LINE", 67: "CALLBACK", 68: "LINK", 69: "LINK_TARGET", 70: "CLICK", 71: "CALLBACK_NAME", 72: "CALLBACK_ARGS", 73: "HREF", 74: "CSSCLASS", 77: "graphCodeTokens", 79: "TAGSTART", 80: "TAGEND", 81: "==", 82: "--", 83: "PCT", 84: "DEFAULT", 85: "SPACE", 86: "MINUS", 87: "keywords", 88: "UNICODE_TEXT", 89: "NUM", 90: "ALPHA", 91: "BQUOTE_STR" },
    productions_: [0, [3, 1], [3, 1], [3, 1], [3, 2], [6, 1], [6, 1], [6, 1], [6, 1], [4, 1], [7, 4], [7, 6], [13, 1], [14, 1], [18, 1], [15, 1], [12, 4], [24, 1], [24, 2], [24, 3], [27, 1], [27, 1], [27, 2], [27, 2], [27, 2], [26, 1], [26, 2], [26, 1], [26, 1], [26, 1], [26, 1], [26, 1], [26, 1], [26, 1], [26, 1], [26, 2], [26, 2], [26, 1], [33, 2], [33, 4], [33, 5], [33, 7], [35, 4], [47, 1], [47, 2], [34, 1], [34, 2], [34, 1], [34, 1], [31, 3], [31, 4], [31, 4], [31, 5], [38, 3], [38, 2], [53, 3], [53, 2], [53, 2], [53, 1], [58, 1], [58, 1], [58, 1], [58, 1], [58, 1], [59, 1], [59, 1], [36, 3], [36, 4], [36, 3], [36, 4], [36, 4], [36, 5], [36, 3], [36, 4], [36, 4], [36, 5], [36, 3], [36, 4], [36, 4], [36, 5], [37, 3], [75, 1], [75, 1], [76, 1], [76, 1], [76, 1], [76, 1], [76, 1], [76, 1], [76, 1], [78, 1], [78, 1], [78, 1], [78, 1], [28, 1], [28, 1], [28, 1], [29, 1], [56, 1]],
    performAction: function(u, r, l, i, A, t, R) {
      var s = t.length - 1;
      switch (A) {
        case 5:
          i.setDirection("TB");
          break;
        case 6:
          i.setDirection("BT");
          break;
        case 7:
          i.setDirection("RL");
          break;
        case 8:
          i.setDirection("LR");
          break;
        case 12:
          i.parseDirective("%%{", "open_directive");
          break;
        case 13:
          i.parseDirective(t[s], "type_directive");
          break;
        case 14:
          t[s] = t[s].trim().replace(/'/g, '"'), i.parseDirective(t[s], "arg_directive");
          break;
        case 15:
          i.parseDirective("}%%", "close_directive", "class");
          break;
        case 20:
        case 21:
          this.$ = t[s];
          break;
        case 22:
          this.$ = t[s - 1] + t[s];
          break;
        case 23:
        case 24:
          this.$ = t[s - 1] + "~" + t[s];
          break;
        case 25:
          i.addRelation(t[s]);
          break;
        case 26:
          t[s - 1].title = i.cleanupLabel(t[s]), i.addRelation(t[s - 1]);
          break;
        case 35:
          this.$ = t[s].trim(), i.setAccTitle(this.$);
          break;
        case 36:
        case 37:
          this.$ = t[s].trim(), i.setAccDescription(this.$);
          break;
        case 38:
          i.addClass(t[s]);
          break;
        case 39:
          i.addClass(t[s - 2]), i.setCssClass(t[s - 2], t[s]);
          break;
        case 40:
          i.addClass(t[s - 3]), i.addMembers(t[s - 3], t[s - 1]);
          break;
        case 41:
          i.addClass(t[s - 5]), i.setCssClass(t[s - 5], t[s - 3]), i.addMembers(t[s - 5], t[s - 1]);
          break;
        case 42:
          i.addAnnotation(t[s], t[s - 2]);
          break;
        case 43:
          this.$ = [t[s]];
          break;
        case 44:
          t[s].push(t[s - 1]), this.$ = t[s];
          break;
        case 45:
          break;
        case 46:
          i.addMember(t[s - 1], i.cleanupLabel(t[s]));
          break;
        case 47:
          break;
        case 48:
          break;
        case 49:
          this.$ = { id1: t[s - 2], id2: t[s], relation: t[s - 1], relationTitle1: "none", relationTitle2: "none" };
          break;
        case 50:
          this.$ = { id1: t[s - 3], id2: t[s], relation: t[s - 1], relationTitle1: t[s - 2], relationTitle2: "none" };
          break;
        case 51:
          this.$ = { id1: t[s - 3], id2: t[s], relation: t[s - 2], relationTitle1: "none", relationTitle2: t[s - 1] };
          break;
        case 52:
          this.$ = { id1: t[s - 4], id2: t[s], relation: t[s - 2], relationTitle1: t[s - 3], relationTitle2: t[s - 1] };
          break;
        case 53:
          i.addNote(t[s], t[s - 1]);
          break;
        case 54:
          i.addNote(t[s]);
          break;
        case 55:
          this.$ = { type1: t[s - 2], type2: t[s], lineType: t[s - 1] };
          break;
        case 56:
          this.$ = { type1: "none", type2: t[s], lineType: t[s - 1] };
          break;
        case 57:
          this.$ = { type1: t[s - 1], type2: "none", lineType: t[s] };
          break;
        case 58:
          this.$ = { type1: "none", type2: "none", lineType: t[s] };
          break;
        case 59:
          this.$ = i.relationType.AGGREGATION;
          break;
        case 60:
          this.$ = i.relationType.EXTENSION;
          break;
        case 61:
          this.$ = i.relationType.COMPOSITION;
          break;
        case 62:
          this.$ = i.relationType.DEPENDENCY;
          break;
        case 63:
          this.$ = i.relationType.LOLLIPOP;
          break;
        case 64:
          this.$ = i.lineType.LINE;
          break;
        case 65:
          this.$ = i.lineType.DOTTED_LINE;
          break;
        case 66:
        case 72:
          this.$ = t[s - 2], i.setClickEvent(t[s - 1], t[s]);
          break;
        case 67:
        case 73:
          this.$ = t[s - 3], i.setClickEvent(t[s - 2], t[s - 1]), i.setTooltip(t[s - 2], t[s]);
          break;
        case 68:
        case 76:
          this.$ = t[s - 2], i.setLink(t[s - 1], t[s]);
          break;
        case 69:
          this.$ = t[s - 3], i.setLink(t[s - 2], t[s - 1], t[s]);
          break;
        case 70:
        case 78:
          this.$ = t[s - 3], i.setLink(t[s - 2], t[s - 1]), i.setTooltip(t[s - 2], t[s]);
          break;
        case 71:
        case 79:
          this.$ = t[s - 4], i.setLink(t[s - 3], t[s - 2], t[s]), i.setTooltip(t[s - 3], t[s - 1]);
          break;
        case 74:
          this.$ = t[s - 3], i.setClickEvent(t[s - 2], t[s - 1], t[s]);
          break;
        case 75:
          this.$ = t[s - 4], i.setClickEvent(t[s - 3], t[s - 2], t[s - 1]), i.setTooltip(t[s - 3], t[s]);
          break;
        case 77:
          this.$ = t[s - 3], i.setLink(t[s - 2], t[s - 1], t[s]);
          break;
        case 80:
          i.setCssClass(t[s - 1], t[s]);
          break;
      }
    },
    table: [{ 3: 1, 4: 2, 5: n, 6: 4, 7: 5, 8: c, 9: o, 10: h, 11: E, 12: 6, 13: 11, 19: p, 23: b }, { 1: [3] }, { 1: [2, 1] }, { 1: [2, 2] }, { 1: [2, 3] }, { 3: 14, 4: 2, 5: n, 6: 4, 7: 5, 8: c, 9: o, 10: h, 11: E, 12: 6, 13: 11, 19: p, 23: b }, { 1: [2, 9] }, e(D, [2, 5]), e(D, [2, 6]), e(D, [2, 7]), e(D, [2, 8]), { 14: 15, 20: [1, 16] }, { 16: [1, 17] }, { 20: [2, 12] }, { 1: [2, 4] }, { 15: 18, 17: [1, 19], 22: Ae }, e([17, 22], [2, 13]), { 6: 31, 7: 30, 8: c, 9: o, 10: h, 11: E, 13: 11, 19: p, 24: 21, 26: 22, 27: 35, 28: 46, 29: 47, 31: 23, 33: 24, 34: 25, 35: 26, 36: 27, 37: 28, 38: 29, 39: fe, 41: de, 43: pe, 44: Ee, 49: Ce, 51: ge, 52: ke, 55: me, 57: Fe, 67: De, 68: _e, 70: be, 74: Be, 88: C, 89: g, 90: k, 91: F }, { 16: [1, 52] }, { 18: 53, 21: [1, 54] }, { 16: [2, 15] }, { 25: [1, 55] }, { 16: [1, 56], 25: [2, 17] }, e(a, [2, 25], { 32: [1, 57] }), e(a, [2, 27]), e(a, [2, 28]), e(a, [2, 29]), e(a, [2, 30]), e(a, [2, 31]), e(a, [2, 32]), e(a, [2, 33]), e(a, [2, 34]), { 40: [1, 58] }, { 42: [1, 59] }, e(a, [2, 37]), e(a, [2, 45], { 53: 60, 58: 63, 59: 64, 32: [1, 62], 54: [1, 61], 60: M, 61: U, 62: z, 63: K, 64: Y, 65: J, 66: Z }), { 27: 72, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, e(a, [2, 47]), e(a, [2, 48]), { 28: 73, 88: C, 89: g, 90: k }, { 27: 74, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, { 27: 75, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, { 27: 76, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, { 54: [1, 77] }, { 27: 78, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, { 54: ye, 56: 79 }, e(I, [2, 20], { 28: 46, 29: 47, 27: 81, 30: [1, 82], 88: C, 89: g, 90: k, 91: F }), e(I, [2, 21], { 30: [1, 83] }), e($, [2, 94]), e($, [2, 95]), e($, [2, 96]), e([16, 25, 30, 32, 45, 46, 54, 60, 61, 62, 63, 64, 65, 66, 71, 73], [2, 97]), e(Te, [2, 10]), { 15: 84, 22: Ae }, { 22: [2, 14] }, { 1: [2, 16] }, { 6: 31, 7: 30, 8: c, 9: o, 10: h, 11: E, 13: 11, 19: p, 24: 85, 25: [2, 18], 26: 22, 27: 35, 28: 46, 29: 47, 31: 23, 33: 24, 34: 25, 35: 26, 36: 27, 37: 28, 38: 29, 39: fe, 41: de, 43: pe, 44: Ee, 49: Ce, 51: ge, 52: ke, 55: me, 57: Fe, 67: De, 68: _e, 70: be, 74: Be, 88: C, 89: g, 90: k, 91: F }, e(a, [2, 26]), e(a, [2, 35]), e(a, [2, 36]), { 27: 86, 28: 46, 29: 47, 54: [1, 87], 88: C, 89: g, 90: k, 91: F }, { 53: 88, 58: 63, 59: 64, 60: M, 61: U, 62: z, 63: K, 64: Y, 65: J, 66: Z }, e(a, [2, 46]), { 59: 89, 65: J, 66: Z }, e(j, [2, 58], { 58: 90, 60: M, 61: U, 62: z, 63: K, 64: Y }), e(O, [2, 59]), e(O, [2, 60]), e(O, [2, 61]), e(O, [2, 62]), e(O, [2, 63]), e(Se, [2, 64]), e(Se, [2, 65]), e(a, [2, 38], { 45: [1, 91], 46: [1, 92] }), { 50: [1, 93] }, { 54: [1, 94] }, { 54: [1, 95] }, { 71: [1, 96], 73: [1, 97] }, { 28: 98, 88: C, 89: g, 90: k }, { 54: ye, 56: 99 }, e(a, [2, 54]), e(a, [2, 98]), e(I, [2, 22]), e(I, [2, 23]), e(I, [2, 24]), { 16: [1, 100] }, { 25: [2, 19] }, e(X, [2, 49]), { 27: 101, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, { 27: 102, 28: 46, 29: 47, 54: [1, 103], 88: C, 89: g, 90: k, 91: F }, e(j, [2, 57], { 58: 104, 60: M, 61: U, 62: z, 63: K, 64: Y }), e(j, [2, 56]), { 28: 105, 88: C, 89: g, 90: k }, { 47: 106, 51: ee }, { 27: 108, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, e(a, [2, 66], { 54: [1, 109] }), e(a, [2, 68], { 54: [1, 111], 69: [1, 110] }), e(a, [2, 72], { 54: [1, 112], 72: [1, 113] }), e(a, [2, 76], { 54: [1, 115], 69: [1, 114] }), e(a, [2, 80]), e(a, [2, 53]), e(Te, [2, 11]), e(X, [2, 51]), e(X, [2, 50]), { 27: 116, 28: 46, 29: 47, 88: C, 89: g, 90: k, 91: F }, e(j, [2, 55]), e(a, [2, 39], { 46: [1, 117] }), { 48: [1, 118] }, { 47: 119, 48: [2, 43], 51: ee }, e(a, [2, 42]), e(a, [2, 67]), e(a, [2, 69]), e(a, [2, 70], { 69: [1, 120] }), e(a, [2, 73]), e(a, [2, 74], { 54: [1, 121] }), e(a, [2, 77]), e(a, [2, 78], { 69: [1, 122] }), e(X, [2, 52]), { 47: 123, 51: ee }, e(a, [2, 40]), { 48: [2, 44] }, e(a, [2, 71]), e(a, [2, 75]), e(a, [2, 79]), { 48: [1, 124] }, e(a, [2, 41])],
    defaultActions: { 2: [2, 1], 3: [2, 2], 4: [2, 3], 6: [2, 9], 13: [2, 12], 14: [2, 4], 20: [2, 15], 54: [2, 14], 55: [2, 16], 85: [2, 19], 119: [2, 44] },
    parseError: function(u, r) {
      if (r.recoverable)
        this.trace(u);
      else {
        var l = new Error(u);
        throw l.hash = r, l;
      }
    },
    parse: function(u) {
      var r = this, l = [0], i = [], A = [null], t = [], R = this.table, s = "", Q = 0, ve = 0, Ge = 2, Ne = 1, Me = t.slice.call(arguments, 1), d = Object.create(this.lexer), v = { yy: {} };
      for (var ie in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, ie) && (v.yy[ie] = this.yy[ie]);
      d.setInput(u, v.yy), v.yy.lexer = d, v.yy.parser = this, typeof d.yylloc > "u" && (d.yylloc = {});
      var ue = d.yylloc;
      t.push(ue);
      var Ue = d.options && d.options.ranges;
      typeof v.yy.parseError == "function" ? this.parseError = v.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function ze() {
        var y;
        return y = i.pop() || d.lex() || Ne, typeof y != "number" && (y instanceof Array && (i = y, y = i.pop()), y = r.symbols_[y] || y), y;
      }
      for (var m, N, _, ne, L = {}, q, B, Le, H; ; ) {
        if (N = l[l.length - 1], this.defaultActions[N] ? _ = this.defaultActions[N] : ((m === null || typeof m > "u") && (m = ze()), _ = R[N] && R[N][m]), typeof _ > "u" || !_.length || !_[0]) {
          var re = "";
          H = [];
          for (q in R[N])
            this.terminals_[q] && q > Ge && H.push("'" + this.terminals_[q] + "'");
          d.showPosition ? re = "Parse error on line " + (Q + 1) + `:
` + d.showPosition() + `
Expecting ` + H.join(", ") + ", got '" + (this.terminals_[m] || m) + "'" : re = "Parse error on line " + (Q + 1) + ": Unexpected " + (m == Ne ? "end of input" : "'" + (this.terminals_[m] || m) + "'"), this.parseError(re, {
            text: d.match,
            token: this.terminals_[m] || m,
            line: d.yylineno,
            loc: ue,
            expected: H
          });
        }
        if (_[0] instanceof Array && _.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + N + ", token: " + m);
        switch (_[0]) {
          case 1:
            l.push(m), A.push(d.yytext), t.push(d.yylloc), l.push(_[1]), m = null, ve = d.yyleng, s = d.yytext, Q = d.yylineno, ue = d.yylloc;
            break;
          case 2:
            if (B = this.productions_[_[1]][1], L.$ = A[A.length - B], L._$ = {
              first_line: t[t.length - (B || 1)].first_line,
              last_line: t[t.length - 1].last_line,
              first_column: t[t.length - (B || 1)].first_column,
              last_column: t[t.length - 1].last_column
            }, Ue && (L._$.range = [
              t[t.length - (B || 1)].range[0],
              t[t.length - 1].range[1]
            ]), ne = this.performAction.apply(L, [
              s,
              ve,
              Q,
              v.yy,
              _[1],
              A,
              t
            ].concat(Me)), typeof ne < "u")
              return ne;
            B && (l = l.slice(0, -1 * B * 2), A = A.slice(0, -1 * B), t = t.slice(0, -1 * B)), l.push(this.productions_[_[1]][0]), A.push(L.$), t.push(L._$), Le = R[l[l.length - 2]][l[l.length - 1]], l.push(Le);
            break;
          case 3:
            return !0;
        }
      }
      return !0;
    }
  }, Ve = function() {
    var S = {
      EOF: 1,
      parseError: function(r, l) {
        if (this.yy.parser)
          this.yy.parser.parseError(r, l);
        else
          throw new Error(r);
      },
      // resets the lexer, sets new input
      setInput: function(u, r) {
        return this.yy = r || this.yy || {}, this._input = u, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var u = this._input[0];
        this.yytext += u, this.yyleng++, this.offset++, this.match += u, this.matched += u;
        var r = u.match(/(?:\r\n?|\n).*/g);
        return r ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), u;
      },
      // unshifts one char (or a string) into the input
      unput: function(u) {
        var r = u.length, l = u.split(/(?:\r\n?|\n)/g);
        this._input = u + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - r), this.offset -= r;
        var i = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), l.length - 1 && (this.yylineno -= l.length - 1);
        var A = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: l ? (l.length === i.length ? this.yylloc.first_column : 0) + i[i.length - l.length].length - l[0].length : this.yylloc.first_column - r
        }, this.options.ranges && (this.yylloc.range = [A[0], A[0] + this.yyleng - r]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = !0, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = !0;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(u) {
        this.unput(this.match.slice(u));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var u = this.matched.substr(0, this.matched.length - this.match.length);
        return (u.length > 20 ? "..." : "") + u.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var u = this.match;
        return u.length < 20 && (u += this._input.substr(0, 20 - u.length)), (u.substr(0, 20) + (u.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var u = this.pastInput(), r = new Array(u.length + 1).join("-");
        return u + this.upcomingInput() + `
` + r + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(u, r) {
        var l, i, A;
        if (this.options.backtrack_lexer && (A = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (A.yylloc.range = this.yylloc.range.slice(0))), i = u[0].match(/(?:\r\n?|\n).*/g), i && (this.yylineno += i.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + u[0].length
        }, this.yytext += u[0], this.match += u[0], this.matches = u, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(u[0].length), this.matched += u[0], l = this.performAction.call(this, this.yy, this, r, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), l)
          return l;
        if (this._backtrack) {
          for (var t in A)
            this[t] = A[t];
          return !1;
        }
        return !1;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = !0);
        var u, r, l, i;
        this._more || (this.yytext = "", this.match = "");
        for (var A = this._currentRules(), t = 0; t < A.length; t++)
          if (l = this._input.match(this.rules[A[t]]), l && (!r || l[0].length > r[0].length)) {
            if (r = l, i = t, this.options.backtrack_lexer) {
              if (u = this.test_match(l, A[t]), u !== !1)
                return u;
              if (this._backtrack) {
                r = !1;
                continue;
              } else
                return !1;
            } else if (!this.options.flex)
              break;
          }
        return r ? (u = this.test_match(r, A[i]), u !== !1 ? u : !1) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var r = this.next();
        return r || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(r) {
        this.conditionStack.push(r);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var r = this.conditionStack.length - 1;
        return r > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(r) {
        return r = this.conditionStack.length - 1 - Math.abs(r || 0), r >= 0 ? this.conditionStack[r] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(r) {
        this.begin(r);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: {},
      performAction: function(r, l, i, A) {
        switch (i) {
          case 0:
            return this.begin("open_directive"), 19;
          case 1:
            return 8;
          case 2:
            return 9;
          case 3:
            return 10;
          case 4:
            return 11;
          case 5:
            return this.begin("type_directive"), 20;
          case 6:
            return this.popState(), this.begin("arg_directive"), 17;
          case 7:
            return this.popState(), this.popState(), 22;
          case 8:
            return 21;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return this.begin("acc_title"), 39;
          case 12:
            return this.popState(), "acc_title_value";
          case 13:
            return this.begin("acc_descr"), 41;
          case 14:
            return this.popState(), "acc_descr_value";
          case 15:
            this.begin("acc_descr_multiline");
            break;
          case 16:
            this.popState();
            break;
          case 17:
            return "acc_descr_multiline_value";
          case 18:
            return 16;
          case 19:
            break;
          case 20:
            return 23;
          case 21:
            return 23;
          case 22:
            return this.begin("struct"), 46;
          case 23:
            return "EDGE_STATE";
          case 24:
            return "EOF_IN_STRUCT";
          case 25:
            return "OPEN_IN_STRUCT";
          case 26:
            return this.popState(), 48;
          case 27:
            break;
          case 28:
            return "MEMBER";
          case 29:
            return 44;
          case 30:
            return 74;
          case 31:
            return 67;
          case 32:
            return 68;
          case 33:
            return 70;
          case 34:
            return 55;
          case 35:
            return 57;
          case 36:
            return 49;
          case 37:
            return 50;
          case 38:
            this.begin("generic");
            break;
          case 39:
            this.popState();
            break;
          case 40:
            return "GENERICTYPE";
          case 41:
            this.begin("string");
            break;
          case 42:
            this.popState();
            break;
          case 43:
            return "STR";
          case 44:
            this.begin("bqstring");
            break;
          case 45:
            this.popState();
            break;
          case 46:
            return "BQUOTE_STR";
          case 47:
            this.begin("href");
            break;
          case 48:
            this.popState();
            break;
          case 49:
            return 73;
          case 50:
            this.begin("callback_name");
            break;
          case 51:
            this.popState();
            break;
          case 52:
            this.popState(), this.begin("callback_args");
            break;
          case 53:
            return 71;
          case 54:
            this.popState();
            break;
          case 55:
            return 72;
          case 56:
            return 69;
          case 57:
            return 69;
          case 58:
            return 69;
          case 59:
            return 69;
          case 60:
            return 61;
          case 61:
            return 61;
          case 62:
            return 63;
          case 63:
            return 63;
          case 64:
            return 62;
          case 65:
            return 60;
          case 66:
            return 64;
          case 67:
            return 65;
          case 68:
            return 66;
          case 69:
            return 32;
          case 70:
            return 45;
          case 71:
            return 86;
          case 72:
            return "DOT";
          case 73:
            return "PLUS";
          case 74:
            return 83;
          case 75:
            return "EQUALS";
          case 76:
            return "EQUALS";
          case 77:
            return 90;
          case 78:
            return "PUNCTUATION";
          case 79:
            return 89;
          case 80:
            return 88;
          case 81:
            return 85;
          case 82:
            return 25;
        }
      },
      rules: [/^(?:%%\{)/, /^(?:.*direction\s+TB[^\n]*)/, /^(?:.*direction\s+BT[^\n]*)/, /^(?:.*direction\s+RL[^\n]*)/, /^(?:.*direction\s+LR[^\n]*)/, /^(?:((?:(?!\}%%)[^:.])*))/, /^(?::)/, /^(?:\}%%)/, /^(?:((?:(?!\}%%).|\n)*))/, /^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/, /^(?:%%[^\n]*(\r?\n)*)/, /^(?:accTitle\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*:\s*)/, /^(?:(?!\n||)*[^\n]*)/, /^(?:accDescr\s*\{\s*)/, /^(?:[\}])/, /^(?:[^\}]*)/, /^(?:\s*(\r?\n)+)/, /^(?:\s+)/, /^(?:classDiagram-v2\b)/, /^(?:classDiagram\b)/, /^(?:[{])/, /^(?:\[\*\])/, /^(?:$)/, /^(?:[{])/, /^(?:[}])/, /^(?:[\n])/, /^(?:[^{}\n]*)/, /^(?:class\b)/, /^(?:cssClass\b)/, /^(?:callback\b)/, /^(?:link\b)/, /^(?:click\b)/, /^(?:note for\b)/, /^(?:note\b)/, /^(?:<<)/, /^(?:>>)/, /^(?:[~])/, /^(?:[~])/, /^(?:[^~]*)/, /^(?:["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:[`])/, /^(?:[`])/, /^(?:[^`]+)/, /^(?:href[\s]+["])/, /^(?:["])/, /^(?:[^"]*)/, /^(?:call[\s]+)/, /^(?:\([\s]*\))/, /^(?:\()/, /^(?:[^(]*)/, /^(?:\))/, /^(?:[^)]*)/, /^(?:_self\b)/, /^(?:_blank\b)/, /^(?:_parent\b)/, /^(?:_top\b)/, /^(?:\s*<\|)/, /^(?:\s*\|>)/, /^(?:\s*>)/, /^(?:\s*<)/, /^(?:\s*\*)/, /^(?:\s*o\b)/, /^(?:\s*\(\))/, /^(?:--)/, /^(?:\.\.)/, /^(?::{1}[^:\n;]+)/, /^(?::{3})/, /^(?:-)/, /^(?:\.)/, /^(?:\+)/, /^(?:%)/, /^(?:=)/, /^(?:=)/, /^(?:\w+)/, /^(?:[!"#$%&'*+,-.`?\\/])/, /^(?:[0-9]+)/, /^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/, /^(?:\s)/, /^(?:$)/],
      conditions: { acc_descr_multiline: { rules: [16, 17], inclusive: !1 }, acc_descr: { rules: [14], inclusive: !1 }, acc_title: { rules: [12], inclusive: !1 }, arg_directive: { rules: [7, 8], inclusive: !1 }, type_directive: { rules: [6, 7], inclusive: !1 }, open_directive: { rules: [5], inclusive: !1 }, callback_args: { rules: [54, 55], inclusive: !1 }, callback_name: { rules: [51, 52, 53], inclusive: !1 }, href: { rules: [48, 49], inclusive: !1 }, struct: { rules: [23, 24, 25, 26, 27, 28], inclusive: !1 }, generic: { rules: [39, 40], inclusive: !1 }, bqstring: { rules: [45, 46], inclusive: !1 }, string: { rules: [42, 43], inclusive: !1 }, INITIAL: { rules: [0, 1, 2, 3, 4, 9, 10, 11, 13, 15, 18, 19, 20, 21, 22, 23, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 44, 47, 50, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82], inclusive: !0 } }
    };
    return S;
  }();
  te.lexer = Ve;
  function se() {
    this.yy = {};
  }
  return se.prototype = te, te.Parser = se, new se();
}();
ae.parser = ae;
const bt = ae, ce = "classid-";
let oe = [], f = {}, W = [], xe = 0, V = [];
const w = (e) => x.sanitizeText(e, T()), Ze = function(e, n, c) {
  Ye.parseDirective(this, e, n, c);
}, G = function(e) {
  let n = "", c = e;
  if (e.indexOf("~") > 0) {
    let o = e.split("~");
    c = o[0], n = x.sanitizeText(o[1], T());
  }
  return { className: c, type: n };
}, le = function(e) {
  let n = G(e);
  f[n.className] === void 0 && (f[n.className] = {
    id: n.className,
    type: n.type,
    cssClasses: [],
    methods: [],
    members: [],
    annotations: [],
    domId: ce + n.className + "-" + xe
  }, xe++);
}, Oe = function(e) {
  const n = Object.keys(f);
  for (const c of n)
    if (f[c].id === e)
      return f[c].domId;
}, $e = function() {
  oe = [], f = {}, W = [], V = [], V.push(Pe), Je();
}, et = function(e) {
  return f[e];
}, tt = function() {
  return f;
}, st = function() {
  return oe;
}, it = function() {
  return W;
}, ut = function(e) {
  Ke.debug("Adding relation: " + JSON.stringify(e)), le(e.id1), le(e.id2), e.id1 = G(e.id1).className, e.id2 = G(e.id2).className, e.relationTitle1 = x.sanitizeText(
    e.relationTitle1.trim(),
    T()
  ), e.relationTitle2 = x.sanitizeText(
    e.relationTitle2.trim(),
    T()
  ), oe.push(e);
}, nt = function(e, n) {
  const c = G(e).className;
  f[c].annotations.push(n);
}, Re = function(e, n) {
  const c = G(e).className, o = f[c];
  if (typeof n == "string") {
    const h = n.trim();
    h.startsWith("<<") && h.endsWith(">>") ? o.annotations.push(w(h.substring(2, h.length - 2))) : h.indexOf(")") > 0 ? o.methods.push(w(h)) : h && o.members.push(w(h));
  }
}, rt = function(e, n) {
  Array.isArray(n) && (n.reverse(), n.forEach((c) => Re(e, c)));
}, at = function(e, n) {
  const c = {
    id: `note${W.length}`,
    class: n,
    text: e
  };
  W.push(c);
}, lt = function(e) {
  return e.substring(0, 1) === ":" ? x.sanitizeText(e.substr(1).trim(), T()) : w(e.trim());
}, he = function(e, n) {
  e.split(",").forEach(function(c) {
    let o = c;
    c[0].match(/\d/) && (o = ce + o), f[o] !== void 0 && f[o].cssClasses.push(n);
  });
}, ct = function(e, n) {
  const c = T();
  e.split(",").forEach(function(o) {
    n !== void 0 && (f[o].tooltip = x.sanitizeText(n, c));
  });
}, ot = function(e) {
  return f[e].tooltip;
}, ht = function(e, n, c) {
  const o = T();
  e.split(",").forEach(function(h) {
    let E = h;
    h[0].match(/\d/) && (E = ce + E), f[E] !== void 0 && (f[E].link = Ie.formatUrl(n, o), o.securityLevel === "sandbox" ? f[E].linkTarget = "_top" : typeof c == "string" ? f[E].linkTarget = w(c) : f[E].linkTarget = "_blank");
  }), he(e, "clickable");
}, At = function(e, n, c) {
  e.split(",").forEach(function(o) {
    ft(o, n, c), f[o].haveCallback = !0;
  }), he(e, "clickable");
}, ft = function(e, n, c) {
  const o = T();
  let h = e, E = Oe(h);
  if (o.securityLevel === "loose" && n !== void 0 && f[h] !== void 0) {
    let p = [];
    if (typeof c == "string") {
      p = c.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
      for (let b = 0; b < p.length; b++) {
        let D = p[b].trim();
        D.charAt(0) === '"' && D.charAt(D.length - 1) === '"' && (D = D.substr(1, D.length - 2)), p[b] = D;
      }
    }
    p.length === 0 && p.push(E), V.push(function() {
      const b = document.querySelector(`[id="${E}"]`);
      b !== null && b.addEventListener(
        "click",
        function() {
          Ie.runFunc(n, ...p);
        },
        !1
      );
    });
  }
}, dt = function(e) {
  V.forEach(function(n) {
    n(e);
  });
}, pt = {
  LINE: 0,
  DOTTED_LINE: 1
}, Et = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3,
  LOLLIPOP: 4
}, Pe = function(e) {
  let n = P(".mermaidTooltip");
  (n._groups || n)[0][0] === null && (n = P("body").append("div").attr("class", "mermaidTooltip").style("opacity", 0)), P(e).select("svg").selectAll("g.node").on("mouseover", function() {
    const h = P(this);
    if (h.attr("title") === null)
      return;
    const p = this.getBoundingClientRect();
    n.transition().duration(200).style("opacity", ".9"), n.text(h.attr("title")).style("left", window.scrollX + p.left + (p.right - p.left) / 2 + "px").style("top", window.scrollY + p.top - 14 + document.body.scrollTop + "px"), n.html(n.html().replace(/&lt;br\/&gt;/g, "<br/>")), h.classed("hover", !0);
  }).on("mouseout", function() {
    n.transition().duration(500).style("opacity", 0), P(this).classed("hover", !1);
  });
};
V.push(Pe);
let we = "TB";
const Ct = () => we, gt = (e) => {
  we = e;
}, Bt = {
  parseDirective: Ze,
  setAccTitle: je,
  getAccTitle: Xe,
  getAccDescription: Qe,
  setAccDescription: qe,
  getConfig: () => T().class,
  addClass: le,
  bindFunctions: dt,
  clear: $e,
  getClass: et,
  getClasses: tt,
  getNotes: it,
  addAnnotation: nt,
  addNote: at,
  getRelations: st,
  addRelation: ut,
  getDirection: Ct,
  setDirection: gt,
  addMember: Re,
  addMembers: rt,
  cleanupLabel: lt,
  lineType: pt,
  relationType: Et,
  setClickEvent: At,
  setCssClass: he,
  setLink: ht,
  getTooltip: ot,
  setTooltip: ct,
  lookUpDomId: Oe,
  setDiagramTitle: He,
  getDiagramTitle: We
}, kt = (e) => `g.classGroup text {
  fill: ${e.nodeBorder};
  fill: ${e.classText};
  stroke: none;
  font-family: ${e.fontFamily};
  font-size: 10px;

  .title {
    font-weight: bolder;
  }

}

.nodeLabel, .edgeLabel {
  color: ${e.classText};
}
.edgeLabel .label rect {
  fill: ${e.mainBkg};
}
.label text {
  fill: ${e.classText};
}
.edgeLabel .label span {
  background: ${e.mainBkg};
}

.classTitle {
  font-weight: bolder;
}
.node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }


.divider {
  stroke: ${e.nodeBorder};
  stroke: 1;
}

g.clickable {
  cursor: pointer;
}

g.classGroup rect {
  fill: ${e.mainBkg};
  stroke: ${e.nodeBorder};
}

g.classGroup line {
  stroke: ${e.nodeBorder};
  stroke-width: 1;
}

.classLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${e.mainBkg};
  opacity: 0.5;
}

.classLabel .label {
  fill: ${e.nodeBorder};
  font-size: 10px;
}

.relation {
  stroke: ${e.lineColor};
  stroke-width: 1;
  fill: none;
}

.dashed-line{
  stroke-dasharray: 3;
}

.dotted-line{
  stroke-dasharray: 1 2;
}

#compositionStart, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#compositionEnd, .composition {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#dependencyStart, .dependency {
  fill: ${e.lineColor} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionStart, .extension {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#extensionEnd, .extension {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationStart, .aggregation {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#aggregationEnd, .aggregation {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopStart, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

#lollipopEnd, .lollipop {
  fill: ${e.mainBkg} !important;
  stroke: ${e.lineColor} !important;
  stroke-width: 1;
}

.edgeTerminals {
  font-size: 11px;
}

.classTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${e.textColor};
}
`, yt = kt;
export {
  Bt as d,
  bt as p,
  yt as s
};
//# sourceMappingURL=styles-f4016daa.js.map
