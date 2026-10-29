/* @ds-bundle: {"format":4,"namespace":"Lumen","components":[{"name":"Icon"},{"name":"Button"},{"name":"TextField"},{"name":"Select"},{"name":"Checkbox"},{"name":"Switch"},{"name":"Card"},{"name":"StatCard"},{"name":"Sidebar"},{"name":"Topbar"},{"name":"Tabs"},{"name":"Breadcrumbs"},{"name":"Badge"},{"name":"Alert"},{"name":"Avatar"},{"name":"Table"},{"name":"Dialog"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); }
    return out.join(" ");
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k]; }
    return o;
  }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = (prefix || "lm") + "-" + uid; }
    return ref.current;
  }

  /* ---------------- Icon: 24px grid, 1.75 stroke, round caps ---------------- */
  var ICONS = {
    search: [["circle", { cx: 11, cy: 11, r: 7 }], ["path", { d: "M16.5 16.5L21 21" }]],
    plus: [["path", { d: "M12 5v14M5 12h14" }]],
    check: [["path", { d: "M5 12.5l4.5 4.5L19 7.5" }]],
    x: [["path", { d: "M6 6l12 12M18 6L6 18" }]],
    "chevron-down": [["path", { d: "M6 9l6 6 6-6" }]],
    "chevron-right": [["path", { d: "M9 6l6 6-6 6" }]],
    "arrow-right": [["path", { d: "M5 12h14M13 6l6 6-6 6" }]],
    "arrow-up": [["path", { d: "M12 19V5M6 11l6-6 6 6" }]],
    "arrow-down": [["path", { d: "M12 5v14M6 13l6 6 6-6" }]],
    home: [["path", { d: "M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z" }]],
    chart: [["path", { d: "M3 20h18M6 16v-5M11 16V6M16 16v-8" }]],
    users: [["circle", { cx: 9, cy: 8, r: 3.5 }], ["path", { d: "M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" }], ["path", { d: "M15.5 4.6a3.5 3.5 0 0 1 0 6.8M17.5 14.3c2.3.6 4 2.6 4 5.7" }]],
    sliders: [["path", { d: "M4 7h9M17 7h3M4 17h3M11 17h9" }], ["circle", { cx: 15, cy: 7, r: 2 }], ["circle", { cx: 9, cy: 17, r: 2 }]],
    bell: [["path", { d: "M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z" }], ["path", { d: "M10 21h4" }]],
    info: [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M12 11v6M12 7.5v.01" }]],
    alert: [["path", { d: "M12 3.5l9.5 16.5h-19z" }], ["path", { d: "M12 10v4.5M12 17.5v.01" }]],
    "check-circle": [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M8 12.5l3 3 5-6" }]],
    "x-circle": [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M9 9l6 6M15 9l-6 6" }]],
    folder: [["path", { d: "M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }]],
    file: [["path", { d: "M6 3h8l4 4v14H6z" }], ["path", { d: "M14 3v4h4M9 12h6M9 16h6" }]],
    mail: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ["path", { d: "M3.5 7l8.5 6 8.5-6" }]],
    lock: [["rect", { x: 5, y: 11, width: 14, height: 10, rx: 2 }], ["path", { d: "M8 11V8a4 4 0 0 1 8 0v3" }]],
    calendar: [["rect", { x: 3, y: 5, width: 18, height: 16, rx: 2 }], ["path", { d: "M3 10h18M8 3v4M16 3v4" }]],
    download: [["path", { d: "M12 4v11M7 10l5 5 5-5M5 20h14" }]],
    filter: [["path", { d: "M4 5h16l-6 7.5V19l-4-2v-4.5z" }]],
    more: [["path", { d: "M5.5 12h.01M12 12h.01M18.5 12h.01" }]],
    card: [["rect", { x: 3, y: 5, width: 18, height: 14, rx: 2 }], ["path", { d: "M3 10h18M7 15h4" }]],
    layers: [["path", { d: "M12 3l9 5-9 5-9-5z" }], ["path", { d: "M3 13l9 5 9-5" }]],
    help: [["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .8-1 1.5v.2M12 17v.01" }]],
    logout: [["path", { d: "M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M10 16l-4-4 4-4M6 12h10" }]],
    trash: [["path", { d: "M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6" }]],
    eye: [["path", { d: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" }], ["circle", { cx: 12, cy: 12, r: 3 }]],
    key: [["circle", { cx: 8, cy: 15, r: 4 }], ["path", { d: "M11 12l9-9M16 7l3 3" }]]
  };

  function Icon(props) {
    var name = props.name, size = props.size || "md";
    var parts = ICONS[name] || ICONS.info;
    var extra = omit(props, ["name", "size", "className", "label"]);
    var a11y = props.label ? { role: "img", "aria-label": props.label } : { "aria-hidden": "true" };
    return h("svg", Object.assign({
      viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: name === "more" ? 2.5 : 1.75,
      strokeLinecap: "round", strokeLinejoin: "round", focusable: "false",
      className: cx("lm-icon", size === "sm" && "lm-icon-sm", props.className)
    }, a11y, extra), parts.map(function (p, i) { return h(p[0], Object.assign({ key: i }, p[1])); }));
  }
  Icon.names = Object.keys(ICONS);

  /* ---------------- Button ---------------- */
  function Button(props) {
    var variant = props.variant || "primary", size = props.size || "md";
    var iconOnly = props.icon && !props.children;
    var rest = omit(props, ["variant", "size", "icon", "iconRight", "loading", "block", "className", "children", "as", "state"]);
    var tag = props.as || (props.href ? "a" : "button");
    if (tag === "button" && !rest.type) rest.type = "button";
    if (props.loading) { rest["aria-busy"] = "true"; rest.disabled = true; }
    var iconSize = size === "sm" ? "sm" : "md";
    return h(tag, Object.assign({
      className: cx("lm-btn", "lm-btn-" + variant, size !== "md" && "lm-btn-" + size, props.block && "lm-btn-block",
        iconOnly && "lm-btn-icononly", props.loading && "is-loading", props.state && "is-" + props.state, props.className)
    }, rest),
      props.loading ? h("span", { className: "lm-spinner", "aria-hidden": "true" }) : (props.icon ? h(Icon, { name: props.icon, size: iconSize }) : null),
      props.children != null ? h("span", { className: "lm-btn-label" }, props.children) : null,
      props.iconRight ? h(Icon, { name: props.iconRight, size: iconSize }) : null);
  }

  /* ---------------- Field shell shared by TextField and Select ---------------- */
  function FieldShell(p, id, control) {
    var hintId = id + "-hint";
    return h("div", { className: cx("lm-field", p.className), style: p.style },
      p.label ? h("label", { className: "lm-label", htmlFor: id }, p.label,
        p.required ? h("span", { className: "lm-label-req", "aria-hidden": "true" }, "*") : null,
        p.optional ? h("span", { className: "lm-label-opt" }, "(optional)") : null) : null,
      control,
      p.error ? h("p", { className: "lm-error", id: hintId }, h(Icon, { name: "alert", size: "sm" }), p.error)
        : (p.hint ? h("p", { className: "lm-hint", id: hintId }, p.hint) : null));
  }
  function wrapClass(p, extra) {
    return cx("lm-input-wrap", p.size && p.size !== "md" && "lm-size-" + p.size, p.error && "is-invalid",
      p.disabled && "is-disabled", p.readOnly && "is-readonly", p.state && "is-" + p.state, extra);
  }

  function TextField(props) {
    var autoId = useId("field"); var id = props.id || autoId;
    var input = omit(props, ["label", "hint", "error", "icon", "prefix", "suffix", "size", "className", "style", "optional", "state", "multiline", "rows", "trailing"]);
    input.id = id;
    input.className = "lm-input";
    if (props.error || props.hint) input["aria-describedby"] = id + "-hint";
    if (props.error) input["aria-invalid"] = "true";
    var control = props.multiline ? h("textarea", Object.assign({ rows: props.rows || 3 }, input)) : h("input", Object.assign({ type: "text" }, input));
    return FieldShell(props, id, h("div", { className: wrapClass(props, props.multiline && "lm-textarea") },
      props.icon ? h(Icon, { name: props.icon, size: props.size === "sm" ? "sm" : "md" }) : null,
      props.prefix ? h("span", { className: "lm-addon" }, props.prefix) : null,
      control,
      props.suffix ? h("span", { className: "lm-addon" }, props.suffix) : null,
      props.trailing || null));
  }

  function Select(props) {
    var autoId = useId("select"); var id = props.id || autoId;
    var sel = omit(props, ["label", "hint", "error", "icon", "size", "className", "style", "optional", "state", "options", "placeholder"]);
    sel.id = id; sel.className = "lm-input lm-select";
    if (props.error || props.hint) sel["aria-describedby"] = id + "-hint";
    if (props.error) sel["aria-invalid"] = "true";
    var opts = (props.options || []).map(function (o) {
      var v = typeof o === "string" ? { value: o, label: o } : o;
      return h("option", { key: v.value, value: v.value, disabled: v.disabled }, v.label);
    });
    if (props.placeholder) opts.unshift(h("option", { key: "__ph", value: "", disabled: true }, props.placeholder));
    if (props.placeholder && sel.value === undefined && sel.defaultValue === undefined) sel.defaultValue = "";
    return FieldShell(props, id, h("div", { className: wrapClass(props, "lm-select-wrap") },
      props.icon ? h(Icon, { name: props.icon }) : null,
      h("select", sel, opts),
      h(Icon, { name: "chevron-down", size: "sm", className: "lm-select-chev" })));
  }

  /* ---------------- Checkbox ---------------- */
  function Checkbox(props) {
    var ref = React.useRef(null);
    var input = omit(props, ["label", "description", "indeterminate", "className", "state"]);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!props.indeterminate; }, [props.indeterminate]);
    return h("label", { className: cx("lm-check", props.disabled && "is-disabled", props.state && "is-" + props.state, props.className) },
      h("input", Object.assign({ type: "checkbox", ref: ref }, input)),
      h("span", { className: "lm-check-box", "aria-hidden": "true" },
        props.indeterminate ? h("svg", { viewBox: "0 0 24 24", width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round" }, h("path", { d: "M6 12h12" }))
          : h("svg", { viewBox: "0 0 24 24", width: 14, height: 14, fill: "none", stroke: "currentColor", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round", className: "lm-check-mark" }, h("path", { d: "M5 12.5l4.5 4.5L19 7.5" }))),
      props.label ? h("span", null, props.label, props.description ? h("span", { className: "lm-check-desc" }, props.description) : null) : null);
  }

  /* ---------------- Switch ---------------- */
  function Switch(props) {
    var controlled = props.checked !== undefined;
    var st = React.useState(!!props.defaultChecked);
    var on = controlled ? !!props.checked : st[0];
    var autoId = useId("switch"); var id = props.id || autoId;
    function toggle() {
      if (props.disabled) return;
      if (!controlled) st[1](!on);
      if (props.onChange) props.onChange(!on);
    }
    var btn = h("button", {
      type: "button", role: "switch", id: id, "aria-checked": on ? "true" : "false", disabled: props.disabled,
      "aria-label": props.label ? undefined : props["aria-label"],
      className: cx("lm-switch", props.state && "is-" + props.state), onClick: toggle
    });
    if (!props.label) return btn;
    return h("span", { className: cx("lm-switch-row", props.disabled && "is-disabled", props.className) },
      btn, h("label", { htmlFor: id, style: { cursor: "inherit" } }, props.label));
  }

  /* ---------------- Card ---------------- */
  function Card(props) {
    var variant = props.variant || "outlined";
    var interactive = variant === "interactive";
    var rest = omit(props, ["variant", "title", "description", "actions", "footer", "children", "className", "flush", "selected", "state"]);
    var hasHead = props.title || props.actions;
    return h(interactive ? "button" : "section", Object.assign({
      type: interactive ? "button" : undefined,
      className: cx("lm-card", "lm-card-" + variant, props.flush && "lm-card-flush", props.selected && "is-selected", props.state && "is-" + props.state, props.className)
    }, rest),
      hasHead ? h("div", { className: "lm-card-head" },
        h("div", null, props.title ? h("h3", { className: "lm-card-title" }, props.title) : null,
          props.description ? h("p", { className: "lm-card-desc" }, props.description) : null),
        props.actions ? h("div", { className: "lm-row", style: { gap: "var(--space-2)", flexWrap: "nowrap" } }, props.actions) : null) : null,
      props.children != null ? h("div", { className: "lm-card-body" }, props.children) : null,
      props.footer ? h("div", { className: "lm-card-foot" }, props.footer) : null);
  }

  /* ---------------- StatCard ---------------- */
  function StatCard(props) {
    var trend = props.trend || "flat";
    var arrow = trend === "up" ? "arrow-up" : trend === "down" ? "arrow-down" : null;
    return h("section", { className: cx("lm-card", props.className) },
      h("div", { className: "lm-stat" },
        h("div", { className: "lm-stat-top" }, h("span", { className: "lm-stat-label" }, props.label), props.icon ? h(Icon, { name: props.icon, size: "sm" }) : null),
        h("div", { className: "lm-stat-value" }, props.value),
        h("div", { className: "lm-stat-foot" },
          props.delta ? h("span", { className: "lm-delta lm-delta-" + trend },
            arrow ? h(Icon, { name: arrow, size: "sm", style: { width: 12, height: 12 } }) : null, props.delta,
            h("span", { style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }, trend === "up" ? " increase" : trend === "down" ? " decrease" : " no change")) : null,
          props.caption ? h("span", null, props.caption) : null)));
  }

  /* ---------------- Badge ---------------- */
  function Badge(props) {
    var tone = props.tone || "neutral";
    return h("span", { className: cx("lm-badge", tone !== "neutral" && "lm-badge-" + tone, props.dot && "lm-badge-dot", props.pill && "lm-badge-pill", props.className) },
      props.icon ? h(Icon, { name: props.icon, size: "sm", style: { width: 14, height: 14 } }) : null, props.children);
  }

  /* ---------------- Alert ---------------- */
  var ALERT_ICON = { info: "info", success: "check-circle", warning: "alert", danger: "x-circle" };
  function Alert(props) {
    var tone = props.tone || "info";
    return h("div", { role: tone === "danger" || tone === "warning" ? "alert" : "status", className: cx("lm-alert", "lm-alert-" + tone, props.className) },
      h(Icon, { name: ALERT_ICON[tone], className: "lm-alert-icon" }),
      h("div", { className: "lm-alert-main" },
        props.title ? h("p", { className: "lm-alert-title" }, props.title) : null,
        props.children ? h("p", { className: "lm-alert-text" }, props.children) : null,
        props.actions ? h("div", { className: "lm-alert-actions" }, props.actions) : null),
      props.onClose ? h(Button, { variant: "ghost", size: "sm", icon: "x", "aria-label": "Dismiss", onClick: props.onClose, style: { marginTop: -6, marginRight: -8 } }) : null);
  }

  /* ---------------- Avatar ---------------- */
  function initials(name) {
    var parts = String(name || "?").trim().split(/\s+/);
    return ((parts[0] || "")[0] || "").toUpperCase() + (parts.length > 1 ? (parts[parts.length - 1][0] || "").toUpperCase() : "");
  }
  function Avatar(props) {
    var size = props.size || "md";
    return h("span", { className: cx("lm-avatar", size !== "md" && "lm-avatar-" + size, props.tone === "neutral" && "lm-avatar-neutral", props.className), role: "img", "aria-label": props.name },
      props.src ? h("img", { src: props.src, alt: "", style: { width: "100%", height: "100%", borderRadius: "inherit", objectFit: "cover" } }) : initials(props.name),
      props.status ? h("span", { className: cx("lm-avatar-status", props.status !== "online" && "is-" + props.status) }) : null);
  }
  function AvatarGroup(props) {
    return h("span", { className: "lm-avatar-group" }, (props.names || []).map(function (n, i) { return h(Avatar, { key: i, name: n, size: props.size || "sm" }); }));
  }

  /* ---------------- Tabs ---------------- */
  function Tabs(props) {
    var items = props.items || [];
    var controlled = props.value !== undefined;
    var st = React.useState(props.defaultValue || (items[0] && items[0].value));
    var cur = controlled ? props.value : st[0];
    function pick(v) { if (!controlled) st[1](v); if (props.onChange) props.onChange(v); }
    function onKey(e) {
      var enabled = items.filter(function (t) { return !t.disabled; });
      var i = enabled.findIndex(function (t) { return t.value === cur; });
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        var n = enabled[(i + (e.key === "ArrowRight" ? 1 : enabled.length - 1)) % enabled.length];
        pick(n.value);
        var el = e.currentTarget.querySelector('[data-value="' + n.value + '"]'); if (el) el.focus();
      }
    }
    return h("div", { role: "tablist", "aria-label": props.label, onKeyDown: onKey, className: cx("lm-tabs", props.variant === "segmented" && "lm-tabs-segmented", props.className) },
      items.map(function (t) {
        var sel = t.value === cur;
        return h("button", {
          key: t.value, type: "button", role: "tab", "data-value": t.value, "aria-selected": sel ? "true" : "false", tabIndex: sel ? 0 : -1,
          disabled: t.disabled, className: cx("lm-tab", t.state && "is-" + t.state), onClick: function () { pick(t.value); }
        }, t.icon ? h(Icon, { name: t.icon, size: "sm" }) : null, t.label, t.count != null ? h("span", { className: "lm-tab-count" }, t.count) : null);
      }));
  }

  /* ---------------- Breadcrumbs ---------------- */
  function Breadcrumbs(props) {
    var items = props.items || [];
    return h("nav", { "aria-label": "Breadcrumb" }, h("ol", { className: "lm-crumbs" }, items.map(function (it, i) {
      var last = i === items.length - 1;
      return h("li", { key: i },
        last ? h("span", { "aria-current": "page" }, it.label) : h("a", { href: it.href || "#", onClick: function (e) { if (!it.href) e.preventDefault(); } }, it.label),
        last ? null : h(Icon, { name: "chevron-right", size: "sm", style: { width: 14, height: 14, opacity: 0.7 } }));
    })));
  }

  /* ---------------- Sidebar ---------------- */
  function Sidebar(props) {
    var sections = props.sections || [];
    return h("aside", { className: cx("lm-sidebar", props.className), style: props.style, "aria-label": "Main" },
      h("div", { className: "lm-sidebar-brand" }, h("span", { className: "lm-wordmark-dot", "aria-hidden": "true" }), props.brand || "Lumen"),
      h("nav", { className: "lm-col", style: { gap: "var(--space-5)" } }, sections.map(function (s, si) {
        return h("div", { key: si, className: "lm-sidebar-section" },
          s.label ? h("div", { className: "lm-sidebar-label" }, s.label) : null,
          (s.items || []).map(function (it, ii) {
            return h("a", {
              key: ii, href: it.href || "#", className: cx("lm-nav-item", it.state && "is-" + it.state), "aria-current": it.active ? "page" : undefined,
              onClick: function (e) { if (!it.href) e.preventDefault(); if (props.onSelect) props.onSelect(it); }
            }, it.icon ? h(Icon, { name: it.icon }) : null, h("span", { className: "lm-nav-label" }, it.label),
              it.badge != null ? h("span", { className: "lm-nav-badge" }, it.badge) : null);
          }));
      })),
      props.user ? h("div", { className: "lm-sidebar-foot" },
        h(Avatar, { name: props.user.name, status: "online" }),
        h("div", { className: "lm-sidebar-user" }, h("b", null, props.user.name), h("span", null, props.user.email)),
        h(Button, { variant: "ghost", size: "sm", icon: "logout", "aria-label": "Sign out" })) : null);
  }

  /* ---------------- Topbar ---------------- */
  function Topbar(props) {
    return h("header", { className: cx("lm-topbar", props.className) },
      h("div", { className: "lm-topbar-start" },
        props.breadcrumbs ? h(Breadcrumbs, { items: props.breadcrumbs }) : (props.title ? h("span", { style: { fontWeight: 600 } }, props.title) : null)),
      h("div", { className: "lm-topbar-end" },
        props.search === false ? null : h(TextField, { size: "sm", icon: "search", placeholder: "Search", "aria-label": "Search", className: "lm-topbar-search", trailing: h("kbd", { className: "lm-kbd" }, "Ctrl K") }),
        h("span", { className: "lm-notif" }, h(Button, { variant: "ghost", icon: "bell", "aria-label": "Notifications" }), props.unread ? h("span", { className: "lm-notif-dot" }) : null),
        props.actions || null,
        props.user ? h(Avatar, { name: props.user, size: "sm" }) : null));
  }

  /* ---------------- Table ---------------- */
  function Table(props) {
    var cols = props.columns || [], rows = props.rows || [];
    return h("div", { className: cx("lm-table-wrap", props.className) },
      h("table", { className: cx("lm-table", props.dense && "lm-table-dense") },
        props.caption ? h("caption", { style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }, props.caption) : null,
        h("thead", null, h("tr", null, cols.map(function (c) {
          return h("th", { key: c.key, scope: "col", className: c.align === "right" ? "lm-align-right" : undefined, style: c.width ? { width: c.width } : undefined }, c.label);
        }))),
        h("tbody", null, rows.map(function (r, ri) {
          return h("tr", { key: r.id || ri, className: cx(r._selected && "is-selected", r._state && "is-" + r._state) }, cols.map(function (c) {
            return h("td", { key: c.key, className: c.align === "right" ? "lm-align-right" : undefined }, c.render ? c.render(r) : r[c.key]);
          }));
        }))));
  }

  /* ---------------- Dialog ---------------- */
  function Dialog(props) {
    var titleId = useId("dlg");
    React.useEffect(function () {
      if (!props.open || !props.onClose) return;
      function onKey(e) { if (e.key === "Escape") props.onClose(); }
      document.addEventListener("keydown", onKey);
      return function () { document.removeEventListener("keydown", onKey); };
    }, [props.open, props.onClose]);
    if (!props.open) return null;
    return h("div", { className: cx("lm-scrim", props.inline && "lm-scrim-inline"), onClick: function (e) { if (e.target === e.currentTarget && props.onClose) props.onClose(); } },
      h("div", { role: props.tone === "danger" ? "alertdialog" : "dialog", "aria-modal": "true", "aria-labelledby": titleId, className: "lm-dialog", style: props.width ? { maxWidth: props.width } : undefined },
        h("div", { className: "lm-dialog-head" },
          props.icon ? h("div", { className: cx("lm-dialog-icon", props.tone === "danger" && "is-danger") }, h(Icon, { name: props.icon })) : null,
          h("div", { style: { flex: 1, minWidth: 0 } }, h("h2", { id: titleId, className: "lm-dialog-title" }, props.title),
            props.description ? h("p", { className: "lm-dialog-desc" }, props.description) : null),
          props.onClose ? h(Button, { variant: "ghost", size: "sm", icon: "x", "aria-label": "Close", onClick: props.onClose, className: "lm-dialog-close" }) : null),
        props.children ? h("div", { className: "lm-dialog-body" }, props.children) : null,
        props.footer ? h("div", { className: "lm-dialog-foot" }, props.footer) : null));
  }

  var api = {
    Icon: Icon, Button: Button, TextField: TextField, Select: Select, Checkbox: Checkbox, Switch: Switch,
    Card: Card, StatCard: StatCard, Sidebar: Sidebar, Topbar: Topbar, Tabs: Tabs, Breadcrumbs: Breadcrumbs,
    Badge: Badge, Alert: Alert, Avatar: Avatar, AvatarGroup: AvatarGroup, Table: Table, Dialog: Dialog
  };
  window.Lumen = Object.assign(window.Lumen || {}, api);
})();
