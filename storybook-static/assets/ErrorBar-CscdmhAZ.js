import{j as r}from"./jsx-runtime-W4OPLJpS.js";import{useMDXComponents as n}from"./index-CR2ChXRa.js";import{M as p,C as s,a}from"./blocks-CImeTP5s.js";import{C as m,A as i}from"./ErrorBar.stories-Du9-8Pc4.js";import"./iframe-CwQqlQJt.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_-HOL7T.js";import"./utils-ePvtT4un.js";import"./ErrorBar-DTA-8Bh2.js";import"./Layer-BfeVm7hl.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwAiebew.js";import"./ErrorBarContext-CnIL0nCY.js";import"./RechartsWrapper-mfnwaW4T.js";import"./arrayEqualityCheck-BajvuZUd.js";import"./immer-Bw_kturo.js";import"./PolarUtils-CTnnDHZv.js";import"./index-_RolKYTX.js";import"./hooks-CEEbPwwQ.js";import"./axisSelectors-CiLIxTM1.js";import"./d3-scale-MvDvfgbn.js";import"./zIndexSlice-C8qpENF4.js";import"./renderedTicksSlice-DD88ZL81.js";import"./RegisterGraphicalItemId-j64FPojn.js";import"./CSSTransitionAnimate-CbGDXnCI.js";import"./useAnimationId-BkdqwMyM.js";import"./ZIndexLayer-BhfIIgcP.js";import"./ScatterChart-C8jz-v2P.js";import"./CartesianChart-CB-rBxO3.js";import"./chartDataContext-DhwkPQ9I.js";import"./CategoricalChart-D6AbF0nJ.js";import"./CartesianGrid-DF56C0NO.js";import"./CartesianAxis--UFkxmwi.js";import"./Text-DEfSdBAV.js";import"./DOMUtils-Dk-0Y4qu.js";import"./Label-L2ClqQk9.js";import"./types-iTXorHjM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-WQ1W94Oc.js";import"./YAxis-DZx2Qb_9.js";import"./Scatter-C0THQHUI.js";import"./ReactUtils-3SZUbpqz.js";import"./Curve-DVUJSzGy.js";import"./step-CzpXmVwk.js";import"./tooltipContext-G5wINDfz.js";import"./Symbols-B_0LQQd8.js";import"./symbol-BrIbO22w.js";import"./ActiveShapeUtils-Cc01wXEA.js";import"./isPlainObject-BdAdFHxg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfTwe_Uy.js";import"./Trapezoid-DuD6k8aH.js";import"./Sector-DlF65nWv.js";import"./GraphicalItemClipPath-CGVVVryc.js";import"./SetGraphicalItem-B838l6ba.js";import"./RechartsHookInspector-DE9uvm11.js";import"./ChartSizeDimensions-B33reZ_o.js";import"./OffsetShower-CD2wvvOr.js";import"./PlotAreaShower-CwvzOICJ.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
