import{j as r}from"./jsx-runtime-CptGbSbe.js";import{useMDXComponents as n}from"./index-DlQeuQtc.js";import{M as s,C as a,a as p}from"./blocks-CWWuJh1t.js";import{C as l,A as i}from"./ErrorBar.stories-5RHLMH3j.js";import"./iframe-BQCoiva3.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DKG7AucC.js";import"./utils-ePvtT4un.js";import"./ErrorBar-B5DmIJ8t.js";import"./Layer-DJ1Ub_Mt.js";import"./resolveDefaultProps-BkSCP0UE.js";import"./ErrorBarContext-Ht_zzjWi.js";import"./RechartsWrapper-vpzrlwOs.js";import"./arrayEqualityCheck-B0366wwk.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-6nrvr-mh.js";import"./axisSelectors-BeeHNvPl.js";import"./zIndexSlice-DIQaSorX.js";import"./RegisterGraphicalItemId-BshdgZU9.js";import"./CSSTransitionAnimate-CPkn5IqF.js";import"./useAnimationId-D9Kszw7L.js";import"./ZIndexLayer-MNqDcOIF.js";import"./ScatterChart-CrL6SYGQ.js";import"./CartesianChart-3obF7LW0.js";import"./chartDataContext-DynAjYRS.js";import"./CategoricalChart-BUFP8crF.js";import"./CartesianGrid-CVS13FWE.js";import"./CartesianAxis-DjqIVAOB.js";import"./Text-DJjW_aea.js";import"./DOMUtils-CR4mIpeb.js";import"./Label-DcE3tZRQ.js";import"./types-D3fsuIcd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./XAxis-adUeWkz6.js";import"./YAxis-Cm9krEUT.js";import"./Scatter-Byrxe6cq.js";import"./ReactUtils-CBZ7FQLf.js";import"./Curve-CIPXZY-U.js";import"./tooltipContext-B7Gcn_PF.js";import"./Symbols-DO7aFqSH.js";import"./ActiveShapeUtils-BR9LCKJd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bkr_shZz.js";import"./Trapezoid-D1e_n1ob.js";import"./Sector-DlkTEg1T.js";import"./GraphicalItemClipPath-Bi8mSekh.js";import"./SetGraphicalItem-DgSBR6IQ.js";import"./RechartsHookInspector-CnEEIRv_.js";import"./ChartSizeDimensions-_A7Mz-FY.js";import"./OffsetShower-D2FIRFNu.js";import"./PlotAreaShower-j01VLlBO.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...n(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(e.h1,{id:"errorbar",children:"ErrorBar"}),`
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
`,r.jsx(p,{of:i})]})}function ar(o={}){const{wrapper:e}={...n(),...o.components};return e?r.jsx(e,{...o,children:r.jsx(t,{...o})}):t(o)}export{ar as default};
