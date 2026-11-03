import{u as n,j as r}from"./index-BzAV4agm.js";import{M as s,C as p,a}from"./blocks-DfdxQVMP.js";import{C as m,A as i}from"./ErrorBar.stories-vLTruYzm.js";import"./iframe-m3pGEKfa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Bk15LyvO.js";import"./index-B2FvYHPH.js";import"./index-CVYSO0b0.js";import"./utils-ePvtT4un.js";import"./ErrorBar-Diu6D3Pp.js";import"./Layer-CWJJdVGN.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-1_D7OVbj.js";import"./ErrorBarContext-CKCqOaVD.js";import"./RechartsWrapper-B1DLlNjF.js";import"./zIndexSlice-CiEd_T_p.js";import"./throttle-C3qsSQmj.js";import"./axisSelectors-BuHzQOVj.js";import"./polarAxisSelectors-BjeSYPTx.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-COa--qib.js";import"./index-CwIe0M5T.js";import"./renderedTicksSlice-riwhMnsC.js";import"./index-D_gkyxlq.js";import"./fillDefinitions-gM0_oynF.js";import"./dataEntryStyles-D1ArbIJ7.js";import"./CSSTransitionAnimate-CsIHeNmH.js";import"./useAnimationId-CZ85B9in.js";import"./util-Dxo8gN5i.js";import"./ZIndexLayer-dW6YEDVz.js";import"./ScatterChart-BShzc0wU.js";import"./CartesianChart-CVVFQDxq.js";import"./ZIndexPortal-CX0wxjxU.js";import"./CategoricalChart-Cbbud_Be.js";import"./CartesianGrid-SQ0kUj6g.js";import"./CartesianAxis-4cS3xnQT.js";import"./Text-C8slSLt5.js";import"./DOMUtils-CgNaQgzY.js";import"./Label-BWwlrPxZ.js";import"./types-NW0KOpFv.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./isBuffer-AZzsDYE7.js";import"./XAxis-BaVE9EFQ.js";import"./YAxis-swa8vM-B.js";import"./Scatter-BCpDj5Ym.js";import"./LabelList-DpjRmARQ.js";import"./activeStyles-Bu9SIE65.js";import"./Curve-C8JVR8tL.js";import"./step-JD5lrPB_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bo8ESMO_.js";import"./Symbols-C8vox5bW.js";import"./symbol-QU-hqetJ.js";import"./ActiveShapeUtils-hQzu6D3o.js";import"./SetGraphicalItem-Cdf126o-.js";import"./useEffectiveDataKey-DabJGTLc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
`,r.jsx(s,{of:m}),`
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
`,r.jsx(a,{of:i})]})}function cr(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{cr as default};
