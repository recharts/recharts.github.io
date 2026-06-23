import{u as n,j as r}from"./index-Ba0d660e.js";import{M as s,C as a,a as p}from"./blocks-bT6X65vy.js";import{C as l,A as i}from"./ErrorBar.stories-CUvHWUPs.js";import"./iframe-DGZg1BaY.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cct5a00b.js";import"./index-clGj1WHq.js";import"./index-BXki0_jB.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DNJAZXZ5.js";import"./Layer--_bnQ9Ul.js";import"./get-DY0OjSK6.js";import"./resolveDefaultProps-BjAvdkCv.js";import"./ErrorBarContext-DCQzTmNl.js";import"./RechartsWrapper-Bacgswk5.js";import"./zIndexSlice-RSobkBfJ.js";import"./immer-BT6VGnPe.js";import"./isWellBehavedNumber-0KuhYisV.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CkL0GuEG.js";import"./renderedTicksSlice-Dewx_RJS.js";import"./axisSelectors-CdelNDSz.js";import"./d3-scale-CTB_TOgf.js";import"./RegisterGraphicalItemId-BYwdAoF6.js";import"./CategoricalChart-BMzuLFGj.js";import"./CSSTransitionAnimate-CMztWtNa.js";import"./useAnimationId-CGxH7MOe.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-5g4pRwMA.js";import"./ScatterChart-r1LHitse.js";import"./CartesianChart-BJ5L6c8p.js";import"./chartDataContext-Cq7x5jLr.js";import"./CartesianGrid-Cxo9TLCz.js";import"./CartesianAxis-DDEi9eFQ.js";import"./Text-BqNTVXko.js";import"./DOMUtils-BzC8w9yF.js";import"./Label-B4XUjnXV.js";import"./types-CUzx8cK0.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-BkrEDfGE.js";import"./YAxis-BZtV9zAx.js";import"./Scatter-D3q9zRD3.js";import"./AnimatedItems-CAvgFIRj.js";import"./Curve-BNlPs19R.js";import"./step-BQdN9BCS.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CrpRND0v.js";import"./Symbols-dDjIREJ5.js";import"./symbol-CR9QZI-y.js";import"./ActiveShapeUtils-Dc_2IcP9.js";import"./GraphicalItemClipPath-gslOIRLN.js";import"./SetGraphicalItem-BCxyd91k.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:r.jsx(e.p,{children:`Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the
lower bound, second value is the upper bound.`})})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`The values provided are relative to the main data value. For example, if the main data value is 10 and the error value
is 2, the error bar will extend from 8 to 12 for symmetric error bars.`})}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:r.jsx(e.p,{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value as the reference point for calculating the
error bar positions.`})}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function pr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{pr as default};
