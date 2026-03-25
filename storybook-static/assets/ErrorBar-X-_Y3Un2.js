import{j as r}from"./jsx-runtime-B9PkKIwg.js";import{useMDXComponents as n}from"./index-ByO9kSeA.js";import{M as p,C as s,a}from"./blocks-Ddrru2Qr.js";import{C as m,A as i}from"./ErrorBar.stories-CmOJiNzM.js";import"./iframe-DjpYK-o-.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DPPgUz6W.js";import"./utils-ePvtT4un.js";import"./ErrorBar-mCpaSAB_.js";import"./Layer-ClpAj3mi.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C42G_ffr.js";import"./ErrorBarContext-DPi1-we4.js";import"./RechartsWrapper-CauuEd3r.js";import"./arrayEqualityCheck-BdSiZsNM.js";import"./immer-D4y8T5a7.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B9U8pH8P.js";import"./hooks-DMOVvbqY.js";import"./axisSelectors-DOtt8rOg.js";import"./d3-scale-BGWrA6kg.js";import"./zIndexSlice-BwAJg9IA.js";import"./renderedTicksSlice-DA_2QpHv.js";import"./RegisterGraphicalItemId-BvqmWFzi.js";import"./CSSTransitionAnimate-uLpwa_UG.js";import"./useAnimationId-DA-f91a4.js";import"./ZIndexLayer-BYBCo22l.js";import"./ScatterChart-CHA5kBht.js";import"./CartesianChart-S0vn2j2X.js";import"./chartDataContext-DMhYHlkG.js";import"./CategoricalChart-DEHztz1y.js";import"./CartesianGrid-JR9nO7Fn.js";import"./CartesianAxis-BU6WfKzj.js";import"./Text-hUj7bTMa.js";import"./DOMUtils-Bertp5OK.js";import"./Label-Df3TKPqw.js";import"./types-e-ZS-U8T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-Bcdqw-wv.js";import"./YAxis-BdrmorAZ.js";import"./Scatter-DfCQfqL_.js";import"./ReactUtils-0Og-Hkqc.js";import"./Curve-B8xtuMQr.js";import"./step-BxVjdfNs.js";import"./tooltipContext-B9R-p_Gz.js";import"./Symbols-BYV52fjj.js";import"./symbol-BODo34re.js";import"./ActiveShapeUtils-Dirt4gFG.js";import"./isPlainObject-Bpjrt-ZA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B37Ytfod.js";import"./Trapezoid-BWufpwnM.js";import"./Sector-0IwDdBHs.js";import"./GraphicalItemClipPath-CTrBCXbW.js";import"./SetGraphicalItem-a4oiN2v8.js";import"./RechartsHookInspector-D54qOyzT.js";import"./ChartSizeDimensions-B8zKV2n0.js";import"./OffsetShower-DWnJVUQp.js";import"./PlotAreaShower-B2Ag3HsK.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
