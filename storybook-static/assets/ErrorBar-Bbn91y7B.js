import{j as r}from"./jsx-runtime-Tbv7OSUQ.js";import{useMDXComponents as n}from"./index-CYTIH0hd.js";import{M as s,C as a,a as p}from"./blocks-5abs5Dea.js";import{C as m,A as i}from"./ErrorBar.stories-DBZKemRr.js";import"./iframe-CnfUedcN.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BUn4aue4.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Cag_lCa8.js";import"./Layer-D-nKIsW1.js";import"./resolveDefaultProps-CVejQHWD.js";import"./ErrorBarContext-DNwwyg_J.js";import"./RechartsWrapper-UZgszUQZ.js";import"./arrayEqualityCheck-rY7iVDz-.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-dlNhbOk4.js";import"./axisSelectors-vytjTI39.js";import"./zIndexSlice-Dvx1lbqL.js";import"./RegisterGraphicalItemId-B0F4aXR1.js";import"./CSSTransitionAnimate-Di1XXhFY.js";import"./useAnimationId-34yVtl_d.js";import"./ZIndexLayer-DbY_9wcH.js";import"./ScatterChart-CrSzpW0G.js";import"./CartesianChart-CxN-AX8e.js";import"./chartDataContext-DVPFzTpf.js";import"./CategoricalChart-Bvh-Z6kO.js";import"./CartesianGrid-B1kAbEgK.js";import"./CartesianAxis-CDEvUzTG.js";import"./Text-Bxj3u51B.js";import"./DOMUtils-BXcCCvqt.js";import"./Label-YyARJRE4.js";import"./types-D8riT1ui.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-veq9g2__.js";import"./YAxis-CRL5LUi9.js";import"./Scatter-BzxurqdC.js";import"./ReactUtils-BJDXxPy8.js";import"./Curve-Cyx3ROtR.js";import"./tooltipContext-B3rjCElX.js";import"./Symbols-cggM9Iun.js";import"./ActiveShapeUtils-BJYqXFPt.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD8FGW0K.js";import"./Trapezoid-BFp34q_q.js";import"./Sector-CKxLHTaG.js";import"./GraphicalItemClipPath-Dl9XvTzN.js";import"./SetGraphicalItem-CDc4e0JF.js";import"./RechartsHookInspector-r5irvpzN.js";import"./ChartSizeDimensions-BN5VWsPC.js";import"./OffsetShower-Bj6jxFEA.js";import"./PlotAreaShower-fzrOqZm1.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
