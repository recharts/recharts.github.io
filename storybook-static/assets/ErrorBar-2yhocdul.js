import{j as r}from"./jsx-runtime-DvUVwB4H.js";import{useMDXComponents as n}from"./index-2nVhigmX.js";import{M as p,C as s,a}from"./blocks-ESPFTxnp.js";import{C as m,A as i}from"./ErrorBar.stories-qIawQom9.js";import"./iframe-oUl0Edsa.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CrxHXiCq.js";import"./utils-ePvtT4un.js";import"./ErrorBar-CSf7QYsi.js";import"./Layer-D8QuYoPE.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAhGbC_6.js";import"./ErrorBarContext-B_Z1VglQ.js";import"./RechartsWrapper-hGE8ryIc.js";import"./arrayEqualityCheck-DO0IznND.js";import"./immer-B4_TuAzJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BpdNigRW.js";import"./hooks-BR4mxfYm.js";import"./axisSelectors-oQCI-_oE.js";import"./d3-scale-vJidlWzy.js";import"./zIndexSlice-DaoY5asK.js";import"./renderedTicksSlice-BwLnTfQZ.js";import"./RegisterGraphicalItemId-D0Ds9Sqy.js";import"./CSSTransitionAnimate-CO9Ta0-m.js";import"./useAnimationId-Ce3W7lPK.js";import"./ZIndexLayer-Dv9xqvVt.js";import"./ScatterChart-DEbEZvI1.js";import"./CartesianChart-QkTvUAzL.js";import"./chartDataContext-0PCCbTAT.js";import"./CategoricalChart-D3ZmkNqf.js";import"./CartesianGrid-Di7JZSsJ.js";import"./CartesianAxis-DHjsb2H9.js";import"./Text-CIurUiqp.js";import"./DOMUtils-QcPDFTXM.js";import"./Label-CQcshbP4.js";import"./types-DJAvwsGW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-CkmpPqZg.js";import"./YAxis-B5DZSFg9.js";import"./Scatter-DiPDOqpG.js";import"./ReactUtils-DtRK-XUg.js";import"./Curve-DW9fdXku.js";import"./step-DDhJKU_a.js";import"./tooltipContext-3nxma3kN.js";import"./Symbols-Byia_tNj.js";import"./symbol-BAzjQ5Pa.js";import"./ActiveShapeUtils-CRXMg51J.js";import"./isPlainObject-kds9_JFm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CWqU2ttX.js";import"./Trapezoid-D_tQTiyy.js";import"./Sector-CpUI0G8W.js";import"./GraphicalItemClipPath-BI0ffFR3.js";import"./SetGraphicalItem-DwmwyDT6.js";import"./RechartsHookInspector-DzCPY6-s.js";import"./ChartSizeDimensions-BcXpSJ4G.js";import"./OffsetShower-CWs6Hx-m.js";import"./PlotAreaShower-CXnVCFpH.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
