import{u as n,j as r}from"./index-BGNxAyac.js";import{M as s,C as a,a as p}from"./blocks-52aU6-__.js";import{C as l,A as i}from"./ErrorBar.stories-TPNRFuKb.js";import"./iframe-C-fup5Id.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Dx7TC_Rp.js";import"./index-DjFdhAan.js";import"./index-BlVQDt2E.js";import"./utils-ePvtT4un.js";import"./ErrorBar-U0CbDbMK.js";import"./Layer-BxCAIV-n.js";import"./get-p2wvzD9I.js";import"./resolveDefaultProps-OK-IJ12C.js";import"./ErrorBarContext-P4JGsE5W.js";import"./RechartsWrapper-B95PZmfT.js";import"./zIndexSlice-NTR0fs-C.js";import"./immer-8TCI2H73.js";import"./isWellBehavedNumber-DLU1AHVw.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DNWmVjf2.js";import"./renderedTicksSlice-DiIPZqfD.js";import"./axisSelectors-BO6Bv25T.js";import"./d3-scale-BaBWXdX7.js";import"./RegisterGraphicalItemId-mXg0uLQv.js";import"./CategoricalChart-2uAqMqKC.js";import"./CSSTransitionAnimate-D_RF_PTo.js";import"./useAnimationId-CHZsXmiy.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DdUd9A7h.js";import"./ScatterChart-DI2CyJTH.js";import"./CartesianChart-DGFEm_4g.js";import"./chartDataContext-Ci_9Tusi.js";import"./CartesianGrid-DnMjpwq0.js";import"./CartesianAxis-DNfda7To.js";import"./Text-DhUd53xM.js";import"./DOMUtils-CRh4TCoN.js";import"./Label-Dx6_KP12.js";import"./types-BIM6WHXQ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-DODICsjR.js";import"./YAxis-B46hC9dU.js";import"./Scatter-MbO7ISL0.js";import"./AnimatedItems-BHa_3vog.js";import"./Curve-BxzrSemv.js";import"./step-BjlE7YIb.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DBZ8XCai.js";import"./Symbols-Dk8hcEz4.js";import"./symbol-DNpitnQR.js";import"./ActiveShapeUtils-BmOgDWMs.js";import"./GraphicalItemClipPath-CURGfNfz.js";import"./SetGraphicalItem-KcsUgiZW.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
