/* @ds-bundle: {"format":4,"namespace":"Claymorph","components":[{"name":"Button"},{"name":"Card"},{"name":"TextField"},{"name":"Switch"},{"name":"Badge"}]} */
(function () {
  var R = window.React, h = R.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(p, keys) { var o = {}; for (var k in p) if (keys.indexOf(k) < 0) o[k] = p[k]; return o; }

  function Button(p) {
    var rest = omit(p, ['variant', 'size', 'className']);
    return h('button', Object.assign({ type: 'button' }, rest, {
      className: cx('cm-btn', 'cm-btn-' + (p.variant || 'primary'), 'cm-btn-' + (p.size || 'md'), p.className)
    }));
  }

  function Card(p) {
    var rest = omit(p, ['tone', 'as', 'className', 'interactive']);
    return h(p.as || 'div', Object.assign({}, rest, {
      className: cx('cm-card', 'cm-card-' + (p.tone || 'raised'), p.interactive && 'cm-card-interactive', p.className)
    }));
  }

  function TextField(p) {
    var auto = R.useId ? R.useId() : 'cm-f';
    var id = p.id || auto;
    var rest = omit(p, ['label', 'hint', 'error', 'id', 'className']);
    var msg = p.error || p.hint;
    return h('div', { className: cx('cm-field', p.error && 'is-error', p.className) },
      h('label', { className: 'cm-field-label', htmlFor: id }, p.label),
      h('input', Object.assign({}, rest, {
        id: id, className: 'cm-input',
        'aria-invalid': p.error ? true : undefined,
        'aria-describedby': msg ? id + '-msg' : undefined
      })),
      msg ? h('span', { id: id + '-msg', className: 'cm-field-msg' }, p.error ? 'Error: ' + p.error : p.hint) : null);
  }

  function Switch(p) {
    var s = R.useState(!!p.defaultChecked);
    var on = p.checked != null ? !!p.checked : s[0];
    return h('button', {
      type: 'button', role: 'switch', 'aria-checked': on, disabled: p.disabled,
      className: cx('cm-switch', on && 'is-on', p.className),
      onClick: function () { if (p.checked == null) s[1](!on); if (p.onChange) p.onChange(!on); }
    },
      h('span', { className: 'cm-switch-track', 'aria-hidden': true }, h('span', { className: 'cm-switch-knob' })),
      p.label ? h('span', { className: 'cm-switch-label' }, p.label) : null);
  }

  function Badge(p) {
    return h('span', { className: cx('cm-badge', 'cm-badge-' + (p.tone || 'neutral'), p.className) }, p.children);
  }

  window.Claymorph = Object.assign(window.Claymorph || {}, { Button: Button, Card: Card, TextField: TextField, Switch: Switch, Badge: Badge });
})();
