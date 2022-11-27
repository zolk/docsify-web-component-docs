import{a as t,b as a,c as e,f as d,g as s,j as l}from"./chunk.2Y6T4MXR.js";var i=a`
  [part="base"] {
    background-color: var(--ds-color-white);
    border: 1px solid var(--ds-color-cool-gray-200);
    border-radius: var(--border-radius, var(--ds-border-radius-large));
  }

  [part="header"] {
    padding: var(--ds-spacing-large);
    border-bottom: 1px solid var(--ds-color-cool-gray-200);
    color: var(--ds-color-secondary-text);
    font-size: var(--ds-font-size-18);
    font-weight: var(--ds-font-weight-medium);
  }

  [part="body"] {
    padding: var(--ds-spacing-medium) var(--ds-spacing-large);
  }
`;function m(o,n){return o.querySelector(`:scope > [slot="${n}"]`)!==null}var r=class extends d{render(){return e`
      <div part="base">
        ${m(this,"header")?e`
              <div part="header">
                <slot name="header"></slot>
              </div>
            `:""}
        <div part="body">
          <slot></slot>
        </div>
      </div>
    `}};r.styles=[l,i],r=t([s("ds-card")],r);export{r as a};
