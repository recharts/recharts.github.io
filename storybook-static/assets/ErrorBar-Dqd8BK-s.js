import{j as r}from"./jsx-runtime-CgD_sq47.js";import{useMDXComponents as n}from"./index-BmOB2R6_.js";import{M as p,C as s,a}from"./blocks-BfiM__3J.js";import{C as m,A as i}from"./ErrorBar.stories-cc-rTZJh.js";import"./iframe-B6PVJaTx.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DliOLYsg.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DOYcsJwV.js";import"./Layer-B8Qqjz1b.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-SbZpfCF8.js";import"./ErrorBarContext-CPj1LVBL.js";import"./RechartsWrapper-BP-lLfVx.js";import"./arrayEqualityCheck--l5nbOOj.js";import"./immer-C_TrIJMh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BYl1MF2O.js";import"./hooks-CMcsnkVg.js";import"./axisSelectors-Bycocccg.js";import"./d3-scale-B9ZoAAf3.js";import"./zIndexSlice-67Af1QFi.js";import"./renderedTicksSlice-BgZ61m11.js";import"./RegisterGraphicalItemId-u9lrCCFO.js";import"./CSSTransitionAnimate-B9CcKlsB.js";import"./useAnimationId-BQkpZnA1.js";import"./ZIndexLayer-d-D4FVJh.js";import"./ScatterChart-CXt9TZJo.js";import"./CartesianChart-VouzMpCB.js";import"./chartDataContext-KAdJCeqF.js";import"./CategoricalChart-BKdjoORw.js";import"./CartesianGrid-mAYc4o0w.js";import"./CartesianAxis-DZRbozUC.js";import"./Text-C0kuQw6e.js";import"./DOMUtils-C2NDlTFm.js";import"./Label-BcLUaBCG.js";import"./types-D2EFyeKu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-B6nzW_y2.js";import"./YAxis-D3KHnhFR.js";import"./Scatter-DF6G9b0w.js";import"./ReactUtils-BX8s_uVv.js";import"./Curve-DFsvHQ10.js";import"./step-D3frr3Yw.js";import"./tooltipContext-DBaxOlkE.js";import"./Symbols-D85bhFp3.js";import"./symbol-JouRlcFh.js";import"./ActiveShapeUtils-B_lqA0BU.js";import"./isPlainObject-BDf_CSQT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BTXCPNQZ.js";import"./Trapezoid-B69mIrTK.js";import"./Sector-DBXvXTeF.js";import"./GraphicalItemClipPath-BvACd4D_.js";import"./SetGraphicalItem-D73Bmw1S.js";import"./RechartsHookInspector-DAdFhUj3.js";import"./ChartSizeDimensions-DJ4EsjSA.js";import"./OffsetShower-BD_1fIgB.js";import"./PlotAreaShower-CzP38MFh.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
