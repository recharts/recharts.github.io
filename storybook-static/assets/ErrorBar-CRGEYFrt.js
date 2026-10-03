import{u as n,j as r}from"./index-FLLCd-TP.js";import{M as p,C as s,a}from"./blocks-DfsmzmQE.js";import{C as m,A as i}from"./ErrorBar.stories-Ds0GpOje.js";import"./iframe-7Yqq7fCu.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BP89nsqC.js";import"./index-Bvs3nnJ3.js";import"./index-CIvsYy-Z.js";import"./utils-ePvtT4un.js";import"./ErrorBar-YKZWwa07.js";import"./Layer-B4eFX6wr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DPH1JWez.js";import"./ErrorBarContext-B86Z1RsK.js";import"./RechartsWrapper-BmN3AX4B.js";import"./zIndexSlice-Clo6-Yyn.js";import"./throttle-CPS_vYKA.js";import"./isWellBehavedNumber-3XLFrVwb.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-TNeFeRD0.js";import"./d3-scale-BucieWce.js";import"./index-CMyPnnGY.js";import"./renderedTicksSlice-C7nR0wuC.js";import"./index-BmRJq5r2.js";import"./RegisterGraphicalItemId-CBb6S0jv.js";import"./useId-CQKco8O5.js";import"./CSSTransitionAnimate-DE4MuXQP.js";import"./useAnimationId-OFL2L8Zq.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-CY2z0VDd.js";import"./useBackwardsCompatibleTheme-DsG9X6Al.js";import"./ScatterChart-DtrQHrxq.js";import"./CartesianChart-B7Vexiif.js";import"./chartDataContext-BDajETE7.js";import"./CategoricalChart-DGs6T5PE.js";import"./CartesianGrid-DdQBLXg1.js";import"./CartesianAxis-Tr4fBNdd.js";import"./Text-CBP65qj4.js";import"./DOMUtils-DFLenfZw.js";import"./Label-BeKnll5A.js";import"./types-BLNI4yrZ.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-BG75eWKN.js";import"./XAxis-1FKbFMeO.js";import"./YAxis-Cy7XE4j-.js";import"./Scatter-CDGE2Lvr.js";import"./AnimatedItems-BlURIwD6.js";import"./Curve-Bx49RMW5.js";import"./step-CY_23fua.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D4MbV6nY.js";import"./Symbols-CRebEb5d.js";import"./symbol-TqHkyfS6.js";import"./ActiveShapeUtils-RlmFljs4.js";import"./GraphicalItemClipPath-ElSd1RxM.js";import"./SetGraphicalItem-DDBsqrXQ.js";import"./useGraphicalItemIdentity-C_cMOVZX.js";import"./dataEntryStyles-BozVJHiq.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(p,{of:m}),`
`,r.jsx(s,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function xr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{xr as default};
