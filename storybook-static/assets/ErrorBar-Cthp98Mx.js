import{j as r}from"./jsx-runtime-CqG51vhZ.js";import{useMDXComponents as n}from"./index-DRjYUqOn.js";import{M as p,C as s,a}from"./blocks-DReFme3T.js";import{C as m,A as i}from"./ErrorBar.stories-BaLyDGJz.js";import"./iframe-DU8eCc54.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Cm2tec04.js";import"./utils-ePvtT4un.js";import"./ErrorBar-C5sZO7EF.js";import"./Layer-BvRSrkrt.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuF4MmFq.js";import"./ErrorBarContext-BNplQJsE.js";import"./RechartsWrapper-C5gztReH.js";import"./arrayEqualityCheck-Qp-5SSbe.js";import"./immer-DU5qWI3u.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DQdIN_Xy.js";import"./hooks-BJclsIvf.js";import"./axisSelectors-_6DhXqkc.js";import"./d3-scale-DU3kIA5p.js";import"./zIndexSlice-DTpubRK7.js";import"./renderedTicksSlice-Bn5V3AB5.js";import"./RegisterGraphicalItemId-DkNBI1Sa.js";import"./CSSTransitionAnimate-D1vvytT6.js";import"./useAnimationId-DBo0HAQE.js";import"./ZIndexLayer-yILhEk3Y.js";import"./ScatterChart-mjyuiYlX.js";import"./CartesianChart-B9jAZwRS.js";import"./chartDataContext-B3buAU5Y.js";import"./CategoricalChart-NWkiMroK.js";import"./CartesianGrid-DYSU-Spr.js";import"./CartesianAxis-Cm-albbm.js";import"./Text-CoSb7mYB.js";import"./DOMUtils-CJsccqgn.js";import"./Label-DOEvYZv6.js";import"./types-BuwCBhFk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-BLh_gYvb.js";import"./YAxis-DVMQwddV.js";import"./Scatter-BvR4d6-5.js";import"./ReactUtils-BqHSyciS.js";import"./Curve-CxvlU3dw.js";import"./step-rHtSy8FE.js";import"./tooltipContext-BTs8o_iT.js";import"./Symbols-DiLU7ggZ.js";import"./symbol-BOFZ4ILC.js";import"./ActiveShapeUtils-BG4C0dYN.js";import"./isPlainObject-BxgfEpp7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-H4hJrl9W.js";import"./Trapezoid-DHbRiH3v.js";import"./Sector-B3eubpfo.js";import"./GraphicalItemClipPath-DikKl46E.js";import"./SetGraphicalItem-EApE1d4j.js";import"./RechartsHookInspector-BoR36NoE.js";import"./ChartSizeDimensions-56Hl6M0T.js";import"./OffsetShower-lCaRoXjj.js";import"./PlotAreaShower-Cn7QQOSS.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
