import { l as o } from "./config-0b7a4e7d.js";
import { i as E, u as y, r as S, l as P } from "./utils-c190d844.js";
import { m as g } from "./mermaidAPI-aff5a93a.js";
import "./setupGraphViewbox-a7344a0b.js";
import "./commonDb-9eb4b6e7.js";
import "./errorRenderer-89ef1884.js";
function D(e) {
  for (var r = [], a = 1; a < arguments.length; a++)
    r[a - 1] = arguments[a];
  var t = Array.from(typeof e == "string" ? [e] : e);
  t[t.length - 1] = t[t.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var c = t.reduce(function(n, i) {
    var d = i.match(/\n([\t ]+|(?!\s).)/g);
    return d ? n.concat(d.map(function(p) {
      var f, l;
      return (l = (f = p.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && l !== void 0 ? l : 0;
    })) : n;
  }, []);
  if (c.length) {
    var m = new RegExp(`
[	 ]{` + Math.min.apply(Math, c) + "}", "g");
    t = t.map(function(n) {
      return n.replace(m, `
`);
    });
  }
  t[0] = t[0].replace(/^\r?\n/, "");
  var s = t[0];
  return r.forEach(function(n, i) {
    var d = s.match(/(?:^|\n)( *)$/), p = d ? d[1] : "", f = n;
    typeof n == "string" && n.includes(`
`) && (f = String(n).split(`
`).map(function(l, O) {
      return O === 0 ? l : "" + p + l;
    }).join(`
`)), s += f + t[i + 1];
  }), s;
}
const q = (e, r, a) => {
  o.warn(e), E(e) ? (a && a(e.str, e.hash), r.push({ ...e, message: e.str, error: e })) : (a && a(e), e instanceof Error && r.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, v = async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await A(e);
  } catch (r) {
    if (E(r) && o.error(r.str), u.parseError && u.parseError(r), !e.suppressErrors)
      throw o.error("Use the suppressErrors option to suppress these errors"), r;
  }
}, A = async function({ postRenderCallback: e, querySelector: r, nodes: a } = {
  querySelector: ".mermaid"
}) {
  const t = g.getConfig();
  o.debug(`${e ? "" : "No "}Callback function found`);
  let c;
  if (a)
    c = a;
  else if (r)
    c = document.querySelectorAll(r);
  else
    throw new Error("Nodes and querySelector are both undefined");
  o.debug(`Found ${c.length} diagrams`), (t == null ? void 0 : t.startOnLoad) !== void 0 && (o.debug("Start On Load: " + (t == null ? void 0 : t.startOnLoad)), g.updateSiteConfig({ startOnLoad: t == null ? void 0 : t.startOnLoad }));
  const m = new y.initIdGenerator(t.deterministicIds, t.deterministicIDSeed);
  let s;
  const n = [];
  for (const i of Array.from(c)) {
    o.info("Rendering diagram: " + i.id);
    /*! Check if previously processed */
    if (i.getAttribute("data-processed"))
      continue;
    i.setAttribute("data-processed", "true");
    const d = `mermaid-${m.next()}`;
    s = i.innerHTML, s = D(y.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const p = y.detectInit(s);
    p && o.debug("Detected early reinit: ", p);
    try {
      const { svg: f, bindFunctions: l } = await g.render(d, s, i);
      i.innerHTML = f, e && await e(d), l && l(i);
    } catch (f) {
      q(f, n, u.parseError);
    }
  }
  if (n.length > 0)
    throw n[0];
}, L = function(e) {
  g.initialize(e);
}, M = async function(e, r, a) {
  o.warn("mermaid.init is deprecated. Please use run instead."), e && L(e);
  const t = { postRenderCallback: a, querySelector: ".mermaid" };
  typeof r == "string" ? t.querySelector = r : r && (r instanceof HTMLElement ? t.nodes = [r] : t.nodes = r), await v(t);
}, C = async (e, {
  lazyLoad: r = !0
} = {}) => {
  S(...e), r === !1 && await P();
}, b = function() {
  if (u.startOnLoad) {
    const { startOnLoad: e } = g.getConfig();
    e && u.run().catch((r) => o.error("Mermaid failed to initialize", r));
  }
};
if (typeof document < "u") {
  /*!
   * Wait for document loaded before starting the execution
   */
  window.addEventListener("load", b, !1);
}
const I = function(e) {
  u.parseError = e;
}, h = [];
let w = !1;
const x = async () => {
  if (!w) {
    for (w = !0; h.length > 0; ) {
      const e = h.shift();
      if (e)
        try {
          await e();
        } catch (r) {
          o.error("Error executing queue", r);
        }
    }
    w = !1;
  }
}, T = async (e, r) => new Promise((a, t) => {
  const c = () => new Promise((m, s) => {
    g.parse(e, r).then(
      (n) => {
        m(n), a(n);
      },
      (n) => {
        var i;
        o.error("Error parsing", n), (i = u.parseError) == null || i.call(u, n), s(n), t(n);
      }
    );
  });
  h.push(c), x().catch(t);
}), $ = (e, r, a) => new Promise((t, c) => {
  const m = () => new Promise((s, n) => {
    g.render(e, r, a).then(
      (i) => {
        s(i), t(i);
      },
      (i) => {
        var d;
        o.error("Error parsing", i), (d = u.parseError) == null || d.call(u, i), n(i), c(i);
      }
    );
  });
  h.push(m), x().catch(c);
}), u = {
  startOnLoad: !0,
  mermaidAPI: g,
  parse: T,
  render: $,
  init: M,
  run: v,
  registerExternalDiagrams: C,
  initialize: L,
  parseError: void 0,
  contentLoaded: b,
  setParseErrorHandler: I
};
export {
  u as default
};
//# sourceMappingURL=mermaid.esm.min.mjs.map
