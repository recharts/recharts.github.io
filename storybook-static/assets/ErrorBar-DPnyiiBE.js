import{j as r}from"./jsx-runtime-Czma8tzl.js";import{useMDXComponents as n}from"./index-CTLCQg98.js";import{M as p,C as s,a}from"./blocks-W0zkzx6g.js";import{C as m,A as i}from"./ErrorBar.stories-BXvnK-Es.js";import"./iframe-B9GGDGS1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DZx9HZGn.js";import"./utils-ePvtT4un.js";import"./ErrorBar-jpLv_y6I.js";import"./Layer-DcWLpeG9.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwlEvTRj.js";import"./ErrorBarContext-DMLt-c7m.js";import"./RechartsWrapper-EHfwRfBb.js";import"./arrayEqualityCheck-COtCLy3x.js";import"./immer-D8haotDT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D1V-1Kud.js";import"./hooks-C2J7naOZ.js";import"./axisSelectors-8xv55RbV.js";import"./d3-scale-CJw_J5vV.js";import"./zIndexSlice-Dr0l4bHj.js";import"./renderedTicksSlice-q0M83NPg.js";import"./RegisterGraphicalItemId-CE2Hr5pe.js";import"./CSSTransitionAnimate-SR_Q58UU.js";import"./useAnimationId-DnjhYXkZ.js";import"./ZIndexLayer-CbIo1jp-.js";import"./ScatterChart-DdgnVz9B.js";import"./CartesianChart-YXzBIFVQ.js";import"./chartDataContext-Z-R_60d5.js";import"./CategoricalChart-BBfSxrd4.js";import"./CartesianGrid-ZKhKpmPf.js";import"./CartesianAxis-DyjzRIeL.js";import"./Text-BfPYOH_N.js";import"./DOMUtils-BTQMQKLS.js";import"./Label-DbaG7Uem.js";import"./types-88pgmlG4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BhXpxA_M.js";import"./YAxis-CQFlmWqm.js";import"./Scatter-DiJFMUIo.js";import"./ReactUtils-CrjF-zMe.js";import"./Curve-BqOd-kHx.js";import"./step-DJMv4gH4.js";import"./tooltipContext-ClpJvol4.js";import"./Symbols-Drc7wV6L.js";import"./symbol-qWW-wzEd.js";import"./ActiveShapeUtils-DstCBXr6.js";import"./isPlainObject-Drfk2luO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMlO_C8p.js";import"./Trapezoid-Cz1Qyrxg.js";import"./Sector-CREvb1nt.js";import"./GraphicalItemClipPath-B6fH0RLB.js";import"./SetGraphicalItem-Df3jzsrS.js";import"./RechartsHookInspector-BWkI8hZR.js";import"./ChartSizeDimensions-C9x1Brk2.js";import"./OffsetShower-BIWjLM9_.js";import"./PlotAreaShower-Dpy9Dm8W.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
`,r.jsx(a,{of:i})]})}function ur(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ur as default};
