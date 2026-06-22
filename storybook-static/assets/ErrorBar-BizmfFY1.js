import{u as n,j as r}from"./index-DF3IjEfD.js";import{M as s,C as a,a as p}from"./blocks-DrCZJkuW.js";import{C as l,A as i}from"./ErrorBar.stories-h4greI-v.js";import"./iframe-Clh6Am28.js";import"./preload-helper-Dp1pzeXC.js";import"./index-mbhNu375.js";import"./index-D983Ac__.js";import"./index-81KY_DK_.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DtJTSH-q.js";import"./Layer-rOqvObKk.js";import"./get-ReXw4Xs6.js";import"./resolveDefaultProps-Cp4jCd2q.js";import"./ErrorBarContext-DAn4MkTm.js";import"./RechartsWrapper-kLRmp8Nc.js";import"./zIndexSlice-C8WH1sbl.js";import"./immer-CCKY-2O_.js";import"./isWellBehavedNumber-BTdz8jY9.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B67Qu5hK.js";import"./renderedTicksSlice--OmlTIq-.js";import"./axisSelectors-CtcLf7W7.js";import"./d3-scale-BSnqKxuH.js";import"./RegisterGraphicalItemId-C0MecWm_.js";import"./CategoricalChart-ISWmGPOG.js";import"./CSSTransitionAnimate-CKSHWtj7.js";import"./useAnimationId-CWbLQsSM.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-4xKONL83.js";import"./ScatterChart-BL42yctT.js";import"./CartesianChart-DYzbJdNk.js";import"./chartDataContext-BpoRQBsX.js";import"./CartesianGrid-BYNjs-5G.js";import"./CartesianAxis-EoQ_2pVo.js";import"./Text-X5OcHqR4.js";import"./DOMUtils-CtdcYe6Z.js";import"./Label-gvCBOhLE.js";import"./types-Clw2FxQC.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-CX5kJZWB.js";import"./YAxis-Bbuu0E_L.js";import"./Scatter-B-1TDQkF.js";import"./AnimatedItems-B05rhmS4.js";import"./Curve-CCuEPsAe.js";import"./step-Dyxzv1f8.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CXBV-r4I.js";import"./Symbols-Cq5S2wug.js";import"./symbol-Dcr2-_AE.js";import"./ActiveShapeUtils-BsSwQSYp.js";import"./GraphicalItemClipPath-Ngq7bur3.js";import"./SetGraphicalItem-BUpAV2uu.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
