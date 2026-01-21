import{j as r}from"./jsx-runtime-BOQYAHPp.js";import{useMDXComponents as n}from"./index-C3zvHDnb.js";import{M as s,C as a,a as p}from"./blocks-DS7FxXAE.js";import{C as l,A as i}from"./ErrorBar.stories-B07THToe.js";import"./iframe-Kkd8-ubb.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cr9WdP25.js";import"./utils-ePvtT4un.js";import"./ErrorBar-BWDnnL_b.js";import"./Layer-Cyu_K3I4.js";import"./resolveDefaultProps-e46786Oc.js";import"./ErrorBarContext-MQ-0FIOF.js";import"./RechartsWrapper-DfR_FMJ_.js";import"./arrayEqualityCheck-Ielmuttt.js";import"./PolarUtils-dpEG3P4_.js";import"./hooks-DpEg8B1p.js";import"./axisSelectors-CQsBMpsc.js";import"./zIndexSlice-oaE3QQvX.js";import"./RegisterGraphicalItemId-Dq1gRlWd.js";import"./CSSTransitionAnimate-BuWQnGzG.js";import"./useAnimationId-BuYZFA9f.js";import"./ZIndexLayer-BavQVgOF.js";import"./ScatterChart-CnXrAL67.js";import"./CartesianChart-yQMyY-ky.js";import"./chartDataContext-Cn2HGoq0.js";import"./CategoricalChart-BHUUzYjw.js";import"./CartesianGrid-BxneuM0y.js";import"./CartesianAxis-CgavSOcU.js";import"./Text-D0iQ_q13.js";import"./DOMUtils-BRB7Whks.js";import"./Label-Cj_m_2Cw.js";import"./types-CKa1MlE2.js";import"./XAxis-CbFnoS6J.js";import"./YAxis-BJyvtpDc.js";import"./Scatter-SWlFt2zw.js";import"./ReactUtils-BqeFDjfd.js";import"./Curve-bqTY_rZQ.js";import"./tooltipContext-CgoruTht.js";import"./Symbols-Do2U4jAb.js";import"./ActiveShapeUtils-D0hO1fBl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DyJZTmCf.js";import"./Trapezoid-BXOoNxp9.js";import"./Sector-cedV6umc.js";import"./GraphicalItemClipPath-CBxCy0LY.js";import"./SetGraphicalItem-umYxrYzv.js";import"./RechartsHookInspector-CcR4oLvT.js";import"./ChartSizeDimensions-DHaCW3zv.js";import"./OffsetShower-4UKMZo9R.js";import"./PlotAreaShower-DaKuRwAM.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(a,{of:i,layout:"padded"}),`
`,r.jsx(e.h2,{id:"description",children:"Description"}),`
`,r.jsx("p",{children:"ErrorBar renders whiskers to represent error margins on a chart."}),`
`,r.jsx("p",{children:"It must be a child of a graphical element."}),`
`,r.jsx("p",{children:"ErrorBar expects data in one of the following forms:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"Symmetric error bars: a single error value representing both lower and upper bounds."}),r.jsx("li",{children:"Asymmetric error bars: an array of two values representing lower and upper bounds separately. First value is the lower bound, second value is the upper bound."})]}),`
`,r.jsx("p",{children:`The values provided are relative to the main data value.
For example, if the main data value is 10 and the error value is 2,
the error bar will extend from 8 to 12 for symmetric error bars.`}),`
`,r.jsx("p",{children:"In other words, what ErrorBar will render is:"}),`
`,r.jsxs("ul",{children:[r.jsx("li",{children:"For symmetric error bars: [value - errorVal, value + errorVal]"}),r.jsx("li",{children:"For asymmetric error bars: [value - errorVal[0], value + errorVal[1]]"})]}),`
`,r.jsx("p",{children:`In stacked or ranged Bar charts, ErrorBar will use the higher data value
as the reference point for calculating the error bar positions.`}),`
`,r.jsx(e.h2,{id:"parent-component",children:"Parent Component"}),`
`,r.jsx(e.p,{children:"The ErrorBar can be used within the following parent components:"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Bar/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Line/>"})}),`
`,r.jsx(e.li,{children:r.jsx(e.code,{children:"<Scatter/>"})}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsx(p,{of:i})]})}function sr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{sr as default};
