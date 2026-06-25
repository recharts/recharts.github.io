import{u as n,j as r}from"./index-B_SMvLKW.js";import{M as s,C as a,a as p}from"./blocks-D56T0G6U.js";import{C as l,A as i}from"./ErrorBar.stories-BGLIWhIU.js";import"./iframe-_8NIVtea.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CMd9L2k1.js";import"./index-DP0Hg4Uq.js";import"./index-DXHSNIUu.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B_FpCxMN.js";import"./Layer-CvtIbty1.js";import"./get-BPH4xIrS.js";import"./resolveDefaultProps-DWak00ij.js";import"./ErrorBarContext--tZY8j9K.js";import"./RechartsWrapper-Btm1Myi_.js";import"./zIndexSlice-DHi0zTqt.js";import"./immer-DtWKh-al.js";import"./isWellBehavedNumber-C_LYkTy5.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C4r4CwZ3.js";import"./renderedTicksSlice-BSwSfTVH.js";import"./axisSelectors-B0oXaHqO.js";import"./d3-scale-CJIJLRQO.js";import"./RegisterGraphicalItemId-IKsKal1D.js";import"./CategoricalChart-Cq5j6ts0.js";import"./CSSTransitionAnimate-D1PAK9ni.js";import"./useAnimationId-D4zdEFfm.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-D0YIaJsD.js";import"./ScatterChart-265PQ4be.js";import"./CartesianChart-CyMc8rJv.js";import"./chartDataContext-CURMS4bg.js";import"./CartesianGrid-225WjMr5.js";import"./CartesianAxis-BJg7B04w.js";import"./Text-Dn8CYcWJ.js";import"./DOMUtils-DxzVORfb.js";import"./Label-Bho1wkfx.js";import"./types-B89ht9kr.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-CXj9NRSO.js";import"./YAxis-Cq9nELWF.js";import"./Scatter-GQsj5NcB.js";import"./AnimatedItems-BQ9vzcvs.js";import"./Curve-7XStj8oj.js";import"./step-BedGzIKx.js";import"./path-DyVhHtw_.js";import"./tooltipContext-h71PSfG3.js";import"./Symbols-DuOYoSda.js";import"./symbol-CNSzdyHw.js";import"./ActiveShapeUtils-CCiDKEDP.js";import"./GraphicalItemClipPath-D7_UBVME.js";import"./SetGraphicalItem-rhq5lQpj.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
