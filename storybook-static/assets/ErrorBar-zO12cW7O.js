import{u as n,j as r}from"./index-DOlJPada.js";import{M as s,C as a,a as p}from"./blocks-DjeRoR_q.js";import{C as l,A as i}from"./ErrorBar.stories-D4vfJr10.js";import"./iframe-DXxYhCFt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CK1-JLS2.js";import"./index-B4aunhTl.js";import"./index-BxnCQVmB.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CcTnsJL2.js";import"./Layer-BUsxcvuT.js";import"./get-DDC6WZq8.js";import"./resolveDefaultProps-Bho5O1tb.js";import"./ErrorBarContext-oapAiLxU.js";import"./RechartsWrapper-DlzjOLMT.js";import"./zIndexSlice-qI1U9rrE.js";import"./immer-D7akT6tS.js";import"./isWellBehavedNumber-CZeoqkhJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-cTUjJegW.js";import"./renderedTicksSlice-3Dm4ElKF.js";import"./axisSelectors-CmDHWXKB.js";import"./d3-scale-rcor9ivz.js";import"./RegisterGraphicalItemId-zrXRLiIJ.js";import"./CategoricalChart-DnXiIflv.js";import"./CSSTransitionAnimate-C8QSEyKR.js";import"./useAnimationId-B_zUITBn.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DA8tUdaM.js";import"./ScatterChart-VnmCv5dL.js";import"./CartesianChart-DvdTpmiF.js";import"./chartDataContext-Bh9U9MSr.js";import"./CartesianGrid-Cc40lTV8.js";import"./CartesianAxis-DhUSnw0c.js";import"./Text-BFOIQrpY.js";import"./DOMUtils-Bd7kqUhA.js";import"./Label-C324QdBW.js";import"./types-AXOViau4.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-C9NpqiLb.js";import"./YAxis-fukBbkBQ.js";import"./Scatter-CeoAX3Ld.js";import"./AnimatedItems-u581L8cQ.js";import"./Curve-BoZszlOQ.js";import"./step-CUCP3dE9.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dvz-E8_R.js";import"./Symbols-p6tzUQrv.js";import"./symbol-BLNVVXJX.js";import"./ActiveShapeUtils-BJbjDOel.js";import"./GraphicalItemClipPath-qvKBcuDL.js";import"./SetGraphicalItem-UU_FN1uP.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
