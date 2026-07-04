import{u as n,j as r}from"./index-Cas0CVcw.js";import{M as s,C as a,a as p}from"./blocks-DZcKKv47.js";import{C as l,A as i}from"./ErrorBar.stories-CrCjQL7U.js";import"./iframe-Ds1J5XKD.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Co2IbVNM.js";import"./index-CzrGLoIQ.js";import"./index-BzzxIcBT.js";import"./utils-ePvtT4un.js";import"./ErrorBar-tED8eJIe.js";import"./Layer-nVED5kUO.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Do401MpT.js";import"./ErrorBarContext-aJ-QmRys.js";import"./RechartsWrapper-BAOT1HW_.js";import"./zIndexSlice-UCyaaMGS.js";import"./throttle-BH_VG--i.js";import"./isWellBehavedNumber-Dz72kwHe.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D20-MSnL.js";import"./renderedTicksSlice-kb1cJng-.js";import"./axisSelectors-Tr36h9al.js";import"./d3-scale-C3U5gPbW.js";import"./RegisterGraphicalItemId-i_epzSee.js";import"./CategoricalChart-wjwwJKX3.js";import"./CSSTransitionAnimate-CTXbk_0e.js";import"./useAnimationId-CHjE-uiV.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-DZsY-UK0.js";import"./ScatterChart-4tLqsv1r.js";import"./CartesianChart-DOdhq5wJ.js";import"./chartDataContext-BhVZbVOm.js";import"./CartesianGrid-BJ2avNT5.js";import"./CartesianAxis-CDp_ZXfj.js";import"./Text-jdQ0MfG2.js";import"./DOMUtils-DsCGVJ9c.js";import"./Label-CNOb6BUs.js";import"./types-BQazP4PY.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-DoWvPRbH.js";import"./YAxis-eP85-8SJ.js";import"./Scatter-D5Dzx-AH.js";import"./AnimatedItems-D70ai7P5.js";import"./Curve-C9kHMz3L.js";import"./step-7tBtg14U.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Ch7iJ--E.js";import"./Symbols-DTqalTwC.js";import"./symbol-IDnm7d1z.js";import"./ActiveShapeUtils-CcQaIRSL.js";import"./GraphicalItemClipPath-BO5z_Dot.js";import"./SetGraphicalItem-qVzcGAlb.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
