import{a as s,b as f,c as m,d as w,e as y,f as k,g as x,h as d,i as $,j as _}from"./chunk.2Y6T4MXR.js";var z=Symbol.for(""),T=a=>{if((a==null?void 0:a.r)===z)return a==null?void 0:a._$litStatic$};var b=(a,...c)=>({_$litStatic$:c.reduce((o,e,v)=>o+(l=>{if(l._$litStatic$!==void 0)return l._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${l}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(e)+a[v+1],a[0]),r:z}),E=new Map,S=a=>(c,...o)=>{let e=o.length,v,l,i=[],h=[],u,t=0,g=!1;for(;t<e;){for(u=c[t];t<e&&(l=o[t],(v=T(l))!==void 0);)u+=v+c[++t],g=!0;h.push(l),i.push(u),t++}if(t===e&&i.push(c[e]),g){let p=i.join("$$lit$$");(c=E.get(p))===void 0&&(i.raw=i,E.set(p,c=i)),o=h}return a(c,...o)},L=S(m),H=S(w);var n=a=>a!=null?a:y;var M=f`
  [part="base"] {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-style: solid;
    border-width: var(--ds-input-border-width);
    box-shadow: var(--box-shadow);
    color: var(--color);
    font-family: var(--ds-font-family-body);
    font-weight: var(--ds-font-weight-medium);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    transition: var(--ds-transition-fast) all;
    cursor: pointer;
  }

  [part="base"]:hover:not(:disabled) {
    background-color: var(--background-color-hover);
    border-color: var(--border-color-hover);
  }

  [part="base"]:focus:not(:disabled) {
    background-color: var(--background-color-focus);
    border-color: var(--border-color-focus);
    box-shadow: var(--box-shadow-focus);
    outline: none;
  }

  [part="base"]:active:not(:disabled) {
    background-color: var(--background-color-active);
    border-color: var(--border-color-active);
    color: var(--color-active);
  }

  [part="base"]:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part="base"]:disabled * {
    pointer-events: none;
  }

  /*
  * variant modifiers
  */

  :host([variant="default"]) [part="base"] {
    --background-color: var(--ds-color-white);
    --border-color: var(--ds-color-cool-gray-300);
    --box-shadow: var(--ds-shadow-x-small);
    --color: var(--ds-color-cool-gray-800);

    --background-color-hover: var(--ds-color-cool-gray-50);
    --border-color-hover: var(--ds-color-cool-gray-400);

    --background-color-focus: var(--ds-color-cool-gray-50);
    --border-color-focus: var(--ds-focus-border-color);
    --box-shadow-focus: var(--ds-focus-shadow);

    --background-color-active: var(--ds-color-cool-gray-50);
    --border-color-active: var(--ds-color-cool-gray-400);
    --color-active: var(--ds-color-cool-gray-900);
  }

  :host([variant="primary"]) [part="base"] {
    --background-color: var(--ds-color-primary);
    --border-color: var(--ds-color-primary);
    --box-shadow: $var(--ds-shadow-x-small);
    --color: var(--ds-color-white);

    --background-color-hover: var(--ds-color-primary-hover);
    --border-color-hover: var(--ds-color-primary-hover);
    --color-hover: var(--ds-color-white);

    --background-color-focus: var(--ds-color-primary-hover);
    --border-color-focus: var(--ds-color-primary-hover);
    --color-focus: var(--ds-color-white);
    --box-shadow-focus: var(--ds-focus-shadow);

    --background-color-active: var(--ds-color-primary);
    --border-color-active: var(--ds-color-primary);
    --color-active: var(--ds-color-white);
  }

  :host([variant="success"]) [part="base"] {
    --background-color: var(--ds-color-success);
    --border-color: var(--ds-color-success);
    --box-shadow: var(--ds-shadow-x-small);
    --color: var(--ds-color-white);

    --background-color-hover: var(--ds-color-success-hover);
    --border-color-hover: var(--ds-color-success-hover);
    --color-hover: var(--ds-color-white);

    --background-color-focus: var(--ds-color-success-hover);
    --border-color-focus: var(--ds-color-success-hover);
    --color-focus: var(--ds-color-white);
    --box-shadow-focus: 0 0 0 3px var(--ds-color-success-focus);

    --background-color-active: var(--ds-color-success);
    --border-color-active: var(--ds-color-success);
    --color-active: var(--ds-color-white);
  }

  :host([variant="info"]) [part="base"] {
    --background-color: var(--ds-color-secondary);
    --border-color: var(--ds-color-secondary);
    --box-shadow: var(--ds-shadow-x-small);
    --color: var(--ds-color-white);

    --background-color-hover: var(--ds-color-secondary-hover);
    --border-color-hover: var(--ds-color-secondary-hover);
    --color-hover: var(--ds-color-white);

    --background-color-focus: var(--ds-color-secondary-hover);
    --border-color-focus: var(--ds-color-secondary-hover);
    --color-focus: var(--ds-color-white);
    --box-shadow-focus: 0 0 0 3px var(--ds-color-secondary-focus);

    --background-color-active: var(--ds-color-secondary);
    --border-color-active: var(--ds-color-secondary);
    --color-active: var(--ds-color-white);
  }

  :host([variant="warning"]) [part="base"] {
    --background-color: var(--ds-color-warning);
    --border-color: var(--ds-color-warning);
    --box-shadow: var(--ds-shadow-x-small);
    --color: var(--ds-color-white);

    --background-color-hover: var(--ds-color-warning-hover);
    --border-color-hover: var(--ds-color-warning-hover);
    --color-hover: var(--ds-color-white);

    --background-color-focus: var(--ds-color-warning-hover);
    --border-color-focus: var(--ds-color-warning-hover);
    --color-focus: var(--ds-color-white);
    --box-shadow-focus: 0 0 0 3px var(--ds-color-warning-focus);

    --background-color-active: var(--ds-color-warning);
    --border-color-active: var(--ds-color-warning);
    --color-active: var(--ds-color-white);
  }

  :host([variant="danger"]) [part="base"] {
    --background-color: var(--ds-color-danger);
    --border-color: var(--ds-color-danger);
    --box-shadow: var(--ds-shadow-x-small);
    --color: var(--ds-color-white);

    --background-color-hover: var(--ds-color-danger-hover);
    --border-color-hover: var(--ds-color-danger-hover);
    --color-hover: var(--ds-color-white);

    --background-color-focus: var(--ds-color-danger-hover);
    --border-color-focus: var(--ds-color-danger-hover);
    --color-focus: var(--ds-color-white);
    --box-shadow-focus: 0 0 0 3px var(--ds-color-danger-focus);

    --background-color-active: var(--ds-color-danger);
    --border-color-active: var(--ds-color-danger);
    --color-active: var(--ds-color-white);
  }

  :host([variant="text"]) [part="base"] {
    --background-color: transparent;
    --border-color: transparent;
    --color: var(--ds-color-primary);

    --background-color-hover: transparent;
    --border-color-hover: transparent;
    --color-hover: var(--ds-color-primary-hover);

    --background-color-focus: transparent;
    --border-color-focus: transparent;
    --color-focus: var(--ds-color-primary-hover);
    --box-shadow-focus: 0 0 0 3px var(--ds-color-primary-focus);

    --background-color-active: transparent;
    --border-color-active: transparent;
    --color-active: var(--ds-color-primary);
  }

  /*
  * size modifiers
  */

  :host([size="small"]) [part="base"] {
    font-size: var(--ds-button-font-size-small);
    height: var(--ds-inputs-height-small);
    line-height: calc(
      var(--ds-input-height-small) - var(--ds-input-border-width) * 2
    );
    border-radius: var(--border-radius, var(--ds-border-radius-medium));
    padding: 0 var(--ds-spacing-medium);
  }

  :host([size="medium"]) [part="base"] {
    font-size: var(--ds-button-font-size-medium);
    height: var(--ds-input-height-medium);
    line-height: calc(
      var(--ds-input-height-medium) - var(--ds-input-border-width) * 2
    );
    border-radius: var(--border-radius, var(--ds-border-radius-medium));
    padding: 0 var(--ds-spacing-large);
  }

  :host([size="large"]) [part="base"] {
    font-size: var(--ds-button-font-size-large);
    height: var(--ds-input-height-large);
    line-height: calc(
      var(--ds-input-height-large) - var(--ds-input-border-width) * 2
    );
    border-radius: var(--border-radius, var(--ds-border-radius-large));
    padding: 0 var(--ds-spacing-x-large);
  }
`;var r=class extends k{constructor(){super(...arguments);this.variant="default";this.size="medium";this.disabled=!1}click(){this.button.click()}focus(o){this.button.focus(o)}blur(){this.button.blur()}_handleBlur(o){o.stopPropagation();let e=new CustomEvent("blur",{bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleFocus(o){o.stopPropagation();let e=new CustomEvent("focus",{bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){let o=!!this.href,e=o?b`a`:b`button`;return L`
      <${e}
        part="base"
        ?disabled=${o?void 0:this.disabled}
        type=${n(o?void 0:this.submit?"submit":"button")}
        name=${n(o?void 0:this.name)}
        value=${n(o?void 0:this.value)}
        href=${n(this.href)}
        target=${n(this.target)}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
      >
        <span part="label">
          <slot></slot>
        </span>
      </${e}>
    `}};r.styles=[_,M],s([$(".button")],r.prototype,"button",2),s([d({reflect:!0})],r.prototype,"variant",2),s([d({reflect:!0})],r.prototype,"size",2),s([d({type:Boolean,reflect:!0})],r.prototype,"disabled",2),s([d()],r.prototype,"href",2),s([d()],r.prototype,"name",2),s([d()],r.prototype,"value",2),s([d({type:Boolean})],r.prototype,"submit",2),s([d()],r.prototype,"target",2),r=s([x("ds-button")],r);export{r as a};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
