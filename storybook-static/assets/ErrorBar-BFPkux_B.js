import{u as n,j as r}from"./index-j0dT2syp.js";import{M as s,C as a,a as p}from"./blocks-CVXSzIEZ.js";import{C as l,A as i}from"./ErrorBar.stories-C-FCoC_d.js";import"./iframe-CIqcR0nr.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CI5kewFp.js";import"./index-D3_7IQAj.js";import"./index-iWp3ygHn.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CPid34qc.js";import"./Layer-Cz--vJfn.js";import"./get-CuhoYgBd.js";import"./resolveDefaultProps-X_RPaIii.js";import"./ErrorBarContext-D7ZmPrb-.js";import"./RechartsWrapper-CO7Bj1Ew.js";import"./zIndexSlice-BaZcNNNO.js";import"./immer-DOlCD6_E.js";import"./isWellBehavedNumber-CN_oQGvc.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BRQXzpqS.js";import"./renderedTicksSlice-uyZ8N1qc.js";import"./axisSelectors-Dp0MorEj.js";import"./d3-scale-BVoLe-e3.js";import"./string-B6fdYHAA.js";import"./RegisterGraphicalItemId-BxGDByrp.js";import"./CategoricalChart-OQdWBIBS.js";import"./CSSTransitionAnimate-Cq96xeCq.js";import"./useAnimationId-BJaGTs_s.js";import"./ZIndexLayer-B9KPNn2Z.js";import"./ScatterChart-wiRalQTh.js";import"./CartesianChart-BiFR7vHR.js";import"./chartDataContext-BkIJbLAm.js";import"./CartesianGrid-DpNIM-D2.js";import"./CartesianAxis-wzAvkxKf.js";import"./Text-CimnMCMD.js";import"./DOMUtils-DMPXj1nB.js";import"./Label-CuY-JOss.js";import"./types-3DMlx_O9.js";import"./getClassNameFromUnknown-vPJFmTf3.js";import"./XAxis-sUTGKqnh.js";import"./YAxis-Cp6hJTBs.js";import"./Scatter-hdpJBBYy.js";import"./AnimatedItems-5cW9jO0l.js";import"./Curve-DrcpD24k.js";import"./step-DBJepXtz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ORHnKUld.js";import"./Symbols-H-5RG3h3.js";import"./symbol-DI1d6Mel.js";import"./ActiveShapeUtils-BLEsVfwW.js";import"./GraphicalItemClipPath-CMCMKENx.js";import"./SetGraphicalItem-C8JcvXzc.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
