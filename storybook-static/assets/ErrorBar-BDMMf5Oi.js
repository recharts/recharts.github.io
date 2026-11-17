import{u as n,j as r}from"./index-C7YXetBH.js";import{M as s,C as p,a}from"./blocks-CzbYomIo.js";import{C as l,A as i}from"./ErrorBar.stories-B29ao-Ul.js";import"./iframe-waGCAeMO.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CcRKR-Wz.js";import"./index-DUwJtu9Y.js";import"./index-3B7lt2Ve.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DLJUCWvz.js";import"./Layer-dmB1mICY.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dpi9F_1z.js";import"./ErrorBarContext-DLQUfAIY.js";import"./RechartsWrapper-DrhKOT3w.js";import"./zIndexSlice-Bs9eWJkZ.js";import"./throttle-CoYevXVP.js";import"./axisSelectors-BpNK-g3S.js";import"./polarAxisSelectors-DtiraoLM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-FqfjaXEu.js";import"./index-kB8F1Br5.js";import"./renderedTicksSlice-ClDU73ld.js";import"./index-11RgyOoZ.js";import"./fillDefinitions-DkO2tIQI.js";import"./dataEntryStyles-DwD17VpV.js";import"./Label-Chhp1CRe.js";import"./Text-C-WU5iwS.js";import"./ZIndexLayer-B2QwwaI-.js";import"./CSSTransitionAnimate-DWtSEJ0O.js";import"./useAnimationId-DGRCx4ie.js";import"./util-Dxo8gN5i.js";import"./ScatterChart-BWMampZN.js";import"./CartesianChart-7iyfeH7l.js";import"./chartDataContext-BbqISvQG.js";import"./CategoricalChart-D2Hb9hNl.js";import"./CartesianGrid-K2byEmuF.js";import"./CartesianAxis-BDzG2Gtt.js";import"./types-DrCFt1uv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-C97Th9HK.js";import"./YAxis-Bp6_7tMg.js";import"./Scatter-Dqc_2CL6.js";import"./activeStyles-Db3JHrE0.js";import"./Curve-Cb7BkQkF.js";import"./step-CvjzszA2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DOcO8H8O.js";import"./Symbols-sTKgXRyZ.js";import"./symbol-CRbcfw6A.js";import"./ActiveShapeUtils-BuFZhuT8.js";import"./SetGraphicalItem-DY5DQdLd.js";import"./useEffectiveDataKey-DONRPZmA.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:l}),`
`,r.jsx(p,{of:i,layout:"padded"}),`
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
`,r.jsx(a,{of:i})]})}function mr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{mr as default};
